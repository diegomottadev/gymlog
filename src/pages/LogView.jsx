import { useState, useMemo } from 'react'
import { A, C } from '../lib/constants'
import { gid, toDay } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'
import BackHeader from '../components/BackHeader'

export default function LogView({ data, onSave, onBack }) {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])
  const [newEx, setNewEx] = useState('')
  const [showSug, setShowSug] = useState(false)
  const known = useMemo(() => { const s = new Set(); data.workouts.forEach(w => w.exercises.forEach(e => s.add(e.name))); return [...s] }, [data.workouts])

  const addEx = () => { if (!newEx.trim()) return; setExercises(p => [...p, { id: gid(), name: newEx.trim(), sets: [{ id: gid(), r: 10, w: 0 }] }]); setNewEx(''); setShowSug(false) }
  const addSet = exId => setExercises(p => p.map(e => e.id === exId ? { ...e, sets: [...e.sets, { id: gid(), r: e.sets[e.sets.length - 1]?.r || 10, w: e.sets[e.sets.length - 1]?.w || 0 }] } : e))
  const delSet = (exId, sId) => setExercises(p => p.map(e => e.id === exId ? { ...e, sets: e.sets.length > 1 ? e.sets.filter(s => s.id !== sId) : e.sets } : e))
  const updSet = (exId, sId, f, v) => setExercises(p => p.map(e => e.id === exId ? { ...e, sets: e.sets.map(s => s.id === sId ? { ...s, [f]: parseFloat(v) || 0 } : s) } : e))
  const delEx = exId => setExercises(p => p.filter(e => e.id !== exId))

  const handleSave = () => {
    if (!exercises.length) return
    const wo = { id: gid(), date: toDay(), name: name.trim() || 'Entrenamiento', exercises: exercises.filter(e => e.name.trim()) }
    onSave(wo)
  }

  const sug = newEx ? known.filter(n => n.toLowerCase().includes(newEx.toLowerCase())).slice(0, 5) : known.slice(0, 5)

  return (
    <div>
      <BackHeader onBack={onBack} title="Registrar" />

      <div style={{ padding: '0 8px 12px' }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre: Push Day, Piernas, etc."
          style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: C.text, fontSize: 15, outline: 'none' }} />
      </div>

      <div style={{ padding: '0 8px' }}>
        {exercises.map(ex => (
          <Card key={ex.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{ex.name}</div>
              <button onClick={() => delEx(ex.id)} style={{ background: 'none', border: 'none', color: C.danger, cursor: 'pointer', fontSize: 14, padding: '2px 6px' }}>×</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr 1fr 32px', gap: 6, marginBottom: 8 }}>
              {['#', 'Reps', 'Kg', ''].map((h, i) => <div key={i} style={{ fontSize: 10, color: C.muted, textAlign: 'center', letterSpacing: '1px' }}>{h}</div>)}
            </div>
            {ex.sets.map((set, i) => (
              <div key={set.id} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 1fr 32px', gap: 6, marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: A, fontFamily: 'monospace', fontWeight: 800 }}>{i + 1}</div>
                <input type="number" min="1" value={set.r} onChange={e => updSet(ex.id, set.id, 'r', e.target.value)}
                  style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '9px 6px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', width: '100%', outline: 'none' }} />
                <input type="number" min="0" step="0.5" value={set.w} onChange={e => updSet(ex.id, set.id, 'w', e.target.value)}
                  style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '9px 6px', color: C.text, fontSize: 16, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center', width: '100%', outline: 'none' }} />
                <button onClick={() => delSet(ex.id, set.id)} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
              </div>
            ))}
            <button onClick={() => addSet(ex.id)} style={{ marginTop: 8, background: 'none', border: `1px dashed ${C.border}`, borderRadius: 8, padding: '7px', width: '100%', color: C.muted, cursor: 'pointer', fontSize: 13 }}>
              + Serie
            </button>
          </Card>
        ))}
      </div>

      <div style={{ padding: '0 8px 8px', position: 'relative' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input value={newEx} onChange={e => { setNewEx(e.target.value); setShowSug(true) }} onFocus={() => setShowSug(true)}
              onKeyDown={e => { if (e.key === 'Enter') addEx(); if (e.key === 'Escape') setShowSug(false) }}
              placeholder="Agregar ejercicio…"
              style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: C.text, fontSize: 14, outline: 'none' }} />
            {showSug && sug.length > 0 && (
              <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: '#1a1a1a', border: `1px solid ${C.border}`, borderRadius: 12, zIndex: 20, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,.8)' }}>
                {sug.map(s => (
                  <div key={s} onMouseDown={e => { e.preventDefault(); setNewEx(s); setShowSug(false) }}
                    style={{ padding: '11px 16px', cursor: 'pointer', fontSize: 13, borderBottom: `1px solid ${C.border}` }}>
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Btn onClick={addEx} style={{ padding: '12px 20px', fontSize: 18, borderRadius: 12 }}>+</Btn>
        </div>
      </div>

      <div style={{ padding: '8px 8px 32px' }}>
        <Btn onClick={handleSave} disabled={!exercises.length} style={{ width: '100%', padding: 15, fontSize: 15, borderRadius: 12 }}>
          ✓ Guardar entrenamiento
        </Btn>
      </div>
    </div>
  )
}
