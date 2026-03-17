import { useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getTodayDayIndex, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function ObjectiveView({ objective, completions, onBack, onUpdate, onSelectDay }) {
  if (!objective) return null
  const { mon, sun } = useMemo(() => getWeekRange(), [])
  const today = toDay()

  return (
    <div>
      <BackHeader onBack={onBack} title={objective.name} />

      <div style={{ padding: '0 20px 8px' }}>
        <Card style={{ background: C.hi }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 10 }}>PROGRESO SEMANAL</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {objective.days.map((day, idx) => {
              const hasContent = day.label || day.exercises.length > 0
              const done = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date >= mon && c.date <= sun)
              const isToday = idx === getTodayDayIndex()
              return (
                <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '100%', height: 32, borderRadius: 8, fontSize: 11, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: done ? A : isToday ? '#333' : C.card,
                    color: done ? '#111' : isToday ? C.text : hasContent ? C.muted : '#333',
                    border: `1px solid ${done ? A : isToday ? A : C.border}`
                  }}>{done ? '✓' : DAY_NAMES[idx].slice(0, 2)}</div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 20px' }}>
        {objective.days.map((day, idx) => {
          const hasContent = day.label || day.exercises.length > 0
          const doneToday = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date === today)
          const doneWeek = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date >= mon && c.date <= sun)
          return (
            <Card key={idx} onClick={() => onSelectDay(idx)} style={{ opacity: hasContent ? 1 : 0.6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: hasContent ? 12 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    minWidth: 36, height: 36, borderRadius: 10, fontSize: 13, fontWeight: 900,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: doneWeek ? A : hasContent ? C.hi : 'transparent', color: doneWeek ? '#111' : hasContent ? C.text : C.muted,
                    border: doneWeek ? 'none' : `1px solid ${C.border}`
                  }}>{doneWeek ? '✓' : idx + 1}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: hasContent ? C.text : C.muted }}>{DAY_NAMES[idx]}</div>
                    {day.label && <div style={{ fontSize: 12, color: A, marginTop: 2 }}>{day.label}</div>}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {hasContent && doneToday && <span style={{ fontSize: 10, color: A, fontWeight: 700 }}>HOY</span>}
                  <div style={{ fontSize: 11, color: C.muted }}>{day.exercises.length ? day.exercises.length + ' ej.' : 'Sin ejercicios'}</div>
                </div>
              </div>

              {day.exercises.length > 0 && (
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
                  {day.exercises.slice(0, 4).map(ex => (
                    <div key={ex.id} style={{ fontSize: 12, color: C.muted, marginBottom: 3, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{ex.nombre}</span>
                      <span style={{ color: C.text, fontFamily: 'monospace', fontSize: 11 }}>{ex.series}x{ex.repeticiones} · {ex.peso}kg · {ex.descanso}s</span>
                    </div>
                  ))}
                  {day.exercises.length > 4 && <div style={{ fontSize: 11, color: C.muted }}>+{day.exercises.length - 4} más</div>}
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
