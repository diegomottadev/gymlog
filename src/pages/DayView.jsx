import { useState, useRef } from 'react'
import { Check, ChevronUp, ChevronDown, X, Scissors, Link, FileText } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { gid, toDay, getWeekRange, dateStr } from '../lib/helpers'
import { calcEpley1RM } from '../lib/progression'
import { resolveExerciseSets, buildDefaultSets } from '../lib/overrides'
import Card from '../components/Card'
import Btn from '../components/Btn'
import BackHeader from '../components/BackHeader'
import OneRMPanel from '../components/OneRMPanel'

export default function DayView({ objective, dayIndex, selectedDate, completions, onToggleCompletion, onBack, onUpdate }) {
  if (!objective) return null
  const day = objective.days[dayIndex]
  const { mon } = getWeekRange()
  // Use selectedDate from calendar, or calculate from current week
  let dayDateStr
  if (selectedDate) {
    dayDateStr = selectedDate
  } else {
    const monDate = new Date(mon + 'T12:00:00')
    const dayDate = new Date(monDate)
    dayDate.setDate(monDate.getDate() + dayIndex)
    dayDateStr = dateStr(dayDate)
  }
  const hasDateContext = !!selectedDate
  const isCompleted = completions.some(c => c.objectiveId === objective.id && c.dayIndex === dayIndex && c.date === dayDateStr)
  const formattedDate = selectedDate ? new Date(selectedDate + 'T12:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }) : null
  const [label, setLabel] = useState(day.label)
  const [exercises, setExercises] = useState(day.exercises)
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ nombre: '', series: 3, repeticiones: 10, peso: 0, descanso: 60 })
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const saveTimerRef = useRef(null)

  const saveChanges = (newLabel, newExercises) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      const updated = { ...objective, days: objective.days.map((d, i) => i === dayIndex ? { ...d, label: newLabel, exercises: newExercises } : d) }
      onUpdate(updated)
    }, 500)
  }

  const handleLabelChange = v => { setLabel(v); saveChanges(v, exercises) }

  const addExercise = () => {
    if (!form.nombre.trim()) return
    const newEx = [...exercises, { id: gid(), nombre: form.nombre.trim(), series: form.series, repeticiones: form.repeticiones, peso: form.peso, descanso: form.descanso }]
    setExercises(newEx)
    saveChanges(label, newEx)
    setForm({ nombre: '', series: 3, repeticiones: 10, peso: 0, descanso: 60 })
    setAdding(false)
  }

  const deleteExercise = id => {
    const newEx = exercises.filter(e => e.id !== id)
    setExercises(newEx)
    saveChanges(label, newEx)
  }

  const updateExercise = (id, field, value) => {
    const newEx = exercises.map(e => {
      if (e.id !== id) return e
      const numVal = field === 'nombre' ? value : (parseFloat(value) || 0)
      const isOverrideField = field === 'peso' || field === 'repeticiones' || field === 'series'
      // When editing from calendar, only update the dayOverride, not the base
      const updated = { ...e }
      if (!hasDateContext || !isOverrideField) {
        updated[field] = numVal
      }
      // When editing with date context, save override for that date
      if (hasDateContext && isOverrideField) {
        const overrides = { ...(e.dayOverrides || {}) }
        const currentSets = overrides[dayDateStr]
          ? overrides[dayDateStr].sets.map(s => ({ ...s }))
          : buildDefaultSets(e)
        if (field === 'series') {
          const newCount = numVal
          while (currentSets.length < newCount) currentSets.push({ peso: e.peso || 0, repeticiones: e.repeticiones || 0 })
          while (currentSets.length > newCount && currentSets.length > 1) currentSets.pop()
        } else if (field === 'peso') {
          currentSets.forEach(s => { s.peso = numVal })
        } else if (field === 'repeticiones') {
          currentSets.forEach(s => { s.repeticiones = numVal })
        }
        overrides[dayDateStr] = { sets: currentSets }
        updated.dayOverrides = overrides
      }
      // Auto-recalc 1RM when peso or reps change and mode is auto
      const effectivePeso = hasDateContext && field === 'peso' ? numVal : updated.peso
      const effectiveReps = hasDateContext && field === 'repeticiones' ? numVal : updated.repeticiones
      if ((field === 'peso' || field === 'repeticiones') && updated.oneRMMode === 'auto' && effectivePeso > 0 && effectiveReps > 0) {
        updated.oneRM = calcEpley1RM(effectivePeso, effectiveReps)
      }
      // Track weight history when peso changes
      if (field === 'peso' && numVal > 0) {
        const histDate = hasDateContext ? dayDateStr : toDay()
        const history = [...(updated.weightHistory || [])]
        const idx = history.findIndex(h => h.date === histDate)
        const entry = { date: histDate, peso: numVal, oneRM: updated.oneRM || 0 }
        if (idx >= 0) history[idx] = entry
        else history.push(entry)
        updated.weightHistory = history
      }
      return updated
    })
    setExercises(newEx)
    saveChanges(label, newEx)
  }

  const moveExercise = (idx, dir) => {
    const newIdx = idx + dir
    if (newIdx < 0 || newIdx >= exercises.length) return
    const newEx = [...exercises];
    [newEx[idx], newEx[newIdx]] = [newEx[newIdx], newEx[idx]]
    setExercises(newEx)
    saveChanges(label, newEx)
  }

  const updateExerciseConfig = (id, updates) => {
    const todayStr = toDay()
    const newEx = exercises.map(e => {
      if (e.id !== id) return e
      const updated = { ...e, ...updates }
      // Auto-calc 1RM via Epley when mode is auto and peso/reps change
      if (updated.oneRMMode === 'auto' && updated.peso > 0 && updated.repeticiones > 0) {
        updated.oneRM = calcEpley1RM(updated.peso, updated.repeticiones)
      }
      // Track weight history when 1RM changes
      if (updated.oneRM > 0 && updated.peso > 0) {
        const history = [...(updated.weightHistory || [])]
        const todayIdx = history.findIndex(h => h.date === todayStr)
        const entry = { date: todayStr, peso: updated.peso, oneRM: updated.oneRM }
        if (todayIdx >= 0) history[todayIdx] = entry
        else history.push(entry)
        updated.weightHistory = history
      }
      return updated
    })
    setExercises(newEx)
    saveChanges(label, newEx)
  }

  const toggleCombine = (idx) => {
    const newEx = [...exercises]
    const curr = newEx[idx]
    const next = newEx[idx + 1]
    if (!next) return

    // If both already share the same group, unlink them
    if (curr.group && curr.group === next.group) {
      // Check if next is the last in this group — if so, remove its group
      const groupId = curr.group
      const groupMembers = newEx.filter(e => e.group === groupId)
      if (groupMembers.length <= 2) {
        // Only 2 in group, dissolve entire group
        newEx.forEach(e => { if (e.group === groupId) e.group = null })
      } else {
        // Split: everything from next onward in this group gets a new group or no group
        let foundNext = false
        const tail = []
        newEx.forEach(e => {
          if (e.id === next.id) foundNext = true
          if (foundNext && e.group === groupId) tail.push(e)
        })
        if (tail.length === 1) {
          tail[0].group = null
        } else {
          const newGroupId = gid()
          tail.forEach(e => e.group = newGroupId)
        }
      }
    } else {
      // Combine: merge groups or create new one
      const groupId = curr.group || next.group || gid()
      if (curr.group && next.group && curr.group !== next.group) {
        // Merge next's group into curr's group
        const oldGroup = next.group
        newEx.forEach(e => { if (e.group === oldGroup) e.group = curr.group })
      } else {
        curr.group = groupId
        next.group = groupId
      }
    }
    setExercises(newEx)
    saveChanges(label, newEx)
  }

  return (
    <div>
      <BackHeader onBack={onBack} title={formattedDate ? `Día ${dayIndex + 1}. ${DAY_NAMES[dayIndex]} ${formattedDate}` : `Día ${dayIndex + 1} · ${DAY_NAMES[dayIndex]}`} />

      {exercises.length > 0 && <div style={{ padding: '0 8px 12px' }}>
        <button onClick={() => onToggleCompletion(objective.id, dayIndex, dayDateStr)}
          style={{
            width: '100%', padding: 14, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer',
            border: isCompleted ? 'none' : `2px solid ${A}`, transition: 'all .2s',
            background: isCompleted ? A : 'transparent', color: isCompleted ? '#111' : A
          }}>
          {isCompleted ? <><Check size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Rutina completada hoy</> : 'Marcar como completada'}
        </button>
      </div>}

      <div style={{ padding: '0 8px 16px' }}>
        <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>GRUPO MUSCULAR / RUTINA</label>
        <input value={label} onChange={e => handleLabelChange(e.target.value)}
          placeholder="ej: Espalda - Trícep"
          style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: A, fontSize: 15, fontWeight: 700, outline: 'none' }} />
      </div>

      <div style={{ padding: '0 8px' }}>
        {!exercises.length && !adding && (
          <div style={{ padding: 32, textAlign: 'center', color: C.muted, borderRadius: 12, border: `1px dashed ${C.border}` }}>
            <FileText size={32} color={C.muted} style={{ marginBottom: 8 }} />
            <div style={{ fontSize: 14 }}>Sin ejercicios</div>
          </div>
        )}

        {(() => {
          const rendered = []
          let i = 0
          while (i < exercises.length) {
            const ex = exercises[i]
            if (ex.group) {
              // Collect group
              const groupId = ex.group
              const groupStart = i
              const groupExs = []
              while (i < exercises.length && exercises[i].group === groupId) {
                groupExs.push({ ex: exercises[i], idx: i })
                i++
              }
              const lastEx = groupExs[groupExs.length - 1].ex

              rendered.push(
                <div key={groupId}>
                  <div style={{ display: 'flex', alignItems: 'stretch' }}>
                    {/* Left bracket */}
                    <div style={{ width: 14, marginRight: 4, position: 'relative', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', left: 2, width: 3, background: A, borderRadius: 2, top: 20, bottom: 20 }} />
                      <div style={{ position: 'absolute', left: 2, top: 20, width: 8, height: 3, background: A, borderRadius: 2 }} />
                      <div style={{ position: 'absolute', left: 2, bottom: 20, width: 8, height: 3, background: A, borderRadius: 2 }} />
                    </div>
                    {/* Cards */}
                    <div style={{ flex: 1 }}>
                      {groupExs.map(({ ex: gex, idx: gIdx }, gi) => (
                        <Card key={gex.id} style={{ marginBottom: gi < groupExs.length - 1 ? 4 : undefined }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                            <input value={gex.nombre} onChange={e => updateExercise(gex.id, 'nombre', e.target.value)}
                              style={{ background: 'transparent', border: 'none', color: C.text, fontWeight: 700, fontSize: 15, outline: 'none', flex: 1 }} />
                            <div style={{ display: 'flex', gap: 4 }}>
                              {gIdx > 0 && <button onClick={() => moveExercise(gIdx, -1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronUp size={14} /></button>}
                              {gIdx < exercises.length - 1 && <button onClick={() => moveExercise(gIdx, 1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronDown size={14} /></button>}
                              <button onClick={() => setDeleteConfirm(gex)} style={{ background: 'none', border: 'none', color: C.danger, cursor: 'pointer', fontSize: 14, padding: '2px 6px' }}><X size={14} /></button>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                            {[['series', 'Series', '1'], ['repeticiones', 'Reps', '1'], ['peso', 'Kg', '0.5']].map(([field, lbl, step]) => {
                              const sets = hasDateContext ? resolveExerciseSets(gex, dayDateStr) : null
                              const val = sets ? (field === 'series' ? sets.length : field === 'peso' ? Math.max(...sets.map(s => s.peso)) : sets[0]?.repeticiones || gex[field]) : gex[field]
                              return (
                                <div key={field}>
                                  <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                                  <input type="number" min="0" step={step} value={val}
                                    onChange={e => updateExercise(gex.id, field, e.target.value)}
                                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.sub, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                                </div>
                              )
                            })}
                          </div>
                          <OneRMPanel exercise={gex} onUpdate={updates => updateExerciseConfig(gex.id, updates)} />
                        </Card>
                      ))}
                    </div>
                  </div>
                  {/* Rest time below combination */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '8px 0', padding: '8px 0' }}>
                    <label style={{ fontSize: 12, color: A, fontWeight: 700 }}>Descanso</label>
                    <input type="number" min="0" step="5" value={lastEx.descanso}
                      onChange={e => updateExercise(lastEx.id, 'descanso', e.target.value)}
                      style={{ width: 70, background: C.hi, border: `1px solid ${A}55`, borderRadius: 10, padding: '10px 4px', color: A, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                    <span style={{ fontSize: 12, color: C.sub }}>seg</span>
                  </div>
                  {/* Action buttons */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '4px 0' }}>
                    <button onClick={() => {
                      const newEx = [...exercises]
                      const members = newEx.filter(e => e.group === groupId)
                      members.forEach(e => e.group = null)
                      setExercises(newEx)
                      saveChanges(label, newEx)
                    }}
                      style={{
                        background: 'transparent', color: '#ff6b6b',
                        border: `1px solid #ff6b6b55`,
                        borderRadius: 12, padding: '4px 12px', fontSize: 13, fontWeight: 700,
                        cursor: 'pointer', transition: 'all .2s'
                      }}><Scissors size={13} style={{ marginRight: 4 }} /> Descombinar</button>
                    {groupExs[groupExs.length - 1].idx < exercises.length - 1 && (
                      <button onClick={() => toggleCombine(groupExs[groupExs.length - 1].idx)}
                        style={{
                          background: C.hi, color: C.sub,
                          border: `1px solid ${C.border}`,
                          borderRadius: 12, padding: '4px 12px', fontSize: 13, fontWeight: 700,
                          cursor: 'pointer', transition: 'all .2s'
                        }}><Link size={13} style={{ marginRight: 4 }} /> Combinar</button>
                    )}
                  </div>
                </div>
              )
            } else {
              // Individual exercise
              const idx = i
              const nextEx = i < exercises.length - 1 ? exercises[i + 1] : null
              i++

              rendered.push(
                <div key={ex.id}>
                  <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                      <input value={ex.nombre} onChange={e => updateExercise(ex.id, 'nombre', e.target.value)}
                        style={{ background: 'transparent', border: 'none', color: C.text, fontWeight: 700, fontSize: 15, outline: 'none', flex: 1 }} />
                      <div style={{ display: 'flex', gap: 4 }}>
                        {idx > 0 && <button onClick={() => moveExercise(idx, -1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronUp size={14} /></button>}
                        {idx < exercises.length - 1 && <button onClick={() => moveExercise(idx, 1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronDown size={14} /></button>}
                        <button onClick={() => setDeleteConfirm(ex)} style={{ background: 'none', border: 'none', color: C.danger, cursor: 'pointer', fontSize: 14, padding: '2px 6px' }}><X size={14} /></button>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
                      {[['series', 'Series', '1'], ['repeticiones', 'Reps', '1'], ['peso', 'Kg', '0.5'], ['descanso', 'Desc(s)', '5']].map(([field, lbl, step]) => {
                        const sets = hasDateContext ? resolveExerciseSets(ex, dayDateStr) : null
                        const val = sets && field !== 'descanso' ? (field === 'series' ? sets.length : field === 'peso' ? Math.max(...sets.map(s => s.peso)) : sets[0]?.repeticiones || ex[field]) : ex[field]
                        return (
                          <div key={field}>
                            <label style={{ fontSize: 11, color: A, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                            <input type="number" min="0" step={step} value={val}
                              onChange={e => updateExercise(ex.id, field, e.target.value)}
                              style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                          </div>
                        )
                      })}
                    </div>
                    <OneRMPanel exercise={ex} onUpdate={updates => updateExerciseConfig(ex.id, updates)} />
                  </Card>

                  {idx < exercises.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
                      <button onClick={() => toggleCombine(idx)}
                        style={{
                          background: C.hi, color: C.muted,
                          border: `1px solid ${C.border}`,
                          borderRadius: 12, padding: '3px 12px', fontSize: 12, fontWeight: 700,
                          cursor: 'pointer', transition: 'all .2s'
                        }}><Link size={13} style={{ marginRight: 4 }} /> Combinar</button>
                    </div>
                  )}
                </div>
              )
            }
          }
          return rendered
        })()}
      </div>

      {adding ? (
        <div style={{ padding: '0 8px 20px' }}>
          <Card style={{ border: `1px solid ${A}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: A }}>Nuevo ejercicio</div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 12, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>NOMBRE</label>
              <input value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                onKeyDown={e => { if (e.key === 'Enter') addExercise() }}
                placeholder="ej: Press banca, Remo con barra…"
                autoFocus
                style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 10, padding: '12px 14px', color: C.text, fontSize: 14, outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
              {[
                ['series', 'Series', form.series],
                ['repeticiones', 'Reps', form.repeticiones],
                ['peso', 'Kg', form.peso],
                ['descanso', 'Desc(s)', form.descanso]
              ].map(([field, lbl, val]) => (
                <div key={field}>
                  <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                  <input type="number" min="0" value={val}
                    onChange={e => setForm(p => ({ ...p, [field]: parseFloat(e.target.value) || 0 }))}
                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'center', outline: 'none' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={addExercise} disabled={!form.nombre.trim()} style={{ flex: 1, padding: 12, borderRadius: 10 }}><Check size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Agregar</Btn>
              <Btn onClick={() => setAdding(false)} variant="ghost" style={{ padding: 12, borderRadius: 10 }}>Cancelar</Btn>
            </div>
          </Card>
        </div>
      ) : (
        <div style={{ padding: '8px 8px 32px' }}>
          <Btn onClick={() => setAdding(true)} style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 12 }}>
            + Agregar ejercicio
          </Btn>
        </div>
      )}

      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 20 }}
          onClick={() => setDeleteConfirm(null)}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, maxWidth: 320, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Eliminar ejercicio</div>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>
              ¿Estás seguro de que querés eliminar <span style={{ color: C.text, fontWeight: 600 }}>{deleteConfirm.nombre}</span>?
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={() => setDeleteConfirm(null)} variant="ghost" style={{ flex: 1, padding: 12, borderRadius: 10 }}>Cancelar</Btn>
              <button onClick={() => { deleteExercise(deleteConfirm.id); setDeleteConfirm(null) }}
                style={{ flex: 1, padding: 12, borderRadius: 10, background: C.danger, color: C.sub, border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
