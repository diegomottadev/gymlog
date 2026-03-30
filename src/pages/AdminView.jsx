import { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react'
import { Check, Users, ChevronRight, Search, RefreshCw, Cloud, AlertTriangle, Pencil, Dumbbell } from 'lucide-react'
import { A, C, FUNCTIONS_URL } from '../lib/constants'
import { fbLoadPendingRequests, fbRejectRequest, fbSetUserExempt, fbLoadUserExempt, fbLoadProfileByUid, fbSaveProfileByUid, fbLoadTrainers, fbSetUserActive, fbLoadUserActive } from '../lib/firebase'
import { gid, createEmptyObjective, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'
import Input from '../components/Input'
import BackHeader from '../components/BackHeader'

const ObjectivesView = lazy(() => import('./ObjectivesView'))
const ObjectiveView = lazy(() => import('./ObjectiveView'))
const DayView = lazy(() => import('./DayView'))
const StatsView = lazy(() => import('./StatsView'))

const LazyFallback = <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando...</div>

function Toggle({ value, loading, onToggle, label, description }) {
  return (
    <div
      onClick={loading ? undefined : onToggle}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: C.card, border: `1px solid ${value ? A + '66' : C.border}`,
        borderRadius: 12, padding: '12px 16px', cursor: loading ? 'default' : 'pointer',
        opacity: loading ? 0.6 : 1, transition: 'opacity .2s'
      }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700 }}>{label}</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{description}</div>
      </div>
      <div style={{
        width: 44, height: 24, borderRadius: 12, padding: 2,
        background: value ? A : C.border, transition: 'background .2s',
        display: 'flex', alignItems: 'center'
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: 10, background: C.text,
          transform: value ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform .2s'
        }} />
      </div>
    </div>
  )
}

export default function AdminView({ adminEmail, initialTab = 'requests' }) {
  const [tab, setTab] = useState(initialTab)

  // --- Requests ---
  const [requests, setRequests] = useState([])
  const [reqLoading, setReqLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(null)
  const [message, setMessage] = useState(null)

  const loadRequests = async () => {
    setReqLoading(true)
    const reqs = await fbLoadPendingRequests()
    setRequests(reqs)
    setReqLoading(false)
  }

  useEffect(() => { loadRequests() }, [])

  const handleApprove = async (requestId) => {
    setActionLoading(requestId)
    setMessage(null)
    try {
      const res = await fetch(`${FUNCTIONS_URL}/approveTrainer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId })
      })
      const data = await res.json()
      if (data.success) {
        setRequests(prev => prev.filter(r => r.id !== requestId))
        setMessage({ type: 'success', text: 'Trainer aprobado. Se envio email con credenciales.' })
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al aprobar' })
      }
    } catch (e) {
      setMessage({ type: 'error', text: e.message })
    }
    setActionLoading(null)
  }

  const handleReject = async (requestId) => {
    setActionLoading(requestId)
    await fbRejectRequest(requestId)
    setRequests(prev => prev.filter(r => r.id !== requestId))
    setActionLoading(null)
  }

  // --- Athletes ---
  const [athletes, setAthletes] = useState([])
  const [athLoading, setAthLoading] = useState(false)
  const [athSearch, setAthSearch] = useState('')

  // --- Trainers ---
  const [trainers, setTrainers] = useState([])
  const [trLoading, setTrLoading] = useState(false)
  const [trSearch, setTrSearch] = useState('')

  // --- Selected user (athlete or trainer) ---
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedUserType, setSelectedUserType] = useState(null) // 'athlete' | 'trainer'
  const [athleteData, setAthleteData] = useState(null)
  const [athDataLoading, setAthDataLoading] = useState(false)
  const [adminSubView, setAdminSubView] = useState('list')
  const [selObjectiveId, setSelObjectiveId] = useState(null)
  const [selDayIndex, setSelDayIndex] = useState(null)
  const [athSyncStatus, setAthSyncStatus] = useState('idle')
  const syncTimerRef = useRef(null)

  // --- Edit profile state ---
  const [userExempt, setUserExempt] = useState(false)
  const [exemptLoading, setExemptLoading] = useState(false)
  const [userActive, setUserActive] = useState(true)
  const [activeLoading, setActiveLoading] = useState(false)
  const [userProfile, setUserProfile] = useState(null)
  const [editingProfile, setEditingProfile] = useState(false)
  const [editName, setEditName] = useState('')
  const [savingProfile, setSavingProfile] = useState(false)

  const loadAthletes = async () => {
    setAthLoading(true)
    try {
      const res = await fetch(`${FUNCTIONS_URL}/listAthletes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminEmail })
      })
      const data = await res.json()
      setAthletes(data.athletes || [])
    } catch (e) {
      console.error('loadAthletes error:', e)
    }
    setAthLoading(false)
  }

  const loadTrainersList = async () => {
    setTrLoading(true)
    const list = await fbLoadTrainers()
    setTrainers(list.map(t => ({
      uid: t.uid,
      displayName: t.profile?.fullName || null,
      email: t.email || t.uid,
      active: t.active !== false
    })))
    setTrLoading(false)
  }

  const loadAthleteData = async (uid) => {
    setAthDataLoading(true)
    try {
      const res = await fetch(`${FUNCTIONS_URL}/loadAthleteData`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminEmail, athleteUid: uid })
      })
      const data = await res.json()
      setAthleteData(data)
      setAdminSubView('objectives')
    } catch (e) {
      console.error('loadAthleteData error:', e)
    }
    setAthDataLoading(false)
  }

  const saveAthleteData = useCallback((newData) => {
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current)
    setAthSyncStatus('syncing')
    syncTimerRef.current = setTimeout(async () => {
      try {
        await fetch(`${FUNCTIONS_URL}/saveAthleteData`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminEmail, athleteUid: selectedUser.uid, data: newData })
        })
        setAthSyncStatus('ok')
      } catch (e) {
        console.error('saveAthleteData error:', e)
        setAthSyncStatus('error')
      }
    }, 2000)
  }, [adminEmail, selectedUser])

  const updateAthleteData = useCallback((updater) => {
    setAthleteData(prev => {
      const nd = updater(prev)
      saveAthleteData(nd)
      return nd
    })
  }, [saveAthleteData])

  const handleAdminCreateObjective = useCallback(name => {
    const obj = createEmptyObjective(name)
    updateAthleteData(prev => ({ ...prev, objectives: [...prev.objectives, obj] }))
  }, [updateAthleteData])

  const handleAdminUpdateObjective = useCallback(updated => {
    updateAthleteData(prev => ({ ...prev, objectives: prev.objectives.map(o => o.id === updated.id ? updated : o) }))
  }, [updateAthleteData])

  const handleAdminDeleteObjective = useCallback(id => {
    updateAthleteData(prev => ({
      ...prev,
      objectives: prev.objectives.filter(o => o.id !== id),
      completions: prev.completions.filter(c => c.objectiveId !== id)
    }))
  }, [updateAthleteData])

  const handleAdminToggleCompletion = useCallback((objectiveId, dayIndex, date) => {
    updateAthleteData(prev => {
      let exists = prev.completions.find(c => c.objectiveId === objectiveId && c.dayIndex === dayIndex && c.date === date)
      if (!exists) {
        const { mon, sun } = getWeekRange()
        exists = prev.completions.find(c => c.objectiveId === objectiveId && c.dayIndex === dayIndex && c.date >= mon && c.date <= sun)
      }
      const newCompletions = exists
        ? prev.completions.filter(c => c.id !== exists.id)
        : [...prev.completions, { id: gid(), objectiveId, dayIndex, date }]
      return { ...prev, completions: newCompletions }
    })
  }, [updateAthleteData])

  const handleSaveProfile = async () => {
    if (!selectedUser || savingProfile) return
    setSavingProfile(true)
    const updated = { ...userProfile, fullName: editName.trim() }
    await fbSaveProfileByUid(selectedUser.uid, updated)
    setUserProfile(updated)
    const newName = editName.trim() || selectedUser.displayName
    if (selectedUserType === 'athlete') {
      setAthletes(prev => prev.map(a => a.uid === selectedUser.uid ? { ...a, displayName: newName } : a))
    } else {
      setTrainers(prev => prev.map(t => t.uid === selectedUser.uid ? { ...t, displayName: newName } : t))
    }
    setSelectedUser(prev => ({ ...prev, displayName: newName }))
    setEditingProfile(false)
    setSavingProfile(false)
  }

  const handleToggleExempt = async () => {
    if (!selectedUser || exemptLoading) return
    setExemptLoading(true)
    const newVal = !userExempt
    await fbSetUserExempt(selectedUser.uid, newVal)
    setUserExempt(newVal)
    setExemptLoading(false)
  }

  const handleToggleActive = async () => {
    if (!selectedUser || activeLoading) return
    setActiveLoading(true)
    const newVal = !userActive
    await fbSetUserActive(selectedUser.uid, newVal)
    setUserActive(newVal)
    setActiveLoading(false)
  }

  const openEditProfile = async (user, type) => {
    setSelectedUser(user)
    setSelectedUserType(type)
    setUserExempt(false)
    setUserActive(true)
    setUserProfile(null)
    setEditingProfile(false)
    setAdminSubView('editProfile')
    const [exempt, profile, active] = await Promise.all([
      fbLoadUserExempt(user.uid),
      fbLoadProfileByUid(user.uid),
      fbLoadUserActive(user.uid)
    ])
    setUserExempt(exempt)
    setUserProfile(profile)
    setUserActive(active)
    setEditName(profile?.fullName || user.displayName || '')
  }

  const selectAthlete = async (ath) => {
    setSelectedUser(ath)
    setSelectedUserType('athlete')
    setUserProfile(null)
    setEditingProfile(false)
    loadAthleteData(ath.uid)
    const [exempt, profile, active] = await Promise.all([
      fbLoadUserExempt(ath.uid),
      fbLoadProfileByUid(ath.uid),
      fbLoadUserActive(ath.uid)
    ])
    setUserExempt(exempt)
    setUserProfile(profile)
    setUserActive(active)
    setEditName(profile?.fullName || ath.displayName || '')
  }

  const backToList = () => {
    setSelectedUser(null)
    setSelectedUserType(null)
    setAthleteData(null)
    setUserExempt(false)
    setUserActive(true)
    setUserProfile(null)
    setEditingProfile(false)
    setAdminSubView('list')
    setSelObjectiveId(null)
    setSelDayIndex(null)
    if (tab === 'athletes') loadAthletes()
    if (tab === 'trainers') loadTrainersList()
  }

  useEffect(() => {
    if (tab === 'athletes' && !athletes.length) loadAthletes()
    if (tab === 'trainers' && !trainers.length) loadTrainersList()
  }, [tab])

  const SyncIcon = athSyncStatus === 'syncing'
    ? <RefreshCw size={16} color={C.muted} style={{ animation: 'spin 1s linear infinite' }} />
    : athSyncStatus === 'ok'
    ? <Cloud size={16} color={A} />
    : athSyncStatus === 'error'
    ? <AlertTriangle size={16} color={C.danger} />
    : null

  const roleBadge = selectedUserType === 'trainer' ? 'TRAINER' : 'ATHLETE'

  return (
    <div>
      {adminSubView !== 'editProfile' && !selectedUser && tab === 'requests' && (
        <div style={{ padding: '24px 8px 16px' }}>
          <div style={{ fontSize: 24, fontWeight: 800 }}>Solicitudes</div>
        </div>
      )}

      {adminSubView !== 'editProfile' && !selectedUser && (tab === 'athletes' || tab === 'trainers') && (
        <div style={{ padding: '24px 8px 8px' }}>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Usuarios</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
            {[['athletes', 'Atletas'], ['trainers', 'Trainers']].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)}
                style={{
                  flex: 1, padding: '12px 0', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  background: tab === id ? A : C.card, color: tab === id ? '#111' : C.text,
                  border: `1px solid ${tab === id ? A : C.border}`
                }}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {/* === REQUESTS TAB === */}
      {tab === 'requests' && !selectedUser && (
        <div style={{ padding: '0 8px' }}>
          {message && (
            <div style={{
              padding: '12px 16px', borderRadius: 12, fontSize: 14, marginBottom: 12,
              background: message.type === 'success' ? `${A}22` : 'rgba(255,85,85,.1)',
              color: message.type === 'success' ? A : C.danger,
              border: `1px solid ${message.type === 'success' ? A + '44' : C.danger}`
            }}>{message.text}</div>
          )}

          {reqLoading && <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando...</div>}

          {!reqLoading && requests.length === 0 && (
            <div style={{ textAlign: 'center', padding: 48 }}>
              <Check size={32} color={A} style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 14, color: C.muted }}>No hay solicitudes pendientes</div>
            </div>
          )}

          {requests.map(req => (
            <Card key={req.id}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{req.fullName}</div>
                <div style={{ fontSize: 14, color: A, marginBottom: 4 }}>{req.email}</div>
                {req.phone && (
                  <div style={{ fontSize: 13, color: C.muted }}>
                    Tel: {req.phone.countryCode} {req.phone.areaCode} {req.phone.number}
                  </div>
                )}
                <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Alumnos: {req.studentCount}</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
                  {new Date(req.createdAt).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <Btn onClick={() => handleApprove(req.id)} disabled={actionLoading === req.id}
                  style={{ flex: 1, padding: 12, borderRadius: 12 }}>
                  {actionLoading === req.id ? '...' : 'Aprobar'}
                </Btn>
                <button onClick={() => handleReject(req.id)} disabled={actionLoading === req.id}
                  style={{ flex: 1, padding: 12, borderRadius: 12, background: C.danger, color: C.text, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer', opacity: actionLoading === req.id ? 0.5 : 1 }}>
                  {actionLoading === req.id ? '...' : 'Rechazar'}
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* === ATHLETES TAB === */}
      {tab === 'athletes' && !selectedUser && (
        <div style={{ padding: '0 8px' }}>
          {athLoading && <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando atletas...</div>}

          {!athLoading && athletes.length === 0 && (
            <div style={{ textAlign: 'center', padding: 48 }}>
              <Users size={32} color={C.muted} style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 14, color: C.muted }}>No hay atletas registrados</div>
            </div>
          )}

          {!athLoading && athletes.length > 0 && (
            <div style={{ marginBottom: 12, position: 'relative' }}>
              <Search size={16} color={C.muted} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Buscar alumno..." value={athSearch} onChange={e => setAthSearch(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 36px', fontSize: 14, borderRadius: 12, background: C.card, color: C.text, border: `1px solid ${C.border}`, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          )}

          {athletes
            .filter(ath => {
              if (!athSearch.trim()) return true
              const q = athSearch.toLowerCase()
              return (ath.displayName || '').toLowerCase().includes(q) || (ath.email || '').toLowerCase().includes(q)
            })
            .sort((a, b) => {
              if (a.displayName && !b.displayName) return -1
              if (!a.displayName && b.displayName) return 1
              return (a.displayName || a.email || '').toLowerCase().localeCompare((b.displayName || b.email || '').toLowerCase(), 'es')
            })
            .map(ath => (
            <Card key={ath.uid} onClick={() => selectAthlete(ath)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{ath.displayName || ath.email}</div>
                  {ath.displayName && <div style={{ fontSize: 13, color: A }}>{ath.email}</div>}
                  <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>
                    {ath.objectiveCount} objetivos · {ath.completionCount} completadas
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <button onClick={e => { e.stopPropagation(); openEditProfile(ath, 'athlete') }}
                    style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Pencil size={14} color={A} />
                  </button>
                  <ChevronRight size={18} color={C.muted} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* === TRAINERS TAB === */}
      {tab === 'trainers' && !selectedUser && (
        <div style={{ padding: '0 8px' }}>
          {trLoading && <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando trainers...</div>}

          {!trLoading && trainers.length === 0 && (
            <div style={{ textAlign: 'center', padding: 48 }}>
              <Dumbbell size={32} color={C.muted} style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 14, color: C.muted }}>No hay trainers registrados</div>
            </div>
          )}

          {!trLoading && trainers.length > 0 && (
            <div style={{ marginBottom: 12, position: 'relative' }}>
              <Search size={16} color={C.muted} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Buscar trainer..." value={trSearch} onChange={e => setTrSearch(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 36px', fontSize: 14, borderRadius: 12, background: C.card, color: C.text, border: `1px solid ${C.border}`, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          )}

          {trainers
            .filter(tr => {
              if (!trSearch.trim()) return true
              const q = trSearch.toLowerCase()
              return (tr.displayName || '').toLowerCase().includes(q) || (tr.email || '').toLowerCase().includes(q)
            })
            .sort((a, b) => {
              if (a.displayName && !b.displayName) return -1
              if (!a.displayName && b.displayName) return 1
              return (a.displayName || a.email || '').toLowerCase().localeCompare((b.displayName || b.email || '').toLowerCase(), 'es')
            })
            .map(tr => (
            <Card key={tr.uid} style={{ opacity: tr.active ? 1 : 0.5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{tr.displayName || tr.email}</div>
                    {!tr.active && <span style={{ fontSize: 9, color: C.danger, fontWeight: 700, background: `${C.danger}22`, padding: '2px 6px', borderRadius: 4 }}>INACTIVO</span>}
                  </div>
                  {tr.displayName && <div style={{ fontSize: 13, color: A }}>{tr.email}</div>}
                </div>
                <button onClick={() => openEditProfile(tr, 'trainer')}
                  style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Pencil size={14} color={A} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* === EDIT PROFILE (athlete or trainer) === */}
      {selectedUser && adminSubView === 'editProfile' && (
        <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 8px' }}>
          <BackHeader onBack={backToList} title={selectedUserType === 'trainer' ? 'Cuenta del trainer' : 'Cuenta del alumno'} />

          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${A}22`, border: `2px solid ${A}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 32 }}>
              {(userProfile?.fullName || selectedUser.displayName || selectedUser.email || '?')[0].toUpperCase()}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{userProfile?.fullName || selectedUser.displayName || 'Sin nombre'}</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{selectedUser.email}</div>
            <span style={{ fontSize: 10, color: A, fontWeight: 700, background: `${A}22`, padding: '2px 8px', borderRadius: 8, marginTop: 8, display: 'inline-block' }}>{roleBadge}</span>
          </div>

          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px' }}>DATOS PERSONALES</div>
              {!editingProfile && (
                <span onClick={() => { setEditName(userProfile?.fullName || selectedUser.displayName || ''); setEditingProfile(true) }}
                  style={{ fontSize: 12, color: A, cursor: 'pointer', fontWeight: 700 }}>Editar</span>
              )}
            </div>

            {editingProfile ? (
              <div>
                <label style={{ fontSize: 12, color: C.muted, display: 'block', marginBottom: 4 }}>Nombre completo</label>
                <Input value={editName} onChange={e => setEditName(e.target.value)} placeholder="Nombre completo" />
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <Btn onClick={handleSaveProfile} disabled={savingProfile} style={{ flex: 1, padding: 12, fontSize: 13, borderRadius: 12 }}>
                    {savingProfile ? '...' : 'Guardar'}
                  </Btn>
                  <button onClick={() => setEditingProfile(false)}
                    style={{ flex: 1, padding: 12, fontSize: 13, borderRadius: 12, background: C.hi, border: `1px solid ${C.border}`, color: C.text, cursor: 'pointer' }}>
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Nombre</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{userProfile?.fullName || selectedUser.displayName || '-'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Email</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{selectedUser.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Rol</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{selectedUserType === 'trainer' ? 'Personal Trainer' : 'Atleta'}</span>
                </div>
              </div>
            )}
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
            <Toggle
              value={userActive}
              loading={activeLoading}
              onToggle={handleToggleActive}
              label="Cuenta activa"
              description={userActive ? 'El usuario puede acceder a la app' : 'Cuenta inactiva, no puede acceder'}
            />
            <Toggle
              value={userExempt}
              loading={exemptLoading}
              onToggle={handleToggleExempt}
              label="Exento de pago"
              description={userExempt ? 'No requiere suscripcion' : 'Requiere suscripcion activa'}
            />
          </div>
        </div>
      )}

      {/* === ATHLETE DETAIL === */}
      {selectedUser && selectedUserType === 'athlete' && adminSubView !== 'editProfile' && (
        <div>
          <div style={{ padding: '0 8px 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: C.hi, border: `1px solid ${A}33`, borderRadius: 12, padding: '12px 16px' }}>
              <button onClick={backToList}
                style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, width: 32, height: 32, color: C.text, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={18} color={C.text} style={{ transform: 'rotate(180deg)' }} />
              </button>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: C.muted }}>Gestionando</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: A }}>{selectedUser.displayName || selectedUser.email}</div>
              </div>
              {SyncIcon}
            </div>
          </div>

          {adminSubView !== 'objective' && adminSubView !== 'day' && (
            <div style={{ padding: '0 8px 12px', display: 'flex', gap: 8 }}>
              {[['objectives', 'Objetivos'], ['stats', 'Stats']].map(([id, label]) => (
                <button key={id} onClick={() => setAdminSubView(id)}
                  style={{
                    flex: 1, padding: '12px 0', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                    background: adminSubView === id ? A : C.card, color: adminSubView === id ? '#111' : C.text,
                    border: `1px solid ${adminSubView === id ? A : C.border}`
                  }}>{label}</button>
              ))}
            </div>
          )}

          {athDataLoading && <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando datos...</div>}

          {athleteData && (
            <Suspense fallback={LazyFallback}>
              {adminSubView === 'objectives' && (
                <ObjectivesView data={athleteData} onCreate={handleAdminCreateObjective}
                  onSelect={id => { setSelObjectiveId(id); setAdminSubView('objective') }}
                  onDelete={handleAdminDeleteObjective} onUpdate={handleAdminUpdateObjective} />
              )}
              {adminSubView === 'objective' && (
                <ObjectiveView objective={athleteData.objectives.find(o => o.id === selObjectiveId)}
                  completions={athleteData.completions} onBack={() => setAdminSubView('objectives')}
                  onUpdate={handleAdminUpdateObjective} onSelectDay={idx => { setSelDayIndex(idx); setAdminSubView('day') }} />
              )}
              {adminSubView === 'day' && (
                <DayView objective={athleteData.objectives.find(o => o.id === selObjectiveId)}
                  dayIndex={selDayIndex} completions={athleteData.completions}
                  onToggleCompletion={handleAdminToggleCompletion} onBack={() => setAdminSubView('objective')}
                  onUpdate={handleAdminUpdateObjective} />
              )}
              {adminSubView === 'stats' && <StatsView data={athleteData} />}
            </Suspense>
          )}
        </div>
      )}
    </div>
  )
}
