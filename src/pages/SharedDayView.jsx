import { useState, useRef } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function SharedDayView({ sharedObjective, dayIndex, onBack, onUpdateShared }) {
  if (!sharedObjective) return null
  const objective = sharedObjective.objective
  const day = objective.days[dayIndex]
  const [exercises, setExercises] = useState(day.exercises)
  const [completed, setCompleted] = useState(false)
  const saveTimerRef = useRef(null)

  const saveChanges = (newExercises) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      const updatedObj = {
        ...objective,
        days: objective.days.map((d, i) => i === dayIndex ? { ...d, exercises: newExercises } : d)
      }
      onUpdateShared(sharedObjective.id, updatedObj)
    }, 500)
  }

  const updateExercise = (id, field, value) => {
    const newEx = exercises.map(e => e.id === id ? { ...e, [field]: parseFloat(value) || 0 } : e)
    setExercises(newEx)
    saveChanges(newEx)
  }

  return (
    <div>
      <BackHeader onBack={onBack} title={`Dia ${dayIndex + 1} · ${DAY_NAMES[dayIndex]}`} />

      {day.label && (
        <div style={{ padding: '0 20px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: A }}>{day.label}</div>
        </div>
      )}

      {exercises.length > 0 && (
        <div style={{ padding: '0 20px 12px' }}>
          <button onClick={() => setCompleted(!completed)}
            style={{
              width: '100%', padding: 14, borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: 'pointer',
              border: completed ? 'none' : `2px solid ${A}`, transition: 'all .2s',
              background: completed ? A : 'transparent', color: completed ? '#111' : A
            }}>
            {completed ? '✓ Rutina completada' : 'Marcar como completada'}
          </button>
        </div>
      )}

      <div style={{ padding: '0 20px' }}>
        {!exercises.length && (
          <div style={{ padding: '30px 20px', textAlign: 'center', color: C.muted }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📝</div>
            <div style={{ fontSize: 14 }}>Sin ejercicios en este dia</div>
          </div>
        )}

        {(() => {
          const rendered = []
          let i = 0
          while (i < exercises.length) {
            const ex = exercises[i]
            if (ex.group) {
              const groupId = ex.group
              const groupExs = []
              while (i < exercises.length && exercises[i].group === groupId) {
                groupExs.push(exercises[i])
                i++
              }
              const lastEx = groupExs[groupExs.length - 1]

              rendered.push(
                <div key={groupId}>
                  <div style={{ display: 'flex', alignItems: 'stretch' }}>
                    <div style={{ width: 14, marginRight: 4, position: 'relative', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', left: 2, width: 3, background: A, borderRadius: 2, top: 20, bottom: 20 }} />
                      <div style={{ position: 'absolute', left: 2, top: 20, width: 8, height: 3, background: A, borderRadius: 2 }} />
                      <div style={{ position: 'absolute', left: 2, bottom: 20, width: 8, height: 3, background: A, borderRadius: 2 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      {groupExs.map((gex, gi) => (
                        <Card key={gex.id} style={{ marginBottom: gi < groupExs.length - 1 ? 4 : undefined }}>
                          <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 14 }}>{gex.nombre}</div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                            {[['series', 'Series', '1'], ['repeticiones', 'Reps', '1'], ['peso', 'Kg', '0.5']].map(([field, lbl, step]) => (
                              <div key={field}>
                                <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                                <input type="number" min="0" step={step} value={gex[field]}
                                  onChange={e => updateExercise(gex.id, field, e.target.value)}
                                  style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', outline: 'none' }} />
                              </div>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div style={{ width: 68, marginLeft: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <label style={{ fontSize: 9, color: A, letterSpacing: '1px', marginBottom: 6, fontWeight: 700 }}>DESC</label>
                      <div style={{ fontSize: 18, fontFamily: 'monospace', fontWeight: 700, color: A }}>{lastEx.descanso}s</div>
                    </div>
                  </div>
                </div>
              )
            } else {
              rendered.push(
                <Card key={ex.id}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 14 }}>{ex.nombre}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
                    {[['series', 'Series', '1'], ['repeticiones', 'Reps', '1'], ['peso', 'Kg', '0.5']].map(([field, lbl, step]) => (
                      <div key={field}>
                        <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                        <input type="number" min="0" step={step} value={ex[field]}
                          onChange={e => updateExercise(ex.id, field, e.target.value)}
                          style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', outline: 'none' }} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize: 9, color: A, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>Desc</label>
                      <div style={{ padding: '10px 4px', fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', color: A }}>{ex.descanso}s</div>
                    </div>
                  </div>
                </Card>
              )
              i++
            }
          }
          return rendered
        })()}
      </div>
    </div>
  )
}
