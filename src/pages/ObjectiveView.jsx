import { useState, useMemo, useRef } from 'react'
import { Moon, Check, ArrowRightLeft, ArrowRight, Pencil } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import ExName from '../components/ExName'
import { toDay, getTodayDayIndex, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function ObjectiveView({ objective, completions, onBack, onUpdate, onSelectDay, readOnly = false }) {
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
    // Swap all content but keep dayNumber in place
    const fromContent = { label: newDays[fromIdx].label, exercises: newDays[fromIdx].exercises, rest: newDays[fromIdx].rest }
    const toContent = { label: newDays[toIdx].label, exercises: newDays[toIdx].exercises, rest: newDays[toIdx].rest }
    newDays[fromIdx] = { ...newDays[fromIdx], ...toContent }
    newDays[toIdx] = { ...newDays[toIdx], ...fromContent }
    onUpdate({ ...objective, days: newDays })
    setMovingDay(null)
  }

  return (
    <div>
      {/* Header with editable name */}
      <div style={{ padding: '24px 8px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
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
            <button onClick={saveName} aria-label="Guardar nombre"
              style={{ background: A, color: '#111', border: 'none', borderRadius: 10, padding: '8px 14px', fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Check size={16} aria-hidden="true" /></button>
          </div>
        ) : (
          <>
            <div style={{ fontSize: 20, fontWeight: 800, flex: 1 }}>{objective.name}</div>
            {!readOnly && <button onClick={() => setEditingName(true)} aria-label="Editar nombre"
              style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center' }}><Pencil size={16} color={C.sub} aria-hidden="true" /></button>}
          </>
        )}
      </div>

      {!readOnly && <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>INICIO</label>
              <input type="date" value={startDate} onChange={e => saveDate('startDate', e.target.value)}
                style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 10px', color: C.text, fontSize: 12, outline: 'none', colorScheme: 'dark' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>FIN</label>
              <input type="date" value={endDate} onChange={e => saveDate('endDate', e.target.value)}
                style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '8px 10px', color: C.text, fontSize: 12, outline: 'none', colorScheme: 'dark' }} />
            </div>
          </div>
        </Card>
      </div>}

      <div style={{ padding: '0 8px 8px' }}>
        <Card style={{ background: C.hi }}>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 10 }}>PROGRESO SEMANAL</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {objective.days.map((day, idx) => {
              const isRest = day.rest
              const hasContent = day.label || day.exercises.length > 0 || isRest
              const done = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date >= mon && c.date <= sun)
              const isToday = idx === getTodayDayIndex()
              return (
                <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '100%', height: 32, borderRadius: 8, fontSize: 11, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isRest ? '#222' : done ? A : isToday ? '#333' : C.card,
                    color: isRest ? '#666' : done ? '#111' : isToday ? C.text : hasContent ? C.muted : '#333',
                    border: `1px solid ${isRest ? '#333' : done ? A : isToday ? A : C.border}`
                  }}>{isRest ? '—' : done ? <Check size={12} /> : DAY_NAMES[idx].slice(0, 2)}</div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 8px' }}>
        {objective.days.map((day, idx) => {
          const isRest = day.rest
          const hasContent = day.label || day.exercises.length > 0 || isRest
          const doneToday = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date === today)
          const doneWeek = completions.some(c => c.objectiveId === objective.id && c.dayIndex === idx && c.date >= mon && c.date <= sun)

          const toggleRest = (e) => {
            e.stopPropagation()
            const newDays = objective.days.map((d, i) => i === idx ? { ...d, rest: !d.rest } : d)
            onUpdate({ ...objective, days: newDays })
          }

          return (
            <Card key={idx} onClick={() => !isRest && onSelectDay(idx)} style={{ opacity: hasContent ? 1 : 0.6, cursor: isRest ? 'default' : 'pointer', padding: '14px 12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: hasContent && !isRest ? 12 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    minWidth: 42, height: 42, borderRadius: 12, fontSize: 16, fontWeight: 900,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isRest ? '#333' : doneWeek ? A : hasContent ? C.hi : 'transparent',
                    color: isRest ? '#888' : doneWeek ? '#111' : hasContent ? C.text : C.muted,
                    border: doneWeek && !isRest ? 'none' : `1px solid ${isRest ? '#444' : C.border}`
                  }}>{isRest ? <Moon size={14} aria-hidden="true" /> : doneWeek ? <Check size={14} aria-hidden="true" /> : idx + 1}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: isRest ? '#888' : hasContent ? C.text : C.muted }}>{DAY_NAMES[idx]}</div>
                    {isRest && <div style={{ fontSize: 13, color: '#888', marginTop: 2 }}>Descanso</div>}
                    {!isRest && day.label && <div style={{ fontSize: 13, color: A, marginTop: 2 }}>{day.label}</div>}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {hasContent && !isRest && doneToday && <span style={{ fontSize: 12, color: A, fontWeight: 700 }}>HOY</span>}
                  {hasContent && !isRest && !readOnly && (
                    <button onClick={e => { e.stopPropagation(); setMovingDay(idx) }} aria-label="Mover día"
                      style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '6px 10px', fontSize: 14, color: C.sub, cursor: 'pointer', fontWeight: 700 }}>
                      ⇄
                    </button>
                  )}
                  {!readOnly && (
                    <button onClick={toggleRest} aria-label={isRest ? 'Quitar descanso' : 'Marcar como descanso'}
                      style={{ background: isRest ? A : C.hi, border: `1px solid ${isRest ? A : C.border}`, borderRadius: 8, padding: '6px 10px', fontSize: 13, color: isRest ? '#111' : '#fff', cursor: 'pointer', fontWeight: 700 }}>
                      {isRest ? <><Check size={12} aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 2 }} />Descanso</> : <Moon size={14} aria-hidden="true" />}
                    </button>
                  )}
                  {!isRest && <div style={{ fontSize: 13, color: C.sub }}>{day.exercises.length ? day.exercises.length + ' ej.' : 'Sin ejercicios'}</div>}
                </div>
              </div>

              {day.exercises.length > 0 && (
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', marginBottom: 8, paddingLeft: 12 }}>
                    <span style={{ flex: 1, fontSize: 10, color: A, fontWeight: 700 }}>EJERCICIO</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 36, textAlign: 'center' }}>S/R</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 28, textAlign: 'center' }}>KG</span>
                    <span style={{ fontSize: 10, color: '#4488ff', fontWeight: 700, width: 24, textAlign: 'center' }}>RM</span>
                    <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 32, textAlign: 'right' }}>DESC</span>
                  </div>
                  {(() => {
                    const rows = []
                    let i = 0
                    while (i < day.exercises.length) {
                      const ex = day.exercises[i]
                      if (ex.group) {
                        const groupExs = []
                        const groupId = ex.group
                        while (i < day.exercises.length && day.exercises[i].group === groupId) {
                          groupExs.push(day.exercises[i])
                          i++
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
                              {groupExs.map((gex) => (
                                <div key={gex.id} style={{ fontSize: 13, color: C.sub, marginBottom: 3, display: 'flex', alignItems: 'center', minWidth: 0 }}>
                                  <ExName name={gex.nombre} />
                                  <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{gex.series}x{gex.repeticiones}</span>
                                  <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{gex.peso}</span>
                                  <span style={{ fontFamily: 'monospace', fontSize: 11, width: 24, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{gex.oneRM ? gex.oneRM + '' : ''}</span>
                                </div>
                              ))}
                            </div>
                            <div style={{ width: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <span style={{ fontFamily: 'monospace', fontSize: 11, color: A, fontWeight: 700 }}>{lastEx.descanso}s</span>
                            </div>
                          </div>
                        )
                      } else {
                        rows.push(
                          <div key={ex.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 3, paddingLeft: 12, minWidth: 0 }}>
                            <ExName name={ex.nombre} style={{ fontSize: 13, color: C.sub }} />
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{ex.series}x{ex.repeticiones}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{ex.peso}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, width: 24, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{ex.oneRM ? ex.oneRM + '' : ''}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, color: A, fontWeight: 700, width: 32, textAlign: 'right', flexShrink: 0 }}>{ex.descanso}s</span>
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
          onClick={() => setMovingDay(null)} onKeyDown={e => { if (e.key === 'Escape') setMovingDay(null) }}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, maxWidth: 320, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Mover rutina</div>
            <div style={{ fontSize: 14, color: C.sub, marginBottom: 16 }}>
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
                      padding: '14px 16px', cursor: 'pointer', display: 'flex',
                      justifyContent: 'space-between', alignItems: 'center'
                    }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: C.sub }}>{DAY_NAMES[idx]}</span>
                      {d.label && <span style={{ fontSize: 13, color: A }}>{d.label}</span>}
                    </div>
                    <span style={{ fontSize: 13, color: d.rest ? '#888' : '#fff' }}>
                      {d.rest ? <><Moon size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Descanso</> : hasContent ? <><span>{d.exercises.length} ej.</span> <ArrowRightLeft size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} /></> : <>Vacío <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 2 }} /></>}
                    </span>
                  </button>
                )
              })}
            </div>
            <button onClick={() => setMovingDay(null)}
              style={{ width: '100%', marginTop: 12, padding: 12, background: 'none', border: `1px solid ${C.border}`, borderRadius: 10, color: C.sub, fontSize: 14, cursor: 'pointer' }}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
