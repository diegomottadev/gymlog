import { useState } from 'react'
import { ChevronDown, ChevronUp, Zap, Dumbbell, RefreshCw } from 'lucide-react'
import { A, C } from '../lib/constants'
import { getSuggestedWeights } from '../lib/progression'

const goalLabels = { fuerza: 'Fuerza', hipertrofia: 'Hipertrofia', resistencia: 'Resistencia' }
const GoalIcon = { fuerza: Zap, hipertrofia: Dumbbell, resistencia: RefreshCw }

export default function OneRMPanel({ exercise, onUpdate }) {
  const [open, setOpen] = useState(false)
  const oneRM = exercise.oneRM || 0
  const mode = exercise.oneRMMode || 'manual'
  const suggested = getSuggestedWeights(oneRM)

  return (
    <div style={{ background: C.hi, borderRadius: 10, padding: 10, marginTop: 10, border: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: C.text
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700 }}>1RM</span>
          {oneRM > 0 && <span style={{ fontSize: 14, fontWeight: 800, color: A, fontFamily: 'monospace' }}>{oneRM} kg</span>}
          <span style={{
            fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 6,
            background: mode === 'auto' ? '#4488ff22' : `${A}22`,
            color: mode === 'auto' ? '#4488ff' : A
          }}>
            {mode === 'auto' ? 'ESTIMADO' : 'MANUAL'}
          </span>
        </div>
        {open ? <ChevronUp size={16} color={C.muted} /> : <ChevronDown size={16} color={C.muted} />}
      </button>

      {open && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: C.sub }}>1RM automático (Epley)</span>
            <button
              onClick={() => onUpdate({ oneRMMode: mode === 'auto' ? 'manual' : 'auto' })}
              style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: mode === 'auto' ? A : C.border,
                position: 'relative', transition: 'background .2s'
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: 9, background: '#fff',
                position: 'absolute', top: 3,
                left: mode === 'auto' ? 23 : 3,
                transition: 'left .2s'
              }} />
            </button>
          </div>

          {mode === 'manual' && (
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>1RM MANUAL (KG)</label>
              <input
                type="number" min="0" step="0.5" value={oneRM || ''}
                onChange={e => onUpdate({ oneRM: parseFloat(e.target.value) || 0 })}
                placeholder="ej: 100"
                style={{
                  width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
                  padding: '10px 12px', color: A, fontSize: 16, fontFamily: 'monospace',
                  fontWeight: 700, outline: 'none'
                }}
              />
            </div>
          )}

          {suggested && (
            <div>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', marginBottom: 8 }}>PESOS SUGERIDOS</div>
              {Object.entries(suggested).map(([goal, data]) => (
                <div key={goal} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '6px 0', borderBottom: `1px solid ${C.border}22`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {(() => { const Icon = GoalIcon[goal]; return <Icon size={14} color={C.sub} /> })()}
                    <span style={{ fontSize: 12, color: C.sub, fontWeight: 600 }}>{goalLabels[goal]}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text, fontFamily: 'monospace' }}>
                      {data.min}–{data.max} kg
                    </span>
                    <span style={{ fontSize: 10, color: C.muted, marginLeft: 6 }}>{data.reps} reps</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
