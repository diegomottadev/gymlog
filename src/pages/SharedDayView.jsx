import { useState, useRef, useMemo } from 'react'
import { Check } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getWeekRange } from '../lib/helpers'
import { fbToggleSharedCompletion } from '../lib/firebase'
import { resolveExerciseSets, setOverrideValue, addOverrideSet, removeOverrideSet } from '../lib/overrides'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function SharedDayView({ sharedObjective, dayIndex, onBack, onUpdateShared, onCompletionChanged }) {
  if (!sharedObjective) return null
  const objective = sharedObjective.objective
  const day = objective.days[dayIndex]
  const [exercises, setExercises] = useState(day.exercises)
  const [toggling, setToggling] = useState(false)
  const saveTimerRef = useRef(null)
  const today = toDay()
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const completions = sharedObjective.completions || []
  const isCompleted = completions.some(c => c.dayIndex === dayIndex && c.date >= mon && c.date <= sun)

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

  const updateSetOverride = (exerciseId, setIndex, field, value) => {
    const numVal = parseFloat(value) || 0
    const newEx = exercises.map(e => {
      if (e.id !== exerciseId) return e
      return setOverrideValue(e, today, setIndex, field, numVal)
    })
    setExercises(newEx)
    saveChanges(newEx)
  }

  const handleAddSet = (exerciseId) => {
    const newEx = exercises.map(e =>
      e.id !== exerciseId ? e : addOverrideSet(e, today)
    )
    setExercises(newEx)
    saveChanges(newEx)
  }

  const handleRemoveSet = (exerciseId) => {
    const newEx = exercises.map(e =>
      e.id !== exerciseId ? e : removeOverrideSet(e, today)
    )
    setExercises(newEx)
    saveChanges(newEx)
  }

  const handleToggleCompletion = async () => {
    setToggling(true)
    try {
      const newCompletions = await fbToggleSharedCompletion(sharedObjective.id, dayIndex, today)
      if (newCompletions !== null && onCompletionChanged) {
        onCompletionChanged(sharedObjective.id, newCompletions)
      }
    } catch (e) {
      console.error('toggle completion failed:', e)
    }
    setToggling(false)
  }

  return (
    <div>
      <BackHeader onBack={onBack} title={`Dia ${dayIndex + 1} · ${DAY_NAMES[dayIndex]}`} />

      {day.label && (
        <div style={{ padding: '0 8px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: A }}>{day.label}</div>
        </div>
      )}

      {exercises.length > 0 && (
        <div style={{ padding: '0 8px 12px' }}>
          <button onClick={handleToggleCompletion} disabled={toggling}
            style={{
              width: '100%', padding: 14, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: toggling ? 'not-allowed' : 'pointer',
              border: isCompleted ? 'none' : `2px solid ${A}`, transition: 'all .2s',
              background: isCompleted ? A : 'transparent', color: isCompleted ? '#111' : A,
              opacity: toggling ? 0.6 : 1
            }}>
            {toggling ? '...' : isCompleted ? <><Check size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Rutina completada</> : 'Marcar como completada'}
          </button>
        </div>
      )}

      <div style={{ padding: '0 8px' }}>
        {!exercises.length && (
          <div style={{ padding: '30px 8px', textAlign: 'center', color: C.muted }}>
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
                          {(() => {
                            const gexSets = resolveExerciseSets(gex, today)
                            return (
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                              <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px' }}>
                                SERIES ({gexSets.length})
                              </label>
                              <div style={{ display: 'flex', gap: 4 }}>
                                <button onClick={() => handleRemoveSet(gex.id)}
                                  style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                                <button onClick={() => handleAddSet(gex.id)}
                                  style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                              </div>
                            </div>
                            {gexSets.map((s, si) => (
                              <div key={si} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                                <span style={{ fontSize: 12, color: C.muted, fontWeight: 700, width: 24, textAlign: 'center' }}>S{si + 1}</span>
                                <div>
                                  <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 2, textAlign: 'center' }}>Kg</label>
                                  <input type="number" min="0" step="0.5" value={s.peso}
                                    onChange={e => updateSetOverride(gex.id, si, 'peso', e.target.value)}
                                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                                </div>
                                <div>
                                  <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 2, textAlign: 'center' }}>Reps</label>
                                  <input type="number" min="0" step="1" value={s.repeticiones}
                                    onChange={e => updateSetOverride(gex.id, si, 'repeticiones', e.target.value)}
                                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                                </div>
                              </div>
                            ))}
                          </div>
                            )
                          })()}
                        </Card>
                      ))}
                    </div>
                    <div style={{ width: 68, marginLeft: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <label style={{ fontSize: 9, color: A, letterSpacing: '1px', marginBottom: 6, fontWeight: 700 }}>DESC</label>
                      <div style={{ fontSize: 14, fontWeight: 600, color: A }}>{lastEx.descanso}s</div>
                    </div>
                  </div>
                </div>
              )
            } else {
              rendered.push(
                <Card key={ex.id}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 14 }}>{ex.nombre}</div>
                  {(() => {
                    const exSets = resolveExerciseSets(ex, today)
                    return (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px' }}>
                        SERIES ({exSets.length})
                      </label>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <button onClick={() => handleRemoveSet(ex.id)}
                          style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                        <button onClick={() => handleAddSet(ex.id)}
                          style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                      </div>
                    </div>
                    {exSets.map((s, si) => (
                      <div key={si} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ fontSize: 12, color: C.muted, fontWeight: 700, width: 24, textAlign: 'center' }}>S{si + 1}</span>
                        <div>
                          <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 2, textAlign: 'center' }}>Kg</label>
                          <input type="number" min="0" step="0.5" value={s.peso}
                            onChange={e => updateSetOverride(ex.id, si, 'peso', e.target.value)}
                            style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                        </div>
                        <div>
                          <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 2, textAlign: 'center' }}>Reps</label>
                          <input type="number" min="0" step="1" value={s.repeticiones}
                            onChange={e => updateSetOverride(ex.id, si, 'repeticiones', e.target.value)}
                            style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                        </div>
                      </div>
                    ))}
                    <div style={{ marginTop: 8 }}>
                      <label style={{ fontSize: 9, color: A, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>Descanso</label>
                      <div style={{ padding: '10px 4px', fontSize: 14, fontWeight: 600, textAlign: 'center', color: A }}>{ex.descanso}s</div>
                    </div>
                  </div>
                    )
                  })()}
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
