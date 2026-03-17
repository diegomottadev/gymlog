import { useState, useMemo, useRef } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getTodayDayIndex, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function ObjectiveView({ objective, completions, onBack, onUpdate, onSelectDay }) {
  if (!objective) return null
  const { mon, sun } = useMemo(() => getWeekRange(), [])
  const today = toDay()
  const [editingName, setEditingName] = useState(false)
  const [name, setName] = useState(objective.name)
  const [startDate, setStartDate] = useState(objective.startDate || '')
  const [endDate, setEndDate] = useState(objective.endDate || '')
  const nameRef = useRef(null)

  const saveName = () => {
    const trimmed = name.trim()
    if (trimmed && trimmed !== objective.name) {
      onUpdate({ ...objective, name: trimmed })
    } else {
      setName(objective.name)
    }
    setEditingName(false)
  }

  const [movingDay, setMovingDay] = useState(null)

  const saveDate = (field, value) => {
    if (field === 'startDate') setStartDate(value)
    else setEndDate(value)
    onUpdate({ ...objective, [field]: value })
  }

  const swapDays = (fromIdx, toIdx) => {
    const newDays = [...objective.days]
    const temp = newDays[fromIdx]
    newDays[fromIdx] = newDays[toIdx]
    newDays[toIdx] = temp
    onUpdate({ ...objective, days: newDays })
    setMovingDay(null)
  }

  return (
    <div>
      {/* Header with editable name */}
      <div style={{ padding: '24px 20px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={onBack} style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
          width: 36, height: 36, color: C.muted, fontSize: 18, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>←</button>
        {editingName ? (
          <div style={{ flex: 1, display: 'flex', gap: 8 }}>
            <input ref={nameRef} value={name} onChange={e => setName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') saveName(); if (e.key === 'Escape') { setName(objective.name); setEditingName(false) } }}
              autoFocus
              style={{ flex: 1, background: C.hi, border: `1px solid ${A}`, borderRadius: 10, padding: '8px 14px', color: C.text, fontSize: 18, fontWeight: 800, outline: 'none' }} />
            <button onClick={saveName}
              style={{ background: A, color: '#111', border: 'none', borderRadius: 10, padding: '8px 14px', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>✓</button>
          </div>
        ) : (
          <>
            <div style={{ fontSize: 20, fontWeight: 800, flex: 1 }}>{objective.name}</div>
            <button onClick={() => setEditingName(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, padding: 4 }}>✏️</button>
          </>
        )}
      </div>

      <div style={{ padding: '0 20px 8px' }}>
        <Card>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>INICIO</label>
              <input type="date" value={startDate} onChange={e => saveDate('startDate', e.target.value)}
                style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 10px', color: C.text, fontSize: 12, outline: 'none', colorScheme: 'dark' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>FIN</label>
              <input type="date" value={endDate} onChange={e => saveDate('endDate', e.target.value)}
                style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 10px', color: C.text, fontSize: 12, outline: 'none', colorScheme: 'dark' }} />
            </div>
          </div>
        </Card>
      </div>

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
                  {hasContent && (
                    <button onClick={e => { e.stopPropagation(); setMovingDay(idx) }}
                      style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, padding: '4px 8px', fontSize: 10, color: C.muted, cursor: 'pointer', fontWeight: 700 }}>
                      ⇄
                    </button>
                  )}
                  <div style={{ fontSize: 11, color: C.muted }}>{day.exercises.length ? day.exercises.length + ' ej.' : 'Sin ejercicios'}</div>
                </div>
              </div>

              {day.exercises.length > 0 && (
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
                  {(() => {
                    const rows = []
                    let i = 0
                    while (i < day.exercises.length) {
                      const ex = day.exercises[i]
                      if (ex.group) {
                        // Collect all exercises in this group
                        const groupExs = []
                        const groupId = ex.group
                        while (i < day.exercises.length && day.exercises[i].group === groupId) {
                          groupExs.push(day.exercises[i])
                          i++
                        }
                        const lastEx = groupExs[groupExs.length - 1]
                        rows.push(
                          <div key={groupId} style={{ display: 'flex', alignItems: 'stretch', marginBottom: 3 }}>
                            {/* Bracket */}
                            <div style={{ width: 10, marginRight: 6, position: 'relative', flexShrink: 0 }}>
                              <div style={{ position: 'absolute', left: 0, width: 2, background: A, top: 6, bottom: 6, borderRadius: 1 }} />
                              <div style={{ position: 'absolute', left: 0, top: 6, width: 6, height: 2, background: A }} />
                              <div style={{ position: 'absolute', left: 0, bottom: 6, width: 6, height: 2, background: A }} />
                            </div>
                            {/* Exercises */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              {groupExs.map(gex => (
                                <div key={gex.id} style={{ fontSize: 12, color: C.muted, marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                                  <span>{gex.nombre}</span>
                                  <span style={{ color: C.text, fontFamily: 'monospace', fontSize: 11 }}>{gex.series}x{gex.repeticiones} · {gex.peso}kg</span>
                                </div>
                              ))}
                            </div>
                            {/* Rest time column */}
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8, flexShrink: 0 }}>
                              <span style={{ fontSize: 10, color: A, fontWeight: 700, fontFamily: 'monospace' }}>{lastEx.descanso}s</span>
                            </div>
                          </div>
                        )
                      } else {
                        rows.push(
                          <div key={ex.id} style={{ display: 'flex', marginBottom: 3 }}>
                            <div style={{ width: 10, marginRight: 6, flexShrink: 0 }} />
                            <div style={{ flex: 1, fontSize: 12, color: C.muted, display: 'flex', justifyContent: 'space-between' }}>
                              <span>{ex.nombre}</span>
                              <span style={{ color: C.text, fontFamily: 'monospace', fontSize: 11 }}>{ex.series}x{ex.repeticiones} · {ex.peso}kg · <span style={{ color: '#5b9bd5' }}>{ex.descanso}s</span></span>
                            </div>
                          </div>
                        )
                        i++
                      }
                    }
                    return rows
                  })()}
                </div>
              )}
            </Card>
          )
        })}
      </div>

      {movingDay !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 20 }}
          onClick={() => setMovingDay(null)}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, maxWidth: 320, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Mover rutina</div>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 16 }}>
              Mover <span style={{ color: A, fontWeight: 700 }}>{DAY_NAMES[movingDay]}</span>{objective.days[movingDay].label ? ` (${objective.days[movingDay].label})` : ''} a:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {objective.days.map((d, idx) => {
                if (idx === movingDay) return null
                const hasContent = d.label || d.exercises.length > 0
                return (
                  <button key={idx} onClick={() => swapDays(movingDay, idx)}
                    style={{
                      background: C.hi, border: `1px solid ${C.border}`, borderRadius: 10,
                      padding: '12px 14px', cursor: 'pointer', display: 'flex',
                      justifyContent: 'space-between', alignItems: 'center'
                    }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{DAY_NAMES[idx]}</span>
                      {d.label && <span style={{ fontSize: 11, color: A }}>{d.label}</span>}
                    </div>
                    <span style={{ fontSize: 10, color: C.muted }}>
                      {hasContent ? `${d.exercises.length} ej. ⇄` : 'Vacío →'}
                    </span>
                  </button>
                )
              })}
            </div>
            <button onClick={() => setMovingDay(null)}
              style={{ width: '100%', marginTop: 12, padding: 10, background: 'none', border: `1px solid ${C.border}`, borderRadius: 10, color: C.muted, fontSize: 13, cursor: 'pointer' }}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
