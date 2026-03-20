import { useState, useEffect } from 'react'
import { A, C, FUNCTIONS_URL } from '../lib/constants'
import { fbLoadPendingRequests, fbRejectRequest } from '../lib/firebase'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function AdminView() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(null)
  const [message, setMessage] = useState(null)

  const load = async () => {
    setLoading(true)
    const reqs = await fbLoadPendingRequests()
    setRequests(reqs)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleApprove = async (requestId) => {
    setActionLoading(requestId)
    setMessage(null)
    try {
      const res = await fetch(`${FUNCTIONS_URL}/approveTrainer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId })
      })
      const data = await res.json()
      if (data.success) {
        setRequests(prev => prev.filter(r => r.id !== requestId))
        setMessage({ type: 'success', text: 'Trainer aprobado. Se envió email con credenciales.' })
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al aprobar' })
      }
    } catch (e) {
      setMessage({ type: 'error', text: e.message })
    }
    setActionLoading(null)
  }

  const handleReject = async (requestId) => {
    setActionLoading(requestId)
    await fbRejectRequest(requestId)
    setRequests(prev => prev.filter(r => r.id !== requestId))
    setActionLoading(null)
  }

  return (
    <div>
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{ fontSize: 12, color: '#fff', letterSpacing: '2px', marginBottom: 6 }}>ADMINISTRACIÓN</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Solicitudes pendientes</div>
      </div>

      {message && (
        <div style={{ padding: '0 20px 8px' }}>
          <div style={{
            padding: '12px 16px', borderRadius: 10, fontSize: 14,
            background: message.type === 'success' ? `${A}22` : 'rgba(255,85,85,.1)',
            color: message.type === 'success' ? A : C.danger,
            border: `1px solid ${message.type === 'success' ? A + '44' : C.danger}`
          }}>{message.text}</div>
        </div>
      )}

      <div style={{ padding: '0 20px' }}>
        {loading && <div style={{ textAlign: 'center', padding: 40, color: '#fff' }}>Cargando...</div>}

        {!loading && requests.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
            <div style={{ fontSize: 14, color: '#fff' }}>No hay solicitudes pendientes</div>
          </div>
        )}

        {requests.map(req => (
          <Card key={req.id}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{req.fullName}</div>
              <div style={{ fontSize: 14, color: A, marginBottom: 2 }}>{req.email}</div>
              {req.phone && (
                <div style={{ fontSize: 13, color: '#fff' }}>
                  Tel: {req.phone.countryCode} {req.phone.areaCode} {req.phone.number}
                </div>
              )}
              <div style={{ fontSize: 13, color: '#fff', marginTop: 4 }}>
                Alumnos: {req.studentCount}
              </div>
              <div style={{ fontSize: 12, color: '#fff', marginTop: 4 }}>
                {new Date(req.createdAt).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={() => handleApprove(req.id)} disabled={actionLoading === req.id}
                style={{ flex: 1, padding: 12, borderRadius: 10 }}>
                {actionLoading === req.id ? '...' : 'Aprobar'}
              </Btn>
              <button onClick={() => handleReject(req.id)} disabled={actionLoading === req.id}
                style={{ flex: 1, padding: 12, borderRadius: 10, background: C.danger, color: '#fff', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer', opacity: actionLoading === req.id ? 0.5 : 1 }}>
                {actionLoading === req.id ? '...' : 'Rechazar'}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
