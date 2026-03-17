import { useState, useEffect, useRef, useCallback } from 'react'
import { A, C, FIREBASE_CONFIG, EMPTY_DATA } from './lib/constants'
import { gid, toDay, getTodayDayIndex, loadLocal, persist, mergeData, createEmptyObjective } from './lib/helpers'
import { initFirebaseApp, fbOnAuthChange, fbLoad, fbSave, fbSignOut, setUid } from './lib/firebase'
import { sendNotification } from './lib/notifications'
import LoginView from './pages/LoginView'
import HomeView from './pages/HomeView'
import LogView from './pages/LogView'
import HistoryView from './pages/HistoryView'
import StatsView from './pages/StatsView'
import ObjectivesView from './pages/ObjectivesView'
import ObjectiveView from './pages/ObjectiveView'
import DayView from './pages/DayView'
import CalendarView from './pages/CalendarView'

export default function App() {
  const [phase, setPhase] = useState('loading')
  const [data, setData] = useState({ ...EMPTY_DATA })
  const [view, setView] = useState('home')
  const [syncStatus, setSyncStatus] = useState('idle')
  const [selObjectiveId, setSelObjectiveId] = useState(null)
  const [selDayIndex, setSelDayIndex] = useState(null)
  const [objBackTo, setObjBackTo] = useState('objectives')

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
      setSyncStatus('syncing')
      const remote = await fbLoad()
      const local = loadLocal()
      if (remote) {
        const merged = mergeData(local, remote)
        persist(merged); setData(merged)
      } else {
        setData(local)
        await fbSave(local)
      }
      setSyncStatus('ok')
      setPhase('app')
    })
  }, [])

  const handleSaveWo = async wo => {
    const nd = { ...data, workouts: [...data.workouts, wo] }
    persist(nd); setData(nd); setView('home')
    doSync(nd)
  }

  const handleDeleteWo = async id => {
    const nd = { ...data, workouts: data.workouts.filter(w => w.id !== id) }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleDeleteAllWo = async () => {
    const nd = { ...data, workouts: [] }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleCreateObjective = name => {
    const obj = createEmptyObjective(name)
    const nd = { ...data, objectives: [...data.objectives, obj] }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleUpdateObjective = updated => {
    const nd = { ...data, objectives: data.objectives.map(o => o.id === updated.id ? updated : o) }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleDeleteObjective = id => {
    const nd = { ...data, objectives: data.objectives.filter(o => o.id !== id) }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleToggleCompletion = (objectiveId, dayIndex, date) => {
    const exists = data.completions.find(c => c.objectiveId === objectiveId && c.dayIndex === dayIndex && c.date === date)
    const newCompletions = exists
      ? data.completions.filter(c => c.id !== exists.id)
      : [...data.completions, { id: gid(), objectiveId, dayIndex, date }]
    const nd = { ...data, completions: newCompletions }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleUpdateReminder = reminder => {
    const nd = { ...data, reminder }
    persist(nd); setData(nd)
    doSync(nd)
  }

  const handleLogout = async () => {
    await fbSignOut()
    setData({ ...EMPTY_DATA })
    setView('home')
    setPhase('login')
  }

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
        const pending = data.objectives.some(obj => {
          const day = obj.days[todayIdx]
          if (!day || (!day.label && !day.exercises.length)) return false
          return !data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === todayIdx && c.date === todayStr)
        })
        if (pending) {
          sendNotification('Gym Tracker 💪', 'Tenés rutinas pendientes para hoy. ¡A entrenar!')
        }
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [data.reminder, data.objectives, data.completions])

  if (phase === 'loading') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: 32 }}>💪</div>
      <div style={{ fontSize: 13, color: C.muted }}>Cargando…</div>
    </div>
  )
  if (phase === 'login') return <LoginView onDone={() => { }} />

  const subView = ['log', 'objective', 'day'].includes(view)
  const nav = [
    { id: 'home', label: 'Inicio', ic: '🏠' },
    { id: 'objectives', label: 'Objetivos', ic: '🎯' },
    { id: 'calendar', label: 'Calendario', ic: '📅' },
    { id: 'history', label: 'Historial', ic: '📋' },
    { id: 'stats', label: 'Stats', ic: '📊' }
  ]
  const syncIc = syncStatus === 'syncing' ? '⟳' : syncStatus === 'ok' ? '☁️' : '⚠️'

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, maxWidth: 480, margin: '0 auto', paddingBottom: subView ? 0 : 76 }}>
      {!subView && <div style={{ position: 'absolute', top: 24, right: 20, display: 'flex', alignItems: 'center', gap: 10, zIndex: 50 }}>
        <span style={{ fontSize: 15 }}>{syncIc}</span>
        <button onClick={handleLogout} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9, padding: '5px 10px', fontSize: 11, color: C.muted, cursor: 'pointer' }}>salir</button>
      </div>}

      {view === 'home' && <HomeView data={data} onNewWorkout={() => setView('objectives')} onSelectObjective={id => { setSelObjectiveId(id); setObjBackTo('home'); setView('objective') }} onUpdateReminder={handleUpdateReminder} />}
      {view === 'log' && <LogView data={data} onSave={handleSaveWo} onBack={() => setView('home')} />}
      {view === 'calendar' && <CalendarView data={data} onSelectObjectiveDay={(objId, dayIdx) => { setSelObjectiveId(objId); setSelDayIndex(dayIdx); setObjBackTo('calendar'); setView('day') }} />}
      {view === 'history' && <HistoryView data={data} onDelete={handleDeleteWo} onDeleteAll={handleDeleteAllWo} />}
      {view === 'stats' && <StatsView data={data} />}
      {view === 'objectives' && <ObjectivesView data={data}
        onCreate={handleCreateObjective}
        onSelect={id => { setSelObjectiveId(id); setObjBackTo('objectives'); setView('objective') }}
        onDelete={handleDeleteObjective} />}
      {view === 'objective' && <ObjectiveView
        objective={data.objectives.find(o => o.id === selObjectiveId)}
        completions={data.completions}
        onBack={() => setView(objBackTo)}
        onUpdate={handleUpdateObjective}
        onSelectDay={idx => { setSelDayIndex(idx); setView('day') }} />}
      {view === 'day' && <DayView
        objective={data.objectives.find(o => o.id === selObjectiveId)}
        dayIndex={selDayIndex}
        completions={data.completions}
        onToggleCompletion={handleToggleCompletion}
        onBack={() => setView(objBackTo === 'calendar' ? 'calendar' : 'objective')}
        onUpdate={handleUpdateObjective} />}

      {!subView && <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: C.card, borderTop: `1px solid ${C.border}`, display: 'flex', zIndex: 100 }}>
        {nav.map(item => (
          <button key={item.id} onClick={() => setView(item.id)}
            style={{ flex: 1, padding: '10px 0 14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 20 }}>{item.ic}</span>
            <span style={{ fontSize: 10, fontWeight: view === item.id ? 800 : 400, color: view === item.id ? A : C.muted }}>{item.label}</span>
            {view === item.id && <div style={{ width: 24, height: 2, background: A, borderRadius: 2 }} />}
          </button>
        ))}
      </div>}
    </div>
  )
}
