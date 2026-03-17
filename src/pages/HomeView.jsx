import { useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { getStreak, toDay, getTodayDayIndex, getWeekRange, vol } from '../lib/helpers'
import { requestNotifPermission } from '../lib/notifications'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function HomeView({ data, onNewWorkout, onSelectObjective, onUpdateReminder }) {
  const streak = useMemo(() => getStreak(data.workouts), [data.workouts])
  const todayIdx = getTodayDayIndex()
  const today = toDay()
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const last7 = useMemo(() => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const dt = new Date(); dt.setDate(dt.getDate() - i)
      const d = dt.toISOString().slice(0, 10)
      const completedCount = data.completions.filter(c => c.date === d).length
      const wos = data.workouts.filter(w => w.date === d)
      const done = completedCount > 0 || wos.length > 0
      days.push({ day: dt.toLocaleDateString('es-AR', { weekday: 'short' }).slice(0, 3), v: wos.reduce((t, w) => t + vol(w), 0), done, completions: completedCount })
    }
    return days
  }, [data.workouts, data.completions])
  const maxV = Math.max(...last7.map(d => d.v), 1)

  const todayRoutines = useMemo(() => {
    return data.objectives.map(obj => {
      const day = obj.days[todayIdx]
      if (!day || (!day.label && !day.exercises.length)) return null
      const completed = data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === todayIdx && c.date === today)
      return { obj, day, completed }
    }).filter(Boolean)
  }, [data.objectives, data.completions, todayIdx, today])

  const weekCompletions = useMemo(() => {
    return data.completions.filter(c => c.date >= mon && c.date <= sun).length
  }, [data.completions, mon, sun])

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
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '2px', marginBottom: 6 }}>GYM TRACKER</div>
          <div style={{ fontSize: 26, fontWeight: 800 }}>Tu progreso 💪</div>
        </div>
        <div style={{ textAlign: 'center', background: C.card, border: `2px solid ${A}`, borderRadius: 16, padding: '10px 18px' }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: A, fontFamily: 'monospace', lineHeight: 1 }}>{streak}</div>
          <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>🔥 días</div>
        </div>
      </div>

      {todayRoutines.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <Card style={{ border: `1px solid ${A}33` }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 12 }}>HOY · {DAY_NAMES[todayIdx].toUpperCase()}</div>
          {todayRoutines.map(({ obj, day, completed }) => (
            <div key={obj.id} onClick={() => onSelectObjective(obj.id)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{obj.name}</div>
                <div style={{ fontSize: 12, color: A, marginTop: 2 }}>{day.label || 'Sin nombre'} · {day.exercises.length} ej.</div>
              </div>
              <div style={{
                padding: '5px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700,
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
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 14 }}>ESTA SEMANA · {weekCompletions} rutinas completadas</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 64 }}>
            {last7.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', borderRadius: 4, background: d.done ? A : C.hi, height: d.done ? Math.max(12, Math.round((Math.max(d.completions, d.v ? 1 : 0) / Math.max(...last7.map(x => Math.max(x.completions, 1)))) * 52)) : 4, transition: 'height .3s' }} />
                <div style={{ fontSize: 10, color: d.done ? A : C.muted, fontWeight: d.done ? 700 : 400 }}>{d.day}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 20px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px' }}>COMPLETADAS</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{data.completions.length}</div>
        </Card>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px' }}>SEMANA</div>
          <div style={{ fontSize: 32, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{weekCompletions}<span style={{ fontSize: 14 }}>/7</span></div>
        </Card>
      </div>

      {data.objectives.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 10 }}>MIS OBJETIVOS</div>
        {data.objectives.map(obj => {
          const activeDays = obj.days.filter(d => d.label || d.exercises.length).length
          const weekDone = data.completions.filter(c => c.objectiveId === obj.id && c.date >= mon && c.date <= sun).length
          return (
            <Card key={obj.id} onClick={() => onSelectObjective(obj.id)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{obj.name}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{weekDone}/{activeDays} esta semana</div>
                </div>
                <div style={{ fontSize: 18, color: C.muted }}>→</div>
              </div>
            </Card>
          )
        })}
      </div>}

      <div style={{ padding: '0 20px 8px' }}>
        <Btn onClick={onNewWorkout} style={{ width: '100%', padding: 16, fontSize: 16, borderRadius: 14 }}>
          + Nuevo entrenamiento
        </Btn>
      </div>

      <div style={{ padding: '0 20px 16px' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Recordatorio diario</div>
              <div style={{ fontSize: 11, color: C.muted }}>{data.reminder.enabled ? 'Activo a las ' + data.reminder.time : 'Desactivado'}</div>
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
              <label style={{ fontSize: 11, color: C.muted }}>Hora:</label>
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
