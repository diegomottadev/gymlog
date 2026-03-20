import { useState, useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { createEmptyObjective } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'
import Input from '../components/Input'

export default function StudentsView({ sharedObjectives, trainerEmail, onSaveShared, onDeleteShared, onSelectShared }) {
  const [newEmail, setNewEmail] = useState('')
  const [err, setErr] = useState('')

  const studentMap = useMemo(() => {
    const map = {}
    sharedObjectives.forEach(so => {
      if (!map[so.studentEmail]) map[so.studentEmail] = []
      map[so.studentEmail].push(so)
    })
    return map
  }, [sharedObjectives])

  const students = Object.keys(studentMap).sort()

  const handleAddStudent = async () => {
    const email = newEmail.trim().toLowerCase()
    if (!email || !email.includes('@')) { setErr('Ingresa un email valido.'); return }
    setErr('')
    const obj = createEmptyObjective('Nueva rutina')
    const id = await onSaveShared({ trainerEmail, studentEmail: email, objective: obj })
    setNewEmail('')
  }

  const handleCreateObjective = async (studentEmail) => {
    const obj = createEmptyObjective('Nueva rutina')
    await onSaveShared({ trainerEmail, studentEmail, objective: obj })
  }

  const [deleteConfirm, setDeleteConfirm] = useState(null)

  return (
    <div>
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{ fontSize: 11, color: C.muted, letterSpacing: '2px', marginBottom: 6 }}>PERSONAL TRAINER</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Mis Alumnos</div>
      </div>

      <div style={{ padding: '0 20px 16px' }}>
        <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>AGREGAR ALUMNO POR EMAIL</label>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <Input value={newEmail} onChange={e => setNewEmail(e.target.value)}
              placeholder="alumno@email.com"
              onKeyDown={e => { if (e.key === 'Enter') handleAddStudent() }} />
          </div>
          <Btn onClick={handleAddStudent} style={{ padding: '12px 20px', borderRadius: 12, fontSize: 14, whiteSpace: 'nowrap', height: 48 }}>
            + Agregar
          </Btn>
        </div>
        {err && <div style={{ color: C.danger, fontSize: 12, marginTop: 4 }}>{err}</div>}
      </div>

      <div style={{ padding: '0 20px' }}>
        {students.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>👥</div>
            <div style={{ fontSize: 14, color: C.muted, marginBottom: 4 }}>Sin alumnos todavia</div>
            <div style={{ fontSize: 12, color: C.muted }}>Agrega alumnos por email para asignarles rutinas</div>
          </div>
        )}

        {students.map(studentEmail => (
          <div key={studentEmail} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: A, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>👤</span> {studentEmail}
            </div>

            {studentMap[studentEmail].map(so => (
              <Card key={so.id} style={{ marginLeft: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div onClick={() => onSelectShared(so)} style={{ flex: 1, cursor: 'pointer' }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{so.objective.name}</div>
                    <div style={{ fontSize: 11, color: C.muted }}>
                      {so.objective.days.filter(d => d.label || d.exercises.length).length} dias activos
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={() => onSelectShared(so)}
                      style={{ background: C.hi, border: `1px solid ${C.border}`, borderRadius: 8, padding: '6px 12px', fontSize: 11, color: C.muted, cursor: 'pointer' }}>
                      Editar
                    </button>
                    <button onClick={() => setDeleteConfirm(so)}
                      style={{ background: 'none', border: `1px solid ${C.danger}`, borderRadius: 8, padding: '6px 12px', fontSize: 11, color: C.danger, cursor: 'pointer' }}>
                      ✕
                    </button>
                  </div>
                </div>
              </Card>
            ))}

            <button onClick={() => handleCreateObjective(studentEmail)}
              style={{ marginLeft: 8, background: 'none', border: `1px dashed ${C.border}`, borderRadius: 12, padding: '10px 16px', fontSize: 12, color: C.muted, cursor: 'pointer', width: 'calc(100% - 8px)' }}>
              + Asignar nuevo objetivo
            </button>
          </div>
        ))}
      </div>

      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 20 }}
          onClick={() => setDeleteConfirm(null)}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, maxWidth: 320, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Eliminar objetivo</div>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>
              Eliminar <span style={{ color: C.text, fontWeight: 600 }}>{deleteConfirm.objective.name}</span> asignado a {deleteConfirm.studentEmail}?
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={() => setDeleteConfirm(null)} variant="ghost" style={{ flex: 1, padding: 12, borderRadius: 10 }}>Cancelar</Btn>
              <button onClick={() => { onDeleteShared(deleteConfirm.id); setDeleteConfirm(null) }}
                style={{ flex: 1, padding: 12, borderRadius: 10, background: C.danger, color: '#fff', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
