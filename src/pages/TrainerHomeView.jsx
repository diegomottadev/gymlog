import { useMemo } from 'react'
import { Users } from 'lucide-react'
import { A, C } from '../lib/constants'
import { getWeekRange } from '../lib/helpers'
import Card from '../components/Card'

export default function TrainerHomeView({ sharedObjectives, onSelectStudent }) {
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const studentStats = useMemo(() => {
    const map = {}
    sharedObjectives.forEach(so => {
      const email = so.studentEmail
      if (!map[email]) map[email] = { email, objectives: [], totalActiveDays: 0, weekCompletions: 0, lastActivity: null }
      map[email].objectives.push(so)
      const activeDays = so.objective.days.filter(d => d.label || d.exercises.length).length
      map[email].totalActiveDays += activeDays
      const completions = so.completions || []
      const weekDone = completions.filter(c => c.date >= mon && c.date <= sun).length
      map[email].weekCompletions += weekDone
      completions.forEach(c => {
        if (!map[email].lastActivity || c.date > map[email].lastActivity) map[email].lastActivity = c.date
      })
    })
    return Object.values(map).sort((a, b) => a.email.localeCompare(b.email))
  }, [sharedObjectives, mon, sun])

  const totalStudents = studentStats.length
  const totalRoutines = sharedObjectives.length
  const totalWeekCompletions = studentStats.reduce((t, s) => t + s.weekCompletions, 0)

  const formatLastActivity = (date) => {
    if (!date) return 'Sin actividad'
    const d = new Date(date + 'T12:00:00')
    const now = new Date()
    const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Ayer'
    if (diffDays < 7) return `Hace ${diffDays} dias`
    return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })
  }

  return (
    <div>
      <div style={{ padding: '24px 8px 8px' }}>
        <div style={{ fontSize: 26, fontWeight: 800 }}>Inicio</div>
      </div>

      <div style={{ padding: '0 8px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '1px' }}>ALUMNOS</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{totalStudents}</div>
        </Card>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '1px' }}>RUTINAS</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{totalRoutines}</div>
        </Card>
        <Card style={{ marginBottom: 0, textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '1px' }}>SEMANA</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{totalWeekCompletions}</div>
        </Card>
      </div>

      <div style={{ padding: '8px 8px 8px' }}>
        <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 10 }}>ALUMNOS</div>

        {studentStats.length === 0 && (
          <div style={{ textAlign: 'center', padding: 48 }}>
            <Users size={32} color={C.muted} style={{ marginBottom: 12 }} />
            <div style={{ fontSize: 14, color: C.muted, marginBottom: 4 }}>Sin alumnos todavia</div>
            <div style={{ fontSize: 12, color: C.muted }}>Anda a la pestaña Alumnos para agregar</div>
          </div>
        )}

        {studentStats.map(student => {
          const adherence = student.totalActiveDays > 0
            ? Math.min(100, Math.round((student.weekCompletions / student.totalActiveDays) * 100))
            : 0
          return (
            <Card key={student.email} onClick={() => onSelectStudent(student.email)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{student.email}</div>
                  <div style={{ fontSize: 12, color: C.sub }}>
                    {student.objectives.length} rutina{student.objectives.length !== 1 ? 's' : ''} · {formatLastActivity(student.lastActivity)}
                  </div>
                </div>
                <div style={{ textAlign: 'center', minWidth: 50 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, fontFamily: 'monospace', color: adherence >= 80 ? A : adherence >= 40 ? '#FFD700' : C.text }}>{adherence}%</div>
                  <div style={{ fontSize: 9, color: C.muted }}>semana</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
