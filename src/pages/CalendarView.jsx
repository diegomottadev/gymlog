import { useState, useMemo } from 'react'
import { Check } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import Card from '../components/Card'
import { resolveExerciseSets } from '../lib/overrides'
import ProgressionSection from '../components/ProgressionSection'
import ExName from '../components/ExName'

const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function getDayIndex(date) {
  const d = date.getDay()
  return d === 0 ? 6 : d - 1
}

function toDateStr(date) {
  return date.toISOString().slice(0, 10)
}

export default function CalendarView({ data, onSelectObjectiveDay, onToggleCompletion }) {
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
        if (!day || (!day.rest && !day.label && !day.exercises.length)) continue
        const completed = day.rest ? false : data.completions.some(c => c.objectiveId === obj.id && c.dayIndex === dayIdx && c.date === ds)
        if (!map[ds]) map[ds] = []
        map[ds].push({ objective: obj, dayIndex: dayIdx, day, completed, inactive: obj.active === false, rest: !!day.rest })
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

  const [selectedDate, setSelectedDate] = useState(routineMap[todayStr] ? todayStr : null)

  return (
    <div>
      <div style={{ padding: '24px 8px 12px', fontSize: 20, fontWeight: 800 }}>Calendario</div>

      {/* Month navigation */}
      <div style={{ padding: '0 8px 12px' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <button onClick={prevMonth} aria-label="Mes anterior" style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, width: 32, height: 32, color: C.text, fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{MONTH_NAMES[month]} {year}</div>
            <button onClick={nextMonth} aria-label="Mes siguiente" style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, width: 32, height: 32, color: C.text, fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
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
              const allInactive = hasRoutine && routines.every(r => r.inactive)
              const allCompleted = hasRoutine && routines.every(r => r.completed)
              const someCompleted = hasRoutine && routines.some(r => r.completed)
              const isToday = cd.dateStr === todayStr
              const isSelected = selectedDate === cd.dateStr

              return (
                <div key={i}
                  onClick={() => hasRoutine ? setSelectedDate(isSelected ? null : cd.dateStr) : null}
                  role={hasRoutine ? 'button' : undefined} tabIndex={hasRoutine ? 0 : undefined}
                  onKeyDown={hasRoutine ? e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedDate(isSelected ? null : cd.dateStr) } } : undefined}
                  style={{
                    aspectRatio: '1', borderRadius: 8, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', cursor: hasRoutine ? 'pointer' : 'default',
                    background: isSelected ? A : allCompleted ? A + '33' : isToday ? '#333' : 'transparent',
                    border: isToday ? `2px solid ${A}` : hasRoutine && !allInactive ? `1px solid ${A}55` : hasRoutine && allInactive ? `1px solid #555` : `1px solid transparent`,
                    opacity: cd.currentMonth ? 1 : 0.3,
                    position: 'relative'
                  }}>
                  <span style={{
                    fontSize: 15, fontWeight: isToday || hasRoutine ? 700 : 400,
                    color: isSelected ? '#111' : allCompleted ? A : isToday ? C.text : hasRoutine ? C.text : C.muted
                  }}>{cd.date.getDate()}</span>
                  {hasRoutine && !isSelected && (
                    <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                      {routines.map((r, ri) => (
                        <div key={ri} style={{ width: 4, height: 4, borderRadius: 2, background: r.inactive ? '#555' : r.completed ? A : C.muted }} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Empty state for selected date with no routines */}
      {selectedDate && !routineMap[selectedDate] && (
        <div style={{ padding: '0 8px 12px' }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 8, paddingLeft: 4 }}>
            {new Date(selectedDate + 'T12:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}
          </div>
          <div style={{ padding: 24, textAlign: 'center', color: C.muted, borderRadius: 12, border: `1px dashed ${C.border}` }}>
            <div style={{ fontSize: 14 }}>Sin rutinas para este día</div>
          </div>
        </div>
      )}

      {/* Detail for selected date */}
      {selectedDate && routineMap[selectedDate] && (
        <div style={{ padding: '0 8px 12px' }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 8, paddingLeft: 4 }}>
            {new Date(selectedDate + 'T12:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}
          </div>
          {routineMap[selectedDate].map((r, i) => r.rest ? (
            <Card key={i} style={{ opacity: r.inactive ? 0.5 : 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                {r.objective.name}
                {r.objective.startDate && r.objective.endDate && (
                  <span style={{ fontSize: 13, color: C.sub, fontWeight: 400, marginLeft: 6 }}>
                    {new Date(r.objective.startDate + 'T12:00').toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })} - {new Date(r.objective.endDate + 'T12:00').toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })}
                  </span>
                )}
              </div>
              <div style={{ padding: 16, textAlign: 'center', color: C.muted, borderRadius: 10, border: `1px dashed ${C.border}` }}>
                <div style={{ fontSize: 14 }}>Día de descanso</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>Aprovechá para recuperarte</div>
              </div>
            </Card>
          ) : (
            <Card key={i} onClick={() => onSelectObjectiveDay(r.objective.id, r.dayIndex, selectedDate)}
              role="button" tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectObjectiveDay(r.objective.id, r.dayIndex, selectedDate) } }}
              style={{ cursor: 'pointer', border: `1px solid ${r.completed ? A + '55' : C.border}`, opacity: r.inactive ? 0.5 : 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>
                    {r.objective.name}
                    {r.objective.startDate && r.objective.endDate && (
                      <span style={{ fontSize: 13, color: C.sub, fontWeight: 400, marginLeft: 6 }}>
                        {new Date(r.objective.startDate + 'T12:00').toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })} - {new Date(r.objective.endDate + 'T12:00').toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 14, color: A, marginTop: 2 }}>{r.day.label || DAY_NAMES[r.dayIndex]} · {r.day.exercises.length} ej.</div>
                </div>
                <button onClick={e => { e.stopPropagation(); onToggleCompletion(r.objective.id, r.dayIndex, selectedDate) }}
                  style={{
                    padding: '5px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer',
                    background: r.completed ? A : 'transparent',
                    color: r.completed ? '#111' : A,
                    border: r.completed ? 'none' : `1px solid ${A}`
                  }}>{r.completed ? <><Check size={12} aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 2 }} />Completado</> : 'Completar'}</button>
              </div>
              {r.day.exercises.length > 0 && (
                <div style={{ marginTop: 10, borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
                  <div style={{ display: 'flex', marginBottom: 6, paddingLeft: 12 }}>
                    <span style={{ flex: 1, fontSize: 10, color: A, fontWeight: 700 }}>EJERCICIO</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 36, textAlign: 'center' }}>S/R</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 28, textAlign: 'center' }}>KG</span>
                    <span style={{ fontSize: 10, color: '#4488ff', fontWeight: 700, width: 24, textAlign: 'center' }}>RM</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 32, textAlign: 'right' }}>DESC</span>
                  </div>
                  {(() => {
                    const rows = []
                    let ei = 0
                    while (ei < r.day.exercises.length) {
                      const ex = r.day.exercises[ei]
                      if (ex.group) {
                        const groupId = ex.group
                        const groupExs = []
                        while (ei < r.day.exercises.length && r.day.exercises[ei].group === groupId) {
                          groupExs.push(r.day.exercises[ei])
                          ei++
                        }
                        const lastEx = groupExs[groupExs.length - 1]
                        rows.push(
                          <div key={groupId} style={{ display: 'flex', alignItems: 'stretch', marginBottom: 3 }}>
                            <div style={{ width: 10, marginRight: 6, position: 'relative', flexShrink: 0 }}>
                              <div style={{ position: 'absolute', left: 0, width: 2, background: A, top: 6, bottom: 6, borderRadius: 1 }} />
                              <div style={{ position: 'absolute', left: 0, top: 6, width: 6, height: 2, background: A }} />
                              <div style={{ position: 'absolute', left: 0, bottom: 6, width: 6, height: 2, background: A }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              {groupExs.map(gex => {
                                const sets = resolveExerciseSets(gex, selectedDate)
                                const maxPeso = Math.max(...sets.map(s => s.peso))
                                return (
                                  <div key={gex.id} style={{ fontSize: 13, color: C.sub, marginBottom: 3, display: 'flex', alignItems: 'center', minWidth: 0 }}>
                                    <ExName name={gex.nombre} />
                                    <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{sets.length}x{sets[0].repeticiones}</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{maxPeso}</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: 11, width: 24, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{gex.oneRM ? gex.oneRM + '' : ''}</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: A, fontWeight: 700, width: 32, textAlign: 'right', flexShrink: 0 }}>{gex.id === lastEx.id ? lastEx.descanso + 's' : ''}</span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      } else {
                        const sets = resolveExerciseSets(ex, selectedDate)
                        const maxPeso = Math.max(...sets.map(s => s.peso))
                        rows.push(
                          <div key={ex.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 3, paddingLeft: 12, minWidth: 0 }}>
                            <ExName name={ex.nombre} style={{ fontSize: 13, color: C.sub }} />
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{sets.length}x{sets[0].repeticiones}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{maxPeso}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 24, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{ex.oneRM ? ex.oneRM + '' : ''}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, color: A, fontWeight: 700, width: 32, textAlign: 'right', flexShrink: 0 }}>{ex.descanso}s</span>
                          </div>
                        )
                        ei++
                      }
                    }
                    return rows
                  })()}
                </div>
              )}
            </Card>
          ))}
          {routineMap[selectedDate].filter(r => !r.rest && r.day.exercises.length > 0).map((r, i) => (
            <ProgressionSection key={'prog-' + i} exercises={r.day.exercises} />
          ))}
        </div>
      )}

      {/* Legend / empty state */}
      {!data.objectives.some(o => o.startDate && o.endDate) && (
        <div style={{ padding: '8px', textAlign: 'center', color: C.muted }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📅</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin rutinas en el calendario</div>
          <div style={{ fontSize: 12 }}>Configurá fechas de inicio y fin en tus objetivos para verlos acá</div>
        </div>
      )}
    </div>
  )
}
