import { useState } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function ObjectivesView({ data, onCreate, onSelect, onDelete }) {
  const [newName, setNewName] = useState('')
  const [confirm, setConfirm] = useState(null)

  const handleCreate = () => {
    if (!newName.trim()) return
    onCreate(newName.trim())
    setNewName('')
  }

  return (
    <div>
      <div style={{ padding: '24px 20px 12px', fontSize: 20, fontWeight: 800 }}>Objetivos</div>

      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input value={newName} onChange={e => setNewName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleCreate() }}
            placeholder="Nuevo objetivo… ej: Hipertrofia Fase 1"
            style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: C.text, fontSize: 14, outline: 'none' }} />
          <Btn onClick={handleCreate} style={{ padding: '12px 20px', fontSize: 18, borderRadius: 12 }}>+</Btn>
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        {!data.objectives.length && (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: C.muted }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin objetivos aún</div>
            <div style={{ fontSize: 13 }}>Creá tu primer programa de entrenamiento</div>
          </div>
        )}
        {data.objectives.map(obj => {
          const exCount = obj.days.reduce((t, d) => t + d.exercises.length, 0)
          const activeDays = obj.days.filter(d => d.label || d.exercises.length).length
          return (
            <Card key={obj.id} onClick={() => onSelect(obj.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{obj.name}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>{activeDays} días activos · {exCount} ejercicios</div>
                  <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
                    {obj.days.map((d, i) => (
                      <div key={i} style={{
                        width: 28, height: 28, borderRadius: 8, fontSize: 10, fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: (d.label || d.exercises.length) ? A : C.hi,
                        color: (d.label || d.exercises.length) ? '#111' : C.muted,
                        border: `1px solid ${(d.label || d.exercises.length) ? A : C.border}`
                      }}>{DAY_NAMES[i].slice(0, 2)}</div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  {confirm === obj.id ? (
                    <div style={{ display: 'flex', gap: 6 }} onClick={e => e.stopPropagation()}>
                      <button onClick={e => { e.stopPropagation(); onDelete(obj.id); setConfirm(null) }} style={{ background: C.danger, border: 'none', borderRadius: 6, padding: '4px 8px', color: '#fff', cursor: 'pointer', fontSize: 11 }}>Borrar</button>
                      <button onClick={e => { e.stopPropagation(); setConfirm(null) }} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, padding: '4px 8px', color: C.muted, cursor: 'pointer', fontSize: 11 }}>No</button>
                    </div>
                  ) : (
                    <button onClick={e => { e.stopPropagation(); setConfirm(obj.id) }} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: 11, padding: '2px 4px' }}>🗑</button>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
