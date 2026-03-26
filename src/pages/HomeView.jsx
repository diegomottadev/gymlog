import { useMemo } from 'react'
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
    const activeDays = data.objectives.filter(obj => obj.active !== false).reduce((total, obj) => {
      return total + obj.days.filter(d => !d.rest && (d.label || d.exercises.length)).length
    }, 0)
    if (activeDays === 0) return { percent: 0, completed: 0, total: 0, weekCompleted: 0 }
    const weekCompletions = data.completions.filter(c => c.date >= mon && c.date <= sun)
    const uniqueWeekDays = new Set(weekCompletions.map(c => c.dayIndex)).size
    const totalCompleted = data.completions.length
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
      <div style={{ padding: '24px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 11, color: '#fff', letterSpacing: '2px', marginBottom: 6 }}>GYM TRACKER</div>
          <div style={{ fontSize: 26, fontWeight: 800 }}>Tu progreso 💪</div>
        </div>
        <div style={{ textAlign: 'center', background: C.card, border: `2px solid ${adherence.percent >= 80 ? A : C.border}`, borderRadius: 16, padding: '10px 18px' }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: adherence.percent >= 80 ? A : C.text, fontFamily: 'monospace', lineHeight: 1 }}>{adherence.completed}</div>
          <div style={{ fontSize: 10, color: '#fff', marginTop: 2 }}>completadas</div>
        </div>
      </div>

      <div style={{ padding: '0 20px 8px' }}>
        <Card style={{ border: `1px solid ${A}33`, padding: '16px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 11, color: '#fff', letterSpacing: '1px' }}>{DAY_NAMES[todayIdx].toUpperCase()}</div>
            <div style={{ fontSize: 11, color: A, fontWeight: 600 }}>— {getTodayQuote().author}</div>
          </div>
          <div style={{ fontSize: 15, fontStyle: 'italic', color: '#e0e0e0', lineHeight: 1.5 }}>"{getTodayQuote().text}"</div>
        </Card>
      </div>

      {todayRoutines.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <Card style={{ border: `1px solid ${A}33` }}>
          {todayRoutines.map(({ obj, day, completed }) => (
            <div key={obj.id} onClick={() => onSelectTodayRoutine(obj.id)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Hoy te toca</div>
                <div style={{ fontSize: 13, color: A, marginTop: 2 }}>{day.label || 'Sin nombre'} · {day.exercises.length} ej.</div>
              </div>
              <div style={{
                padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                background: completed ? A : 'transparent',
                color: completed ? '#111' : '#f5a623',
                border: completed ? 'none' : '1px solid #f5a623'
              }}>{completed ? 'Completado' : 'Pendiente'}</div>
            </div>
          ))}
        </Card>
      </div>}

      <div style={{ padding: '0 20px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: '#fff', letterSpacing: '1px', marginBottom: 14 }}>ESTA SEMANA · {weekActivity} actividades completadas</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 64 }}>
            {weekDays.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', borderRadius: 4, background: d.done ? A : C.hi, height: d.done ? 52 : 4, transition: 'height .3s' }} />
                <div style={{ fontSize: 10, color: d.done ? A : '#fff', fontWeight: d.done ? 700 : 400 }}>{d.day}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 20px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 10, color: '#fff', letterSpacing: '1px' }}>SEMANA</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{weekActivity}<span style={{ fontSize: 14 }}>/{adherence.total}</span></div>
        </Card>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 10, color: '#fff', letterSpacing: '1px' }}>TOTAL</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{data.completions.length}</div>
        </Card>
      </div>

      {objectivesWithProgress.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <div style={{ fontSize: 11, color: '#fff', letterSpacing: '1px', marginBottom: 10 }}>MIS OBJETIVOS</div>
        {objectivesWithProgress.map(({ obj, activeDays, weekDone }) => (
            <Card key={obj.id} onClick={() => onSelectObjective(obj.id)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{obj.name}</div>
                  <div style={{ fontSize: 12, color: '#fff' }}>{weekDone}/{activeDays} esta semana</div>
                </div>
                <div style={{ fontSize: 18, color: '#fff' }}>→</div>
              </div>
            </Card>
        ))}
      </div>}

      {sharedObjectives.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <div style={{ fontSize: 11, color: '#fff', letterSpacing: '1px', marginBottom: 10 }}>RUTINAS DE MI ENTRENADOR</div>
        {sharedObjectives.map(so => {
          const activeDays = so.objective.days.filter(d => d.label || d.exercises.length).length
          return (
            <Card key={so.id} onClick={() => onSelectShared && onSelectShared(so)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{so.objective.name}</div>
                  <div style={{ fontSize: 12, color: '#fff' }}>{activeDays} dias activos · {so.trainerEmail}</div>
                </div>
                <div style={{ fontSize: 18, color: '#fff' }}>→</div>
              </div>
            </Card>
          )
        })}
      </div>}

      <div style={{ padding: '0 20px 16px' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Recordatorio diario</div>
              <div style={{ fontSize: 11, color: '#fff' }}>{data.reminder.enabled ? 'Activo a las ' + data.reminder.time : 'Desactivado'}</div>
            </div>
            <button onClick={handleToggleReminder}
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
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <label style={{ fontSize: 11, color: '#fff' }}>Hora:</label>
              <input type="time" value={data.reminder.time}
                onChange={e => onUpdateReminder({ ...data.reminder, time: e.target.value })}
                style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 12px', color: C.text, fontSize: 14, outline: 'none' }} />
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
