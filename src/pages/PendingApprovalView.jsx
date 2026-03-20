import { useState, useEffect } from 'react'
import { A, C } from '../lib/constants'
import { fbLoadTrainerRequest, fbSignOut } from '../lib/firebase'
import Btn from '../components/Btn'

export default function PendingApprovalView({ onApproved, onLogout }) {
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    const interval = setInterval(async () => {
      const req = await fbLoadTrainerRequest()
      if (req && req.status === 'approved') {
        setStatus('approved')
        clearInterval(interval)
        onApproved()
      } else if (req && req.status === 'rejected') {
        setStatus('rejected')
        clearInterval(interval)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [onApproved])

  const handleLogout = async () => {
    await fbSignOut()
    onLogout()
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      {status === 'pending' && <>
        <div style={{ fontSize: 48, marginBottom: 20 }}>⏳</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Solicitud en revision</div>
        <div style={{ fontSize: 14, color: C.muted, marginBottom: 8, lineHeight: 1.5 }}>
          Tu solicitud como Personal Trainer esta siendo revisada por un administrador.
        </div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 24, lineHeight: 1.5 }}>
          Esta pagina se actualizara automaticamente cuando sea aprobada.
        </div>
        <div style={{ width: 40, height: 40, border: `3px solid ${C.border}`, borderTopColor: A, borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: 24 }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </>}

      {status === 'rejected' && <>
        <div style={{ fontSize: 48, marginBottom: 20 }}>❌</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Solicitud rechazada</div>
        <div style={{ fontSize: 14, color: C.muted, marginBottom: 24, lineHeight: 1.5 }}>
          Tu solicitud como Personal Trainer fue rechazada. Contacta al administrador para mas informacion.
        </div>
      </>}

      <Btn onClick={handleLogout} variant="ghost" style={{ padding: '12px 24px', borderRadius: 12, fontSize: 14 }}>
        Cerrar sesion
      </Btn>
    </div>
  )
}
