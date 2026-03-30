import { useState, useMemo } from 'react'
import { Trash2, Power, PowerOff } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function ObjectivesView({ data, onCreate, onSelect, onDelete, onUpdate }) {
  const [newName, setNewName] = useState('')
  const [deleteTarget, setDeleteTarget] = useState(null)

  const handleCreate = () => {
    if (!newName.trim()) return
    onCreate(newName.trim())
    setNewName('')
  }

  const activeObjectives = useMemo(() => data.objectives.filter(obj => obj.active !== false), [data.objectives])
  const inactiveObjectives = useMemo(() => data.objectives.filter(obj => obj.active === false), [data.objectives])

  const getDeleteInfo = (obj) => {
    const exCount = obj.days.reduce((t, d) => t + d.exercises.length, 0)
    const activeDays = obj.days.filter(d => d.label || d.exercises.length).length
    const completions = data.completions.filter(c => c.objectiveId === obj.id).length
    return { exCount, activeDays, completions }
  }

  const renderObjective = (obj, dimmed = false) => {
    const exCount = obj.days.reduce((t, d) => t + d.exercises.length, 0)
    const activeDays = obj.days.filter(d => d.label || d.exercises.length).length
    return (
      <div key={obj.id} role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(obj.id) } }} style={{ outline: 'none' }}>
      <Card onClick={() => onSelect(obj.id)} style={{ opacity: dimmed ? 0.6 : 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{obj.name}</div>
            <div style={{ fontSize: 13, color: C.sub, marginBottom: 4 }}>{activeDays} dias activos · {exCount} ejercicios</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              {obj.days.map((d, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: 8, fontSize: 10, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: d.rest ? '#222' : (d.label || d.exercises.length) ? A : C.hi,
                  color: d.rest ? '#666' : (d.label || d.exercises.length) ? '#111' : '#fff',
                  border: `1px solid ${d.rest ? '#333' : (d.label || d.exercises.length) ? A : C.border}`
                }}>{d.rest ? '—' : DAY_NAMES[i].slice(0, 2)}</div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 6, marginLeft: 8 }} onClick={e => e.stopPropagation()}>
              {onUpdate && (
                <button onClick={e => { e.stopPropagation(); onUpdate({ ...obj, active: obj.active === false ? true : false }) }}
                  aria-label={obj.active !== false ? 'Desactivar objetivo' : 'Activar objetivo'}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                    background: obj.active !== false ? C.hi : A,
                    border: `1px solid ${obj.active !== false ? C.border : A}`,
                    borderRadius: 8, padding: '6px 10px',
                    color: obj.active !== false ? '#fff' : '#111',
                    cursor: 'pointer', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap'
                  }}>
                  {obj.active !== false ? <PowerOff size={12} aria-hidden="true" /> : <Power size={12} aria-hidden="true" />}
                  {obj.active !== false ? 'Desactivar' : 'Activar'}
                </button>
              )}
              <button onClick={e => { e.stopPropagation(); setDeleteTarget(obj) }}
                aria-label="Eliminar objetivo"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                  background: 'transparent', border: `1px solid ${C.danger}55`,
                  borderRadius: 8, padding: '6px 10px',
                  color: C.danger, cursor: 'pointer', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap'
                }}>
                <Trash2 size={12} aria-hidden="true" /> Eliminar
              </button>
          </div>
        </div>
      </Card>
      </div>
    )
  }

  return (
    <div>
      <div style={{ padding: '24px 8px 12px', fontSize: 20, fontWeight: 800 }}>Objetivos</div>

      <div style={{ padding: '0 8px 16px' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input value={newName} onChange={e => setNewName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleCreate() }}
            aria-label="Nombre del nuevo objetivo"
            placeholder="Nuevo objetivo... ej: Hipertrofia Fase 1"
            style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 16px', color: C.text, fontSize: 14, outline: 'none' }} />
          <Btn onClick={handleCreate} aria-label="Crear objetivo" style={{ padding: '12px 20px', fontSize: 18, borderRadius: 12 }}>+</Btn>
        </div>
      </div>

      <div style={{ padding: '0 8px' }}>
        {!data.objectives.length && (
          <div style={{ padding: '40px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin objetivos aún</div>
            <div style={{ fontSize: 14, color: C.sub }}>Creá tu primer programa de entrenamiento</div>
          </div>
        )}
        {activeObjectives.map(obj => renderObjective(obj, false))}

        {inactiveObjectives.length > 0 && (
          <>
            <div style={{ fontSize: 13, color: C.sub, fontWeight: 700, letterSpacing: '1px', marginTop: 20, marginBottom: 10 }}>OBJETIVOS ANTERIORES</div>
            {inactiveObjectives.map(obj => renderObjective(obj, true))}
          </>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (() => {
        const info = getDeleteInfo(deleteTarget)
        return (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 20 }}
            onClick={() => setDeleteTarget(null)}>
            <div style={{ background: C.card, border: `1px solid ${C.danger}`, borderRadius: 12, padding: 24, maxWidth: 360, width: '100%' }}
              onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: 36, textAlign: 'center', marginBottom: 12 }}>⚠️</div>
              <div style={{ fontSize: 18, fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Eliminar objetivo</div>
              <div style={{ fontSize: 15, fontWeight: 700, textAlign: 'center', color: A, marginBottom: 16 }}>{deleteTarget.name}</div>

              <div style={{ background: C.hi, borderRadius: 12, padding: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 14, color: C.sub, marginBottom: 10, fontWeight: 700 }}>Se eliminará permanentemente:</div>
                <div style={{ fontSize: 13, color: C.sub, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Días con rutinas</span>
                  <span style={{ fontWeight: 700, color: C.danger }}>{info.activeDays}</span>
                </div>
                <div style={{ fontSize: 13, color: C.sub, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Ejercicios configurados</span>
                  <span style={{ fontWeight: 700, color: C.danger }}>{info.exCount}</span>
                </div>
                <div style={{ fontSize: 13, color: C.sub, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Rutinas completadas</span>
                  <span style={{ fontWeight: 700, color: C.danger }}>{info.completions}</span>
                </div>
              </div>

              <div style={{ fontSize: 13, color: C.danger, textAlign: 'center', marginBottom: 20, lineHeight: 1.5 }}>
                Esta acción no se puede deshacer. Todos los datos asociados a este objetivo serán eliminados.
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setDeleteTarget(null)}
                  style={{ flex: 1, padding: 14, borderRadius: 12, background: C.hi, border: `1px solid ${C.border}`, color: C.sub, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  Cancelar
                </button>
                <button onClick={() => { onDelete(deleteTarget.id); setDeleteTarget(null) }}
                  style={{ flex: 1, padding: 14, borderRadius: 12, background: C.danger, border: 'none', color: C.sub, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
