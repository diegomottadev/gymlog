import { useState, useEffect } from 'react'
import { Users, Dumbbell, Target, Inbox } from 'lucide-react'
import { A, C, FUNCTIONS_URL } from '../lib/constants'
import { fbLoadPendingRequests, fbLoadTrainers } from '../lib/firebase'
import Card from '../components/Card'

export default function AdminHomeView({ adminEmail }) {
  const [athletes, setAthletes] = useState([])
  const [pendingRequests, setPendingRequests] = useState(0)
  const [trainerCount, setTrainerCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const [athRes, reqs, trainers] = await Promise.all([
        fetch(`${FUNCTIONS_URL}/listAthletes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ adminEmail })
        }).then(r => r.json()).catch(() => ({ athletes: [] })),
        fbLoadPendingRequests(),
        fbLoadTrainers()
      ])
      setAthletes(athRes.athletes || [])
      setPendingRequests(reqs.length)
      setTrainerCount(trainers.filter(t => t.active !== false).length)
      setLoading(false)
    }
    load()
  }, [adminEmail])

  const totalAthletes = athletes.length
  const totalActiveRoutines = athletes.reduce((sum, a) => sum + (a.objectiveCount || 0), 0)

  const stats = [
    { label: 'Alumnos', value: totalAthletes, Icon: Users },
    { label: 'Trainers', value: trainerCount, Icon: Dumbbell },
    { label: 'Rutinas activas', value: totalActiveRoutines, Icon: Target },
    { label: 'Solicitudes', value: pendingRequests, Icon: Inbox, highlight: pendingRequests > 0 }
  ]

  return (
    <div>
      <div style={{ padding: '24px 8px 8px' }}>
        <div style={{ fontSize: 26, fontWeight: 800 }}>Inicio</div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 48, color: C.muted }}>Cargando...</div>
      ) : (
        <div style={{ padding: '0 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {stats.map(s => (
            <Card key={s.label} style={{ marginBottom: 0, textAlign: 'center', padding: '16px 8px', border: s.highlight ? `1px solid ${A}66` : undefined }}>
              <s.Icon size={20} color={s.highlight ? A : C.muted} style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: s.highlight ? A : C.text }}>{s.value}</div>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', marginTop: 4 }}>{s.label.toUpperCase()}</div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
