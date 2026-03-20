import { useState } from 'react'
import { A, C, SUBSCRIPTION_PLANS } from '../lib/constants'
import { fbSaveUserProfile } from '../lib/firebase'
import Card from '../components/Card'
import Btn from '../components/Btn'
import Input from '../components/Input'

export default function AccountView({ email, role, subscription, profile, onUpdateProfile, onLogout }) {
  const [editing, setEditing] = useState(false)
  const [fullName, setFullName] = useState(profile?.fullName || '')
  const [saving, setSaving] = useState(false)

  const plan = role === 'trainer' ? 'trainer' : 'athlete'
  const prices = SUBSCRIPTION_PLANS[plan]

  const handleSave = async () => {
    setSaving(true)
    const updated = { ...profile, fullName: fullName.trim() }
    await fbSaveUserProfile(updated)
    onUpdateProfile(updated)
    setEditing(false)
    setSaving(false)
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '-'
    return new Date(dateStr).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const statusLabel = {
    active: 'Activa',
    trial: 'Trial gratuito',
    expired: 'Vencida',
    none: 'Sin suscripcion'
  }

  const statusColor = {
    active: A,
    trial: '#FFD700',
    expired: C.danger,
    none: C.muted
  }

  const subStatus = subscription?.status || 'none'

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${A}22`, border: `2px solid ${A}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 32 }}>
          {(fullName || email || '?')[0].toUpperCase()}
        </div>
        <div style={{ fontSize: 20, fontWeight: 800 }}>{fullName || 'Sin nombre'}</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>{email}</div>
        <span style={{ fontSize: 10, color: A, fontWeight: 700, background: `${A}22`, padding: '2px 10px', borderRadius: 6, marginTop: 8, display: 'inline-block' }}>
          {role === 'admin' ? 'ADMIN' : role === 'trainer' ? 'TRAINER' : 'ATHLETE'}
        </span>
      </div>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px' }}>DATOS PERSONALES</div>
          {!editing && (
            <span onClick={() => setEditing(true)} style={{ fontSize: 12, color: A, cursor: 'pointer', fontWeight: 700 }}>Editar</span>
          )}
        </div>

        {editing ? (
          <div>
            <label style={{ fontSize: 12, color: C.muted, display: 'block', marginBottom: 4 }}>Nombre completo</label>
            <Input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Tu nombre completo" />
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <Btn onClick={handleSave} disabled={saving} style={{ flex: 1, padding: 10, fontSize: 13, borderRadius: 10 }}>
                {saving ? '...' : 'Guardar'}
              </Btn>
              <button onClick={() => { setEditing(false); setFullName(profile?.fullName || '') }}
                style={{ flex: 1, padding: 10, fontSize: 13, borderRadius: 10, background: C.hi, border: `1px solid ${C.border}`, color: C.text, cursor: 'pointer' }}>
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 13, color: C.muted }}>Nombre</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{fullName || '-'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 13, color: C.muted }}>Email</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{email}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
              <span style={{ fontSize: 13, color: C.muted }}>Rol</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{role === 'admin' ? 'Administrador' : role === 'trainer' ? 'Personal Trainer' : 'Atleta'}</span>
            </div>
            {profile?.phone && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 13, color: C.muted }}>Telefono</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{profile.phone.countryCode} {profile.phone.areaCode} {profile.phone.number}</span>
              </div>
            )}
          </div>
        )}
      </Card>

      <Card>
        <div style={{ fontSize: 10, color: C.muted, letterSpacing: '1px', marginBottom: 12 }}>SUSCRIPCION</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 13, color: C.muted }}>Estado</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: statusColor[subStatus] }}>{statusLabel[subStatus]}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 13, color: C.muted }}>Plan</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{prices.label}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 13, color: C.muted }}>Precio</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>${prices.ars.toLocaleString('es-AR')} ARS / ${prices.usd} USD</span>
        </div>
        {subscription?.startDate && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, color: C.muted }}>Inicio</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{formatDate(subscription.startDate)}</span>
          </div>
        )}
        {subscription?.trialEnd && subStatus === 'trial' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, color: C.muted }}>Fin del trial</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{formatDate(subscription.trialEnd)}</span>
          </div>
        )}
        {subscription?.renewalDate && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <span style={{ fontSize: 13, color: C.muted }}>Renovacion</span>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{formatDate(subscription.renewalDate)}</span>
          </div>
        )}
      </Card>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button onClick={onLogout}
          style={{ background: 'rgba(255,85,85,.1)', border: `1px solid ${C.danger}`, borderRadius: 12, padding: '12px 32px', fontSize: 14, fontWeight: 700, color: C.danger, cursor: 'pointer' }}>
          Cerrar sesion
        </button>
      </div>
    </div>
  )
}
