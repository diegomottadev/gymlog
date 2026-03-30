import { useState, useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { createEmptyObjective, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'
import Btn from '../components/Btn'

export default function StudentDetailView({ studentEmail, sharedObjectives, trainerEmail, onSaveShared, onDeleteShared, onSelectShared, onBack }) {
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const studentObjectives = useMemo(() => {
    return sharedObjectives.filter(so => so.studentEmail === studentEmail)
  }, [sharedObjectives, studentEmail])

  const totalActiveDays = useMemo(() => {
    return studentObjectives.reduce((t, so) => t + so.objective.days.filter(d => d.label || d.exercises.length).length, 0)
  }, [studentObjectives])

  const weekCompletions = useMemo(() => {
    return studentObjectives.reduce((t, so) => {
      const completions = so.completions || []
      return t + completions.filter(c => c.date >= mon && c.date <= sun).length
    }, 0)
  }, [studentObjectives, mon, sun])

  const totalCompletions = useMemo(() => {
    return studentObjectives.reduce((t, so) => t + (so.completions || []).length, 0)
  }, [studentObjectives])

  const adherence = totalActiveDays > 0 ? Math.min(100, Math.round((weekCompletions / totalActiveDays) * 100)) : 0

  const weekDays = useMemo(() => {
    const monDate = new Date(mon + 'T12:00:00')
    const allCompletions = studentObjectives.flatMap(so => so.completions || [])
    const weekComps = allCompletions.filter(c => c.date >= mon && c.date <= sun)
    const days = []
    for (let i = 0; i < 7; i++) {
      const dt = new Date(monDate); dt.setDate(monDate.getDate() + i)
      const done = weekComps.some(c => c.dayIndex === i)
      days.push({ day: dt.toLocaleDateString('es-AR', { weekday: 'short' }).slice(0, 3), done })
    }
    return days
  }, [studentObjectives, mon, sun])

  const handleCreateObjective = async () => {
    const obj = createEmptyObjective('Nueva rutina')
    await onSaveShared({ trainerEmail, studentEmail, objective: obj })
  }

  return (
    <div>
      <BackHeader onBack={onBack} title={studentEmail} />

      <div style={{ padding: '0 8px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 9, color: C.sub, letterSpacing: '1px' }}>ADHERENCIA</div>
          <div style={{ fontSize: 24, fontWeight: 900, fontFamily: 'monospace', color: adherence >= 80 ? A : adherence >= 40 ? '#FFD700' : C.text, marginTop: 4 }}>{adherence}%</div>
        </Card>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 9, color: C.sub, letterSpacing: '1px' }}>SEMANA</div>
          <div style={{ fontSize: 24, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{weekCompletions}<span style={{ fontSize: 12 }}>/{totalActiveDays}</span></div>
        </Card>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 9, color: C.sub, letterSpacing: '1px' }}>TOTAL</div>
          <div style={{ fontSize: 24, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{totalCompletions}</div>
        </Card>
      </div>

      <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>ACTIVIDAD SEMANAL</div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 48 }}>
            {weekDays.map((d, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', borderRadius: 4, background: d.done ? A : C.hi, height: d.done ? 36 : 4, transition: 'height .3s' }} />
                <div style={{ fontSize: 10, color: d.done ? A : '#fff', fontWeight: d.done ? 700 : 400 }}>{d.day}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 8px 8px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 10 }}>RUTINAS ASIGNADAS</div>

        {studentObjectives.map(so => {
          const activeDays = so.objective.days.filter(d => d.label || d.exercises.length).length
          const soCompletions = (so.completions || []).filter(c => c.date >= mon && c.date <= sun).length
          return (
            <Card key={so.id} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div onClick={() => onSelectShared(so)} style={{ flex: 1, cursor: 'pointer' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{so.objective.name}</div>
                  <div style={{ fontSize: 12, color: C.sub }}>{activeDays} dias · {soCompletions}/{activeDays} esta semana</div>
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
          )
        })}

        <button onClick={handleCreateObjective}
          style={{ background: 'none', border: `1px dashed ${C.border}`, borderRadius: 12, padding: '12px 16px', fontSize: 13, color: C.muted, cursor: 'pointer', width: '100%' }}>
          + Asignar nuevo objetivo
        </button>
      </div>

      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 20 }}
          onClick={() => setDeleteConfirm(null)}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, maxWidth: 320, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Eliminar objetivo</div>
            <div style={{ fontSize: 13, color: C.sub, marginBottom: 20 }}>
              Esto eliminara <span style={{ color: A, fontWeight: 600 }}>{deleteConfirm.objective.name}</span> y todas las completions del alumno. Esta accion no se puede deshacer.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={() => setDeleteConfirm(null)} variant="ghost" style={{ flex: 1, padding: 12, borderRadius: 10 }}>Cancelar</Btn>
              <button onClick={() => { onDeleteShared(deleteConfirm.id); setDeleteConfirm(null) }}
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
