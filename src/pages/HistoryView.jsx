import { useState, useMemo } from 'react'
import { A, C } from '../lib/constants'
import { vol, fmtDate } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function HistoryView({ data, onDelete, onDeleteAll }) {
  const sorted = useMemo(() => [...data.workouts].sort((a, b) => b.date.localeCompare(a.date)), [data.workouts])
  const [confirm, setConfirm] = useState(null)
  const [confirmAll, setConfirmAll] = useState(false)

  if (!sorted.length) return (
    <div style={{ padding: '60px 8px', textAlign: 'center', color: C.muted }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🏋️</div>
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: C.text }}>Sin entrenamientos aún</div>
      <div style={{ fontSize: 13 }}>Registrá tu primera sesión</div>
    </div>
  )

  return (
    <div>
      <div style={{ padding: '24px 8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800 }}>Historial</div>
        {confirmAll ? (
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => { onDeleteAll(); setConfirmAll(false) }} style={{ background: C.danger, border: 'none', borderRadius: 8, padding: '6px 12px', color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>Borrar todos</button>
            <button onClick={() => setConfirmAll(false)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '6px 12px', color: C.muted, cursor: 'pointer', fontSize: 12 }}>No</button>
          </div>
        ) : (
          <Btn onClick={() => setConfirmAll(true)} variant="danger" style={{ padding: '6px 12px', fontSize: 11, borderRadius: 8 }}>Borrar todos</Btn>
        )}
      </div>
      <div style={{ padding: '0 8px' }}>
        {sorted.map(w => (
          <Card key={w.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: C.muted, marginBottom: 5, letterSpacing: '1px' }}>{fmtDate(w.date).toUpperCase()}</div>
                <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{w.name}</div>
                {w.exercises.map(ex => (
                  <div key={ex.id} style={{ fontSize: 12, color: C.muted, marginBottom: 3 }}>
                    {ex.name} · {ex.sets.length} ser · {ex.sets.length ? Math.max(...ex.sets.map(s => s.w)) : 0}kg máx
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'right', marginLeft: 12, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
                <div style={{ fontSize: 14, fontFamily: 'monospace', fontWeight: 800, color: A }}>{vol(w).toLocaleString()}kg</div>
                {confirm === w.id ? (
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={() => { onDelete(w.id); setConfirm(null) }} style={{ background: C.danger, border: 'none', borderRadius: 6, padding: '4px 8px', color: '#fff', cursor: 'pointer', fontSize: 11 }}>Borrar</button>
                    <button onClick={() => setConfirm(null)} style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 6, padding: '4px 8px', color: C.muted, cursor: 'pointer', fontSize: 11 }}>No</button>
                  </div>
                ) : (
                  <button onClick={() => setConfirm(w.id)} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: 11, padding: '2px 4px' }}>🗑 borrar</button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
