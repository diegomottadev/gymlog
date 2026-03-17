import { useState, useRef } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { gid, toDay } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'
import BackHeader from '../components/BackHeader'

export default function DayView({ objective, dayIndex, completions, onToggleCompletion, onBack, onUpdate }) {
  if (!objective) return null
  const day = objective.days[dayIndex]
  const today = toDay()
  const isCompleted = completions.some(c => c.objectiveId === objective.id && c.dayIndex === dayIndex && c.date === today)
  const [label, setLabel] = useState(day.label)
  const [exercises, setExercises] = useState(day.exercises)
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ nombre: '', series: 3, repeticiones: 10, peso: 0, descanso: 60 })
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
    const newEx = exercises.map(e => e.id === id ? { ...e, [field]: field === 'nombre' ? value : (parseFloat(value) || 0) } : e)
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

  return (
    <div>
      <BackHeader onBack={onBack} title={`Día ${dayIndex + 1} · ${DAY_NAMES[dayIndex]}`} />

      {exercises.length > 0 && <div style={{ padding: '0 20px 12px' }}>
        <button onClick={() => onToggleCompletion(objective.id, dayIndex, today)}
          style={{
            width: '100%', padding: 14, borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: 'pointer',
            border: isCompleted ? 'none' : `2px solid ${A}`, transition: 'all .2s',
            background: isCompleted ? A : 'transparent', color: isCompleted ? '#111' : A
          }}>
          {isCompleted ? '✓ Rutina completada hoy' : 'Marcar como completada'}
        </button>
      </div>}

      <div style={{ padding: '0 20px 16px' }}>
        <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>GRUPO MUSCULAR / RUTINA</label>
        <input value={label} onChange={e => handleLabelChange(e.target.value)}
          placeholder="ej: Espalda - Trícep"
          style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: A, fontSize: 15, fontWeight: 700, outline: 'none' }} />
      </div>

      <div style={{ padding: '0 20px' }}>
        {!exercises.length && !adding && (
          <div style={{ padding: '30px 20px', textAlign: 'center', color: C.muted }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>📝</div>
            <div style={{ fontSize: 14, marginBottom: 4 }}>Sin ejercicios en este día</div>
            <div style={{ fontSize: 12 }}>Agregá ejercicios para armar la rutina</div>
          </div>
        )}

        {exercises.map((ex, idx) => (
          <Card key={ex.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <input value={ex.nombre} onChange={e => updateExercise(ex.id, 'nombre', e.target.value)}
                style={{ background: 'transparent', border: 'none', color: C.text, fontWeight: 700, fontSize: 15, outline: 'none', flex: 1 }} />
              <div style={{ display: 'flex', gap: 4 }}>
                {idx > 0 && <button onClick={() => moveExercise(idx, -1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↑</button>}
                {idx < exercises.length - 1 && <button onClick={() => moveExercise(idx, 1)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, width: 26, height: 26, color: C.muted, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↓</button>}
                <button onClick={() => deleteExercise(ex.id)} style={{ background: 'none', border: 'none', color: C.danger, cursor: 'pointer', fontSize: 14, padding: '2px 6px' }}>✕</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
              {[
                ['series', 'Series', '1'],
                ['repeticiones', 'Reps', '1'],
                ['peso', 'Kg', '0.5'],
                ['descanso', 'Desc(s)', '5']
              ].map(([field, lbl, step]) => (
                <div key={field}>
                  <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                  <input type="number" min="0" step={step} value={ex[field]}
                    onChange={e => updateExercise(ex.id, field, e.target.value)}
                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', outline: 'none' }} />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {adding ? (
        <div style={{ padding: '0 20px 20px' }}>
          <Card style={{ border: `1px solid ${A}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: A }}>Nuevo ejercicio</div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>NOMBRE</label>
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
                  <label style={{ fontSize: 9, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4, textAlign: 'center' }}>{lbl}</label>
                  <input type="number" min="0" value={val}
                    onChange={e => setForm(p => ({ ...p, [field]: parseFloat(e.target.value) || 0 }))}
                    style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '10px 4px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', outline: 'none' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={addExercise} disabled={!form.nombre.trim()} style={{ flex: 1, padding: 12, borderRadius: 10 }}>✓ Agregar</Btn>
              <Btn onClick={() => setAdding(false)} variant="ghost" style={{ padding: 12, borderRadius: 10 }}>Cancelar</Btn>
            </div>
          </Card>
        </div>
      ) : (
        <div style={{ padding: '8px 20px 32px' }}>
          <Btn onClick={() => setAdding(true)} style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 14 }}>
            + Agregar ejercicio
          </Btn>
        </div>
      )}
    </div>
  )
}
