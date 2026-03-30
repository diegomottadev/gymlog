import { useState } from 'react'
import { A, C, FUNCTIONS_URL, SUBSCRIPTION_PLANS } from '../lib/constants'
import Card from '../components/Card'
import Btn from '../components/Btn'

export default function SubscriptionView({ uid, email, role, subscription, onLogout, onBack }) {
  const [loading, setLoading] = useState(null)
  const [err, setErr] = useState('')

  const plan = role === 'trainer' ? 'trainer' : 'athlete'
  const prices = SUBSCRIPTION_PLANS[plan]

  const trialDaysLeft = subscription && subscription.status === 'trial' && subscription.trialEnd
    ? Math.max(0, Math.ceil((new Date(subscription.trialEnd) - new Date()) / (1000 * 60 * 60 * 24)))
    : 0

  const handleMercadoPago = async () => {
    setLoading('mp'); setErr('')
    try {
      const res = await fetch(`${FUNCTIONS_URL}/createMPSubscription`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, email, plan })
      })
      const data = await res.json()
      if (data.init_point) {
        window.location.href = data.init_point
      } else {
        setErr(data.error || 'Error al crear suscripcion')
      }
    } catch (e) {
      setErr('Error de conexion. Intenta de nuevo.')
    }
    setLoading(null)
  }

  const handleStripe = async () => {
    setLoading('stripe'); setErr('')
    try {
      const res = await fetch(`${FUNCTIONS_URL}/createStripeCheckout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, email, plan })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setErr(data.error || 'Error al crear suscripcion')
      }
    } catch (e) {
      setErr('Error de conexion. Intenta de nuevo.')
    }
    setLoading(null)
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 10, color: C.muted, letterSpacing: '2px', marginBottom: 8 }}>GYM TRACKER</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Suscripcion</div>

        {subscription && subscription.status === 'trial' && trialDaysLeft > 0 && (
          <div style={{ padding: '12px 16px', background: `${A}22`, border: `1px solid ${A}44`, borderRadius: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: A }}>Trial gratuito</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
              Te quedan <span style={{ color: A, fontWeight: 700 }}>{trialDaysLeft} dia{trialDaysLeft !== 1 ? 's' : ''}</span> de prueba
            </div>
          </div>
        )}

        {subscription && subscription.status === 'expired' && (
          <div style={{ padding: '12px 16px', background: 'rgba(255,85,85,.1)', border: `1px solid ${C.danger}`, borderRadius: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.danger }}>Suscripcion vencida</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
              Suscribite para seguir usando la app
            </div>
          </div>
        )}
      </div>

      <Card style={{ border: `1px solid ${A}33`, marginBottom: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: C.sub, letterSpacing: '1px', marginBottom: 4 }}>PLAN {prices.label.toUpperCase()}</div>
          <div style={{ fontSize: 14, color: C.sub, marginBottom: 16 }}>Acceso completo a todas las funcionalidades</div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, textAlign: 'center', padding: 16, background: C.hi, borderRadius: 12, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 8 }}>ARGENTINA</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: A, fontFamily: 'monospace' }}>
              ${prices.ars.toLocaleString('es-AR')}
            </div>
            <div style={{ fontSize: 12, color: C.sub }}>ARS / mes</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center', padding: 16, background: C.hi, borderRadius: 12, border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 8 }}>INTERNACIONAL</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: A, fontFamily: 'monospace' }}>
              ${prices.usd}
            </div>
            <div style={{ fontSize: 12, color: C.sub }}>USD / mes</div>
          </div>
        </div>

        {err && <div style={{ color: C.danger, fontSize: 12, marginBottom: 12, padding: '10px 14px', background: 'rgba(255,85,85,.1)', borderRadius: 10, border: `1px solid ${C.danger}` }}>{err}</div>}

        <Btn onClick={handleMercadoPago} disabled={loading === 'mp'}
          style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 12, marginBottom: 10 }}>
          {loading === 'mp' ? 'Redirigiendo...' : 'Pagar con Mercado Pago (ARS)'}
        </Btn>

        <button onClick={handleStripe} disabled={loading === 'stripe'}
          style={{
            width: '100%', padding: 14, fontSize: 15, borderRadius: 12, cursor: 'pointer',
            background: '#635BFF', color: '#fff', border: 'none', fontWeight: 700,
            opacity: loading === 'stripe' ? 0.6 : 1
          }}>
          {loading === 'stripe' ? 'Redirigiendo...' : 'Pay with Stripe (USD)'}
        </button>
      </Card>

      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {onBack && (
          <span onClick={onBack} style={{ color: A, cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>
            ← Volver
          </span>
        )}
      </div>
    </div>
  )
}
