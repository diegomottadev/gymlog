import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from 'react'
import { A, C, FIREBASE_CONFIG, EMPTY_DATA, ADMIN_EMAILS, FUNCTIONS_URL, SUBSCRIPTION_PLANS } from './lib/constants'
import { gid, toDay, getTodayDayIndex, loadLocal, persist, mergeData, createEmptyObjective, getWeekRange } from './lib/helpers'
import { initFirebaseApp, fbOnAuthChange, fbLoad, fbSave, fbSignOut, setUid, fbLoadUserRole, fbSaveUserRole, fbLoadTrainerRequest, fbLoadUserProfile, fbSaveSharedObjective, fbLoadSharedByTrainer, fbLoadSharedByStudent, fbUpdateSharedObjective, fbDeleteSharedObjective } from './lib/firebase'
import { sendNotification } from './lib/notifications'
import LoginView from './pages/LoginView'
import TrainerRegisterView from './pages/TrainerRegisterView'
import PendingApprovalView from './pages/PendingApprovalView'

const AdminView = lazy(() => import('./pages/AdminView'))
const StudentsView = lazy(() => import('./pages/StudentsView'))
const HomeView = lazy(() => import('./pages/HomeView'))
const StatsView = lazy(() => import('./pages/StatsView'))
const ObjectivesView = lazy(() => import('./pages/ObjectivesView'))
const ObjectiveView = lazy(() => import('./pages/ObjectiveView'))
const DayView = lazy(() => import('./pages/DayView'))
const TodayRoutineView = lazy(() => import('./pages/TodayRoutineView'))
const SharedDayView = lazy(() => import('./pages/SharedDayView'))
const CalendarView = lazy(() => import('./pages/CalendarView'))
const SubscriptionView = lazy(() => import('./pages/SubscriptionView'))
const AccountView = lazy(() => import('./pages/AccountView'))
const TrainerHomeView = lazy(() => import('./pages/TrainerHomeView'))
const StudentDetailView = lazy(() => import('./pages/StudentDetailView'))

const LazyFallback = <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
  <div style={{ fontSize: 13, color: C.muted }}>Cargando...</div>
</div>

export default function App() {
  const [phase, setPhase] = useState('loading')
  const [data, setData] = useState({ ...EMPTY_DATA })
  const [view, setView] = useState('home')
  const [syncStatus, setSyncStatus] = useState('idle')
  const [selObjectiveId, setSelObjectiveId] = useState(null)
  const [selDayIndex, setSelDayIndex] = useState(null)
  const [objBackTo, setObjBackTo] = useState('objectives')
  const [role, setRole] = useState('athlete')
  const [userEmail, setUserEmail] = useState('')
  const [sharedObjectives, setSharedObjectives] = useState([])
  const [selShared, setSelShared] = useState(null)
  const [selSharedDayIndex, setSelSharedDayIndex] = useState(null)
  const [selDate, setSelDate] = useState(null)
  const [subscription, setSubscription] = useState(null)
  const [userUid, setUserUid] = useState(null)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [userProfile, setUserProfile] = useState(null)
  const [selStudentEmail, setSelStudentEmail] = useState(null)

  const syncRef = useRef(null)
  const doSync = useCallback(newData => {
    if (syncRef.current) clearTimeout(syncRef.current)
    setSyncStatus('syncing')
    syncRef.current = setTimeout(async () => {
      await fbSave(newData)
      setSyncStatus('ok')
    }, 1000)
  }, [])

  useEffect(() => {
    try { initFirebaseApp(FIREBASE_CONFIG) } catch (e) { console.error(e) }
    fbOnAuthChange(async user => {
      if (!user) { setPhase('login'); return }
      setUid(user.uid)
      setUserUid(user.uid)
      setUserEmail(user.email || '')
      setSyncStatus('syncing')

      // Load user data
      const remote = await fbLoad()
      const local = loadLocal()
      let userData
      if (remote) {
        userData = mergeData(local, remote)
      } else {
        userData = local
      }
      // Deduplicate completions (keep latest per objectiveId + dayIndex)
      const dedupMap = {}
      ;(userData.completions || []).forEach(c => {
        const key = c.objectiveId + '-' + c.dayIndex
        if (!dedupMap[key] || c.date > dedupMap[key].date) {
          dedupMap[key] = c
        }
      })
      userData.completions = Object.values(dedupMap)
      // Auto-detect expired objectives: if endDate is in the past and active is not explicitly set, mark inactive
      const todayStr = new Date().toISOString().slice(0, 10)
      userData.objectives = userData.objectives.map(obj => {
        if (obj.endDate && obj.endDate < todayStr && obj.active === undefined) {
          return { ...obj, active: false }
        }
        return obj
      })
      persist(userData); setData(userData)
      await fbSave(userData)
      setSyncStatus('ok')

      // Detect role
      let detectedRole = 'athlete'
      if (ADMIN_EMAILS.includes(user.email)) {
        detectedRole = 'admin'
        setRole('admin')
        await fbSaveUserRole('admin')
      } else {
        const userRole = await fbLoadUserRole()
        if (userRole === 'pending_trainer') {
          const req = await fbLoadTrainerRequest()
          if (req && req.status === 'approved') {
            detectedRole = 'trainer'
            setRole('trainer')
            await fbSaveUserRole('trainer')
          } else {
            setRole('pending_trainer')
            setPhase('pendingApproval')
            return
          }
        } else if (userRole === 'trainer') {
          detectedRole = 'trainer'
          setRole('trainer')
        } else {
          setRole('athlete')
        }
      }

      // Check subscription (admin skips)
      if (detectedRole !== 'admin') {
        try {
          const subRes = await fetch(`${FUNCTIONS_URL}/initTrial`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uid: user.uid })
          })
          const subData = await subRes.json()
          setSubscription(subData.subscription)
          if (subData.subscription.status === 'expired' || subData.subscription.status === 'none') {
            setPhase('subscription')
            return
          }
        } catch (e) {
          console.error('subscription check failed:', e)
        }
      }
      setPhase('app')

      // Load user profile
      const loadedProfile = await fbLoadUserProfile()
      setUserProfile(loadedProfile)

      // Check if returning from subscription success
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('subscription') === 'success') {
        setShowWelcomeModal(true)
        // Clean URL without reload
        window.history.replaceState({}, '', window.location.pathname)
      }

      // Load shared objectives
      const loadedRole = ADMIN_EMAILS.includes(user.email) ? 'admin' : await fbLoadUserRole()
      if (loadedRole === 'trainer' || loadedRole === 'admin') {
        const shared = await fbLoadSharedByTrainer()
        setSharedObjectives(shared)
      } else {
        const shared = await fbLoadSharedByStudent(user.email)
        setSharedObjectives(shared)
      }
    })
  }, [])

  const updateData = useCallback((updater) => {
    setData(prev => {
      const nd = updater(prev)
      persist(nd)
      doSync(nd)
      return nd
    })
  }, [doSync])

  const handleCreateObjective = useCallback(name => {
    const obj = createEmptyObjective(name)
    updateData(prev => ({ ...prev, objectives: [...prev.objectives, obj] }))
  }, [updateData])

  const handleUpdateObjective = useCallback(updated => {
    updateData(prev => ({ ...prev, objectives: prev.objectives.map(o => o.id === updated.id ? updated : o) }))
  }, [updateData])

  const handleDeleteObjective = useCallback(id => {
    updateData(prev => ({
      ...prev,
      objectives: prev.objectives.filter(o => o.id !== id),
      completions: prev.completions.filter(c => c.objectiveId !== id)
    }))
  }, [updateData])

  const handleToggleCompletion = useCallback((objectiveId, dayIndex, date) => {
    updateData(prev => {
      const exists = prev.completions.find(c => c.objectiveId === objectiveId && c.dayIndex === dayIndex && c.date === date)
      const newCompletions = exists
        ? prev.completions.filter(c => c.id !== exists.id)
        : [...prev.completions, { id: gid(), objectiveId, dayIndex, date }]
      return { ...prev, completions: newCompletions }
    })
  }, [updateData])

  const handleUpdateReminder = useCallback(reminder => {
    updateData(prev => ({ ...prev, reminder }))
  }, [updateData])

  const handleLogout = useCallback(async () => {
    await fbSignOut()
    setData({ ...EMPTY_DATA })
    setView('home')
    setRole('athlete')
    setSharedObjectives([])
    setUserEmail('')
    setUserUid(null)
    setSubscription(null)
    setUserProfile(null)
    setPhase('login')
  }, [])

  // Shared objectives handlers
  const handleSaveShared = useCallback(async (obj) => {
    const id = await fbSaveSharedObjective(obj)
    const shared = role === 'trainer' || role === 'admin'
      ? await fbLoadSharedByTrainer()
      : await fbLoadSharedByStudent(userEmail)
    setSharedObjectives(shared)
    return id
  }, [role, userEmail])

  const handleUpdateShared = useCallback(async (id, objective) => {
    await fbUpdateSharedObjective(id, objective)
    setSharedObjectives(prev => prev.map(s => s.id === id ? { ...s, objective } : s))
    setSelShared(prev => prev && prev.id === id ? { ...prev, objective } : prev)
  }, [])

  const handleDeleteShared = useCallback(async (id) => {
    await fbDeleteSharedObjective(id)
    setSharedObjectives(prev => prev.filter(s => s.id !== id))
  }, [])

  // Reminder notification interval
  const lastFiredRef = useRef('')
  useEffect(() => {
    const interval = setInterval(() => {
      if (!data.reminder.enabled) return
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const current = hh + ':' + mm
      const todayStr = toDay()
      if (current === data.reminder.time && lastFiredRef.current !== todayStr) {
        lastFiredRef.current = todayStr
        const todayIdx = getTodayDayIndex()
        const pending = data.objectives.filter(obj => obj.active !== false).some(obj => {
          const day = obj.days[todayIdx]
          if (!day || (!day.label && !day.exercises.length)) return false
          return !data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === todayIdx && c.date === todayStr)
        })
        if (pending) {
          sendNotification('Gym Tracker', 'Tenes rutinas pendientes para hoy. A entrenar!')
        }
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [data.reminder, data.objectives, data.completions])

  // Nav by role
  const nav = useMemo(() => {
    const navByRole = {
      athlete: [
        { id: 'home', label: 'Inicio', ic: '🏠' },
        { id: 'objectives', label: 'Objetivos', ic: '🎯' },
        { id: 'calendar', label: 'Calendario', ic: '📅' },
        { id: 'stats', label: 'Stats', ic: '📊' },
        { id: 'account', label: 'Cuenta', ic: '👤' }
      ],
      trainer: [
        { id: 'home', label: 'Inicio', ic: '🏠' },
        { id: 'students', label: 'Alumnos', ic: '👥' },
        { id: 'objectives', label: 'Objetivos', ic: '🎯' },
        { id: 'calendar', label: 'Calendario', ic: '📅' },
        { id: 'stats', label: 'Stats', ic: '📊' },
        { id: 'account', label: 'Cuenta', ic: '👤' }
      ],
      admin: [
        { id: 'home', label: 'Inicio', ic: '🏠' },
        { id: 'admin', label: 'Admin', ic: '📋' },
        { id: 'objectives', label: 'Objetivos', ic: '🎯' },
        { id: 'stats', label: 'Stats', ic: '📊' },
        { id: 'account', label: 'Cuenta', ic: '👤' }
      ]
    }
    return navByRole[role] || navByRole.athlete
  }, [role])

  const handleSharedCompletionChanged = useCallback((sharedId, newCompletions) => {
    setSharedObjectives(prev => prev.map(s => s.id === sharedId ? { ...s, completions: newCompletions } : s))
    setSelShared(prev => prev && prev.id === sharedId ? { ...prev, completions: newCompletions } : prev)
  }, [])

  if (phase === 'loading') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 32 }}>💪</div>
      <div style={{ fontSize: 13, color: C.muted }}>Cargando...</div>
    </div>
  )
  if (phase === 'login') return <LoginView onDone={() => { }} onTrainerRegister={() => setPhase('trainerRegister')} />
  if (phase === 'trainerRegister') return <TrainerRegisterView onDone={() => setPhase('pendingApproval')} onBack={() => setPhase('login')} />
  if (phase === 'pendingApproval') return <PendingApprovalView onApproved={() => { setRole('trainer'); setPhase('app') }} onLogout={handleLogout} />
  if (phase === 'subscription') return <SubscriptionView uid={userUid} email={userEmail} role={role} subscription={subscription} onLogout={handleLogout} />

  const subView = ['objective', 'day', 'todayRoutine', 'sharedObjective', 'sharedDay', 'premium', 'studentDetail'].includes(view)
  const syncIc = syncStatus === 'syncing' ? '⟳' : syncStatus === 'ok' ? '☁️' : '⚠️'

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, maxWidth: 480, margin: '0 auto', paddingBottom: subView ? 0 : (role !== 'admin' && (!subscription || subscription.status !== 'active') ? 108 : 76) }}>
      {!subView && <div style={{ position: 'absolute', top: 24, right: 20, display: 'flex', alignItems: 'center', gap: 10, zIndex: 50 }}>
        <span style={{ fontSize: 15 }}>{syncIc}</span>
        {role !== 'athlete' && <span style={{ fontSize: 9, color: A, fontWeight: 700, background: `${A}22`, padding: '2px 8px', borderRadius: 6 }}>{role === 'admin' ? 'ADMIN' : 'TRAINER'}</span>}
      </div>}

      <Suspense fallback={LazyFallback}>
        {view === 'home' && role === 'athlete' && <HomeView data={data} sharedObjectives={sharedObjectives} onSelectObjective={id => { setSelObjectiveId(id); setObjBackTo('home'); setView('objective') }} onSelectTodayRoutine={id => { setSelObjectiveId(id); setView('todayRoutine') }} onUpdateReminder={handleUpdateReminder} onSelectShared={so => { setSelShared(so); setView('sharedObjective') }} />}
        {view === 'home' && (role === 'trainer' || role === 'admin') && <TrainerHomeView sharedObjectives={sharedObjectives} onSelectStudent={email => { setSelStudentEmail(email); setView('studentDetail') }} />}
        {view === 'todayRoutine' && <TodayRoutineView objective={data.objectives.find(o => o.id === selObjectiveId)} completions={data.completions} onToggleCompletion={handleToggleCompletion} onBack={() => setView('home')} />}
        {view === 'calendar' && <CalendarView data={data} onSelectObjectiveDay={(objId, dayIdx, date) => { setSelObjectiveId(objId); setSelDayIndex(dayIdx); setSelDate(date || null); setObjBackTo('calendar'); setView('day') }} onToggleCompletion={handleToggleCompletion} />}
        {view === 'stats' && <StatsView data={data} />}
        {view === 'objectives' && <ObjectivesView data={data}
          onCreate={handleCreateObjective}
          onSelect={id => { setSelObjectiveId(id); setObjBackTo('objectives'); setView('objective') }}
          onDelete={handleDeleteObjective}
          onUpdate={handleUpdateObjective} />}
        {view === 'objective' && <ObjectiveView
          objective={data.objectives.find(o => o.id === selObjectiveId)}
          completions={data.completions}
          onBack={() => setView(objBackTo)}
          onUpdate={handleUpdateObjective}
          onSelectDay={idx => { setSelDayIndex(idx); setView('day') }} />}
        {view === 'day' && <DayView
          objective={data.objectives.find(o => o.id === selObjectiveId)}
          dayIndex={selDayIndex}
          selectedDate={selDate}
          completions={data.completions}
          onToggleCompletion={handleToggleCompletion}
          onBack={() => { setSelDate(null); setView(objBackTo === 'calendar' ? 'calendar' : 'objective') }}
          onUpdate={handleUpdateObjective} />}

        {view === 'premium' && <SubscriptionView uid={userUid} email={userEmail} role={role} subscription={subscription} onLogout={handleLogout} onBack={() => setView('home')} />}
        {view === 'account' && <AccountView email={userEmail} role={role} subscription={subscription} profile={userProfile} onUpdateProfile={setUserProfile} onLogout={handleLogout} />}
        {view === 'admin' && <AdminView adminEmail={userEmail} />}
        {view === 'students' && <StudentsView
          sharedObjectives={sharedObjectives}
          trainerEmail={userEmail}
          onSaveShared={handleSaveShared}
          onDeleteShared={handleDeleteShared}
          onSelectStudent={email => { setSelStudentEmail(email); setView('studentDetail') }} />}
        {view === 'studentDetail' && selStudentEmail && <StudentDetailView
          studentEmail={selStudentEmail}
          sharedObjectives={sharedObjectives}
          trainerEmail={userEmail}
          onSaveShared={handleSaveShared}
          onDeleteShared={handleDeleteShared}
          onSelectShared={so => { setSelShared(so); setView('sharedObjective') }}
          onBack={() => setView('students')} />}
        {view === 'sharedObjective' && selShared && <ObjectiveView
          objective={selShared.objective}
          completions={role === 'athlete' ? (selShared.completions || []).map(c => ({ ...c, objectiveId: selShared.objective.id })) : []}
          readOnly={role === 'athlete'}
          onBack={() => setView(role === 'athlete' ? 'home' : (selStudentEmail ? 'studentDetail' : 'students'))}
          onUpdate={updated => handleUpdateShared(selShared.id, updated)}
          onSelectDay={idx => { setSelSharedDayIndex(idx); setView('sharedDay') }} />}
        {view === 'sharedDay' && selShared && (
          role === 'athlete'
            ? <SharedDayView
                sharedObjective={selShared}
                dayIndex={selSharedDayIndex}
                onBack={() => setView('sharedObjective')}
                onUpdateShared={handleUpdateShared}
                onCompletionChanged={handleSharedCompletionChanged} />
            : <DayView
                objective={selShared.objective}
                dayIndex={selSharedDayIndex}
                completions={[]}
                onToggleCompletion={() => {}}
                onBack={() => setView('sharedObjective')}
                onUpdate={updated => handleUpdateShared(selShared.id, updated)} />
        )}
      </Suspense>

      {!subView && role !== 'admin' && (!subscription || subscription.status !== 'active') && (
        <div style={{ position: 'fixed', bottom: 68, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, zIndex: 101 }}>
          <button onClick={() => setView('premium')}
            style={{ width: '100%', padding: '7px 0', background: 'linear-gradient(135deg, #FFD700, #FFA500)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: 14 }}>⭐</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: '#111' }}>Premium</span>
            {subscription && subscription.status === 'trial' && <span style={{ fontSize: 10, fontWeight: 700, color: '#111', background: 'rgba(0,0,0,.15)', padding: '2px 6px', borderRadius: 6 }}>Trial activo</span>}
          </button>
        </div>
      )}

      {!subView && <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: C.card, borderTop: `1px solid ${C.border}`, display: 'flex', zIndex: 100 }}>
        {nav.map(item => (
          <button key={item.id} onClick={() => setView(item.id)}
            style={{ flex: 1, padding: '10px 0 14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 24 }}>{item.ic}</span>
            <span style={{ fontSize: 12, fontWeight: view === item.id ? 800 : 400, color: view === item.id ? A : '#fff' }}>{item.label}</span>
            {view === item.id && <div style={{ width: 24, height: 2, background: A, borderRadius: 2 }} />}
          </button>
        ))}
      </div>}

      {showWelcomeModal && (() => {
        const plan = role === 'trainer' ? 'trainer' : 'athlete'
        const prices = SUBSCRIPTION_PLANS[plan]
        const startDate = subscription && subscription.startDate
          ? new Date(subscription.startDate).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
          : new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
        const renewalDate = subscription && subscription.renewalDate
          ? new Date(subscription.renewalDate).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
          : (() => { const d = new Date(); d.setMonth(d.getMonth() + 1); return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }) })()
        const features = [
          { ic: '🎯', text: 'Objetivos ilimitados' },
          { ic: '📅', text: 'Calendario de entrenamientos' },
          { ic: '📊', text: 'Estadisticas detalladas' },
          { ic: '🔔', text: 'Recordatorios diarios' },
          { ic: '☁️', text: 'Sincronizacion en la nube' },
          ...(role === 'trainer' ? [
            { ic: '👥', text: 'Gestion de alumnos' },
            { ic: '📋', text: 'Rutinas compartidas' }
          ] : [])
        ]
        return (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
            onClick={() => setShowWelcomeModal(false)}>
            <div onClick={e => e.stopPropagation()}
              style={{ background: C.card, borderRadius: 20, padding: '32px 24px', maxWidth: 400, width: '100%', border: `1px solid ${A}44`, maxHeight: '90vh', overflowY: 'auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Bienvenido a Premium!</div>
                <div style={{ fontSize: 13, color: C.muted }}>Tu suscripcion fue activada con exito</div>
              </div>

              <div style={{ background: C.hi, borderRadius: 14, padding: 16, marginBottom: 16, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', marginBottom: 12 }}>DETALLES DEL PLAN</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Plan</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: A }}>{prices.label}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Precio</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>${prices.ars.toLocaleString('es-AR')} ARS / ${prices.usd} USD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Inicio</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{startDate}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Renovacion</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{renewalDate}</span>
                </div>
              </div>

              <div style={{ background: C.hi, borderRadius: 14, padding: 16, marginBottom: 24, border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', marginBottom: 12 }}>QUE INCLUYE</div>
                {features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
                    <span style={{ fontSize: 16 }}>{f.ic}</span>
                    <span style={{ fontSize: 13 }}>{f.text}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => setShowWelcomeModal(false)}
                style={{ width: '100%', padding: 14, fontSize: 15, fontWeight: 800, borderRadius: 14, border: 'none', cursor: 'pointer', background: A, color: '#111' }}>
                Comenzar
              </button>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
