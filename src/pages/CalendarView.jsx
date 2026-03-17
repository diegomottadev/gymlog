import { useState, useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import Card from '../components/Card'

const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function getDayIndex(date) {
  const d = date.getDay()
  return d === 0 ? 6 : d - 1
}

function toDateStr(date) {
  return date.toISOString().slice(0, 10)
}

export default function CalendarView({ data, onSelectObjectiveDay }) {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const todayStr = toDateStr(today)

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startPad = getDayIndex(firstDay)

    const days = []
    // Pad days from previous month
    for (let i = 0; i < startPad; i++) {
      const d = new Date(year, month, 1 - startPad + i)
      days.push({ date: d, dateStr: toDateStr(d), currentMonth: false })
    }
    // Days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i)
      days.push({ date: d, dateStr: toDateStr(d), currentMonth: true })
    }
    // Pad to complete last week
    const remaining = 7 - (days.length % 7)
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const d = new Date(year, month + 1, i)
        days.push({ date: d, dateStr: toDateStr(d), currentMonth: false })
      }
    }
    return days
  }, [month, year])

  // Build a map: dateStr -> [{ objective, dayIndex, day, completed }]
  const routineMap = useMemo(() => {
    const map = {}
    for (const obj of data.objectives) {
      if (!obj.startDate || !obj.endDate) continue
      for (const calDay of calendarDays) {
        const ds = calDay.dateStr
        if (ds < obj.startDate || ds > obj.endDate) continue
        const dayIdx = getDayIndex(calDay.date)
        const day = obj.days[dayIdx]
        if (!day || (!day.label && !day.exercises.length)) continue
        const completed = data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === dayIdx && c.date === ds)
        if (!map[ds]) map[ds] = []
        map[ds].push({ objective: obj, dayIndex: dayIdx, day, completed })
      }
    }
    return map
  }, [calendarDays, data.objectives, data.completions])

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div>
      <div style={{ padding: '24px 20px 12px', fontSize: 20, fontWeight: 800 }}>Calendario</div>

      {/* Month navigation */}
      <div style={{ padding: '0 20px 12px' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <button onClick={prevMonth} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, width: 32, height: 32, color: C.text, fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{MONTH_NAMES[month]} {year}</div>
            <button onClick={nextMonth} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, width: 32, height: 32, color: C.text, fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
            {DAY_NAMES.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 10, color: C.muted, fontWeight: 700, padding: '4px 0' }}>{d.slice(0, 2)}</div>
            ))}
          </div>

          {/* Calendar grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
            {calendarDays.map((cd, i) => {
              const routines = routineMap[cd.dateStr]
              const hasRoutine = routines && routines.length > 0
              const allCompleted = hasRoutine && routines.every(r => r.completed)
              const someCompleted = hasRoutine && routines.some(r => r.completed)
              const isToday = cd.dateStr === todayStr
              const isSelected = selectedDate === cd.dateStr

              return (
                <div key={i}
                  onClick={() => hasRoutine ? setSelectedDate(isSelected ? null : cd.dateStr) : null}
                  style={{
                    aspectRatio: '1', borderRadius: 8, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', cursor: hasRoutine ? 'pointer' : 'default',
                    background: isSelected ? A : allCompleted ? A + '33' : isToday ? '#333' : 'transparent',
                    border: isToday ? `2px solid ${A}` : hasRoutine ? `1px solid ${A}55` : `1px solid transparent`,
                    opacity: cd.currentMonth ? 1 : 0.3,
                    position: 'relative'
                  }}>
                  <span style={{
                    fontSize: 12, fontWeight: isToday || hasRoutine ? 700 : 400,
                    color: isSelected ? '#111' : allCompleted ? A : isToday ? C.text : hasRoutine ? C.text : C.muted
                  }}>{cd.date.getDate()}</span>
                  {hasRoutine && !isSelected && (
                    <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                      {routines.map((r, ri) => (
                        <div key={ri} style={{ width: 4, height: 4, borderRadius: 2, background: r.completed ? A : C.muted }} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Detail for selected date */}
      {selectedDate && routineMap[selectedDate] && (
        <div style={{ padding: '0 20px 12px' }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 8, paddingLeft: 4 }}>
            {new Date(selectedDate + 'T12:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}
          </div>
          {routineMap[selectedDate].map((r, i) => (
            <Card key={i} onClick={() => onSelectObjectiveDay(r.objective.id, r.dayIndex)}
              style={{ cursor: 'pointer', border: `1px solid ${r.completed ? A + '55' : C.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{r.objective.name}</div>
                  <div style={{ fontSize: 12, color: A, marginTop: 2 }}>{r.day.label || DAY_NAMES[r.dayIndex]} · {r.day.exercises.length} ej.</div>
                </div>
                <div style={{
                  padding: '5px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700,
                  background: r.completed ? A : 'transparent',
                  color: r.completed ? '#111' : A,
                  border: r.completed ? 'none' : `1px solid ${A}`
                }}>{r.completed ? 'Completado' : 'Pendiente'}</div>
              </div>
              {r.day.exercises.length > 0 && (
                <div style={{ marginTop: 10, borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
                  {r.day.exercises.slice(0, 4).map(ex => (
                    <div key={ex.id} style={{ fontSize: 11, color: C.muted, marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{ex.nombre}</span>
                      <span style={{ fontFamily: 'monospace', fontSize: 10 }}>{ex.series}x{ex.repeticiones} · {ex.peso}kg</span>
                    </div>
                  ))}
                  {r.day.exercises.length > 4 && <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>+{r.day.exercises.length - 4} más</div>}
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Legend / empty state */}
      {!data.objectives.some(o => o.startDate && o.endDate) && (
        <div style={{ padding: '20px', textAlign: 'center', color: C.muted }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📅</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin rutinas en el calendario</div>
          <div style={{ fontSize: 12 }}>Configurá fechas de inicio y fin en tus objetivos para verlos acá</div>
        </div>
      )}
    </div>
  )
}
