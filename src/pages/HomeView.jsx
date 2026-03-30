import { useMemo } from 'react'
import { Dumbbell, ChevronRight, Check, Target } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getTodayDayIndex, getWeekRange, dateStr } from '../lib/helpers'
import { requestNotifPermission } from '../lib/notifications'
import { getTodayQuote } from '../lib/quotes'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function HomeView({ data, sharedObjectives = [], onSelectObjective, onSelectTodayRoutine, onUpdateReminder, onSelectShared }) {
  const todayIdx = getTodayDayIndex()
  const today = toDay()
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const adherence = useMemo(() => {
    const activeObjIds = new Set(data.objectives.filter(obj => obj.active !== false).map(obj => obj.id))
    const activeDays = data.objectives.filter(obj => obj.active !== false).reduce((total, obj) => {
      return total + obj.days.filter(d => !d.rest && (d.label || d.exercises.length)).length
    }, 0)
    if (activeDays === 0) return { percent: 0, completed: 0, total: 0, weekCompleted: 0 }
    const validCompletions = data.completions.filter(c => activeObjIds.has(c.objectiveId))
    // Dedup: unique per objectiveId + dayIndex + date
    const uniqueKeys = new Set(validCompletions.map(c => c.objectiveId + '-' + c.dayIndex + '-' + c.date))
    const weekCompletions = validCompletions.filter(c => c.date >= mon && c.date <= sun)
    const uniqueWeekDays = new Set(weekCompletions.map(c => c.dayIndex)).size
    const totalCompleted = uniqueKeys.size
    return { percent: Math.min(100, Math.round((uniqueWeekDays / activeDays) * 100)), completed: totalCompleted, total: activeDays, weekCompleted: uniqueWeekDays }
  }, [data.objectives, data.completions, mon, sun])

  const weekDays = useMemo(() => {
    const monDate = new Date(mon + 'T12:00:00')
    const weekCompletions = data.completions.filter(c => c.date >= mon && c.date <= sun)
    const days = []
    for (let i = 0; i < 7; i++) {
      const dt = new Date(monDate); dt.setDate(monDate.getDate() + i)
      const completedCount = weekCompletions.filter(c => c.dayIndex === i).length
      days.push({ day: dt.toLocaleDateString('es-AR', { weekday: 'short' }).slice(0, 3), done: completedCount > 0, activity: completedCount })
    }
    return days
  }, [data.completions, mon, sun])

  const todayRoutines = useMemo(() => {
    return data.objectives.filter(obj => obj.active !== false).map(obj => {
      const day = obj.days[todayIdx]
      if (!day || day.rest || (!day.label && !day.exercises.length)) return null
      const completed = data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === todayIdx && c.date >= mon && c.date <= sun)
      return { obj, day, completed }
    }).filter(Boolean)
  }, [data.objectives, data.completions, todayIdx, today])

  const weekActivity = useMemo(() => {
    const weekCompletions = data.completions.filter(c => c.date >= mon && c.date <= sun)
    const uniqueDays = new Set(weekCompletions.map(c => c.dayIndex))
    return uniqueDays.size
  }, [data.completions, mon, sun])

  const maxWeekActivity = useMemo(() => {
    return Math.max(...weekDays.map(x => Math.max(x.activity, 1)))
  }, [weekDays])

  const objectivesWithProgress = useMemo(() => {
    return data.objectives.filter(obj => obj.active !== false).map(obj => ({
      obj,
      activeDays: obj.days.filter(d => d.label || d.exercises.length).length,
      weekDone: data.completions.filter(c => c.objectiveId === obj.id && c.date >= mon && c.date <= sun).length
    }))
  }, [data.objectives, data.completions, mon, sun])

  const handleToggleReminder = async () => {
    if (!data.reminder.enabled) {
      const perm = await requestNotifPermission()
      if (perm !== 'granted') { alert('Necesitás permitir las notificaciones en tu navegador para activar recordatorios.'); return }
      onUpdateReminder({ ...data.reminder, enabled: true })
    } else {
      onUpdateReminder({ ...data.reminder, enabled: false })
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '8px 8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontSize: 24, fontWeight: 800 }}>Tu progreso <Dumbbell aria-hidden="true" size={22} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} /></div>
        <div style={{ textAlign: 'center', background: C.card, border: `2px solid ${adherence.percent >= 80 ? A : C.border}`, borderRadius: 12, padding: '8px 16px' }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: adherence.percent >= 80 ? A : C.text, fontFamily: 'monospace', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{adherence.completed}</div>
          <div style={{ fontSize: 10, color: C.sub, marginTop: 4 }}>completadas</div>
        </div>
      </div>

      {/* Quote */}
      <div style={{ padding: '0 8px 12px' }}>
        <div style={{ borderLeft: `3px solid ${A}`, paddingLeft: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: C.sub, letterSpacing: '1px' }}>{DAY_NAMES[todayIdx].toUpperCase()}</span>
            <span style={{ fontSize: 11, color: A, fontWeight: 600 }}>— {getTodayQuote().author}</span>
          </div>
          <div style={{ fontSize: 14, fontStyle: 'italic', color: C.sub, lineHeight: 1.5 }}>"{getTodayQuote().text}"</div>
        </div>
      </div>

      {/* Today routine */}
      {todayRoutines.length > 0 ? <div style={{ padding: '0 8px 12px' }}>
        {todayRoutines.map(({ obj, day, completed }) => (
          <div key={obj.id} role="button" tabIndex={0} onClick={() => onSelectTodayRoutine(obj.id)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectTodayRoutine(obj.id) } }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: C.card, borderRadius: 12, cursor: 'pointer', border: `1px solid ${A}33` }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Tu rutina de hoy</div>
              <div style={{ fontSize: 13, color: A, marginTop: 4 }}>{day.label || 'Sin nombre'} · {day.exercises.length} ej.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                background: completed ? A : 'transparent',
                color: completed ? '#111' : '#f5a623',
                border: completed ? 'none' : '1px solid #f5a623'
              }}>{completed ? 'Completado' : 'Pendiente'}</div>
              <ChevronRight aria-hidden="true" size={20} color={A} />
            </div>
          </div>
        ))}
      </div> : <div style={{ padding: '0 8px 12px' }}>
        {data.objectives.filter(obj => obj.active !== false).map(obj => (
          <div key={obj.id} role="button" tabIndex={0} onClick={() => onSelectTodayRoutine(obj.id)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectTodayRoutine(obj.id) } }}
            style={{ padding: 24, textAlign: 'center', color: C.muted, borderRadius: 12, border: `1px dashed ${C.border}`, cursor: 'pointer', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left' }}>
              <Dumbbell aria-hidden="true" size={24} color={C.muted} style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 14 }}>Hoy es día de descanso</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>{obj.name} · Ver semana completa</div>
            </div>
            <ChevronRight aria-hidden="true" size={20} color={C.muted} />
          </div>
        ))}
        {data.objectives.filter(obj => obj.active !== false).length === 0 && (
          <div style={{ padding: 24, textAlign: 'center', color: C.muted, borderRadius: 12, border: `1px dashed ${C.border}` }}>
            <Dumbbell aria-hidden="true" size={32} color={C.muted} style={{ marginBottom: 8 }} />
            <div style={{ fontSize: 14 }}>Hoy es día de descanso</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>Aprovechá para recuperarte</div>
          </div>
        )}
      </div>}

      {/* Week chart */}
      <div style={{ padding: '0 8px 12px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 12 }}>ESTA SEMANA · {weekActivity} completadas</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height: 56 }}>
          {weekDays.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: '100%', borderRadius: 4, background: d.done ? A : C.hi, height: d.done ? 48 : 4, transition: 'height .3s' }} />
              <div style={{ fontSize: 10, color: d.done ? A : '#fff', fontWeight: d.done ? 700 : 400 }}>{d.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div style={{ padding: '0 8px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ background: C.card, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '1px' }}>SEMANA</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', fontVariantNumeric: 'tabular-nums', color: A, marginTop: 4 }}>{weekActivity}<span style={{ fontSize: 14 }}>/{adherence.total}</span></div>
        </div>
        <div style={{ background: C.card, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '1px' }}>TOTAL</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', fontVariantNumeric: 'tabular-nums', color: A, marginTop: 4 }}>{data.completions.length}</div>
        </div>
      </div>

      {/* Objectives */}
      {objectivesWithProgress.length > 0 ? <div style={{ padding: '0 8px 12px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 12 }}>MIS OBJETIVOS</div>
        {objectivesWithProgress.map(({ obj, activeDays, weekDone }) => (
          <div key={obj.id} role="button" tabIndex={0} onClick={() => onSelectObjective(obj.id)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectObjective(obj.id) } }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: C.card, borderRadius: 12, cursor: 'pointer', marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{obj.name}</div>
              <div style={{ fontSize: 12, color: C.sub, marginTop: 4 }}>{weekDone}/{activeDays} esta semana</div>
            </div>
            <ChevronRight aria-hidden="true" size={18} color={C.muted} />
          </div>
        ))}
      </div> : <div style={{ padding: '0 8px 12px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 12 }}>MIS OBJETIVOS</div>
        <div style={{ padding: 24, textAlign: 'center', color: C.muted, borderRadius: 12, border: `1px dashed ${C.border}` }}>
          <Target aria-hidden="true" size={32} color={C.muted} style={{ marginBottom: 8 }} />
          <div style={{ fontSize: 14 }}>Sin objetivos aún</div>
          <div style={{ fontSize: 12, marginTop: 4 }}>Creá tu primer objetivo desde la pestaña Objetivos</div>
        </div>
      </div>}

      {/* Shared objectives */}
      {sharedObjectives.length > 0 && <div style={{ padding: '0 8px 12px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 12 }}>RUTINAS DE MI ENTRENADOR</div>
        {sharedObjectives.map(so => {
          const activeDays = so.objective.days.filter(d => d.label || d.exercises.length).length
          return (
            <div key={so.id} role="button" tabIndex={0} onClick={() => onSelectShared && onSelectShared(so)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectShared && onSelectShared(so) } }}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, background: C.card, borderRadius: 12, cursor: 'pointer', marginBottom: 8 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{so.objective.name}</div>
                <div style={{ fontSize: 12, color: C.sub, marginTop: 4 }}>{activeDays} dias activos · {so.trainerEmail}</div>
              </div>
              <ChevronRight aria-hidden="true" size={18} color={C.muted} />
            </div>
          )
        })}
      </div>}

      <div style={{ padding: '0 8px 24px' }}>
        <div style={{ padding: 16, background: C.card, borderRadius: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Recordatorio diario</div>
              <div style={{ fontSize: 11, color: C.sub }}>{data.reminder.enabled ? 'Activo a las ' + data.reminder.time : 'Desactivado'}</div>
            </div>
            <button onClick={handleToggleReminder}
              aria-label={data.reminder.enabled ? 'Desactivar recordatorio' : 'Activar recordatorio'}
              style={{
                width: 50, height: 28, borderRadius: 14, border: 'none', cursor: 'pointer', position: 'relative',
                background: data.reminder.enabled ? A : C.hi, transition: 'background .2s'
              }}>
              <div style={{
                width: 22, height: 22, borderRadius: 11, background: '#fff', position: 'absolute', top: 3,
                left: data.reminder.enabled ? 25 : 3, transition: 'left .2s', boxShadow: '0 1px 3px rgba(0,0,0,.3)'
              }} />
            </button>
          </div>
          {data.reminder.enabled && (
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <label style={{ fontSize: 11, color: C.sub }}>Hora:</label>
              <input type="time" value={data.reminder.time} aria-label="Hora del recordatorio"
                onChange={e => onUpdateReminder({ ...data.reminder, time: e.target.value })}
                style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 12px', color: C.text, fontSize: 14, outline: 'none' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
