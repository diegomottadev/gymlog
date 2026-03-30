import { useState } from 'react'
import { A, C, STUDENT_COUNT_RANGES } from '../lib/constants'
import { fbSubmitTrainerRequestPublic } from '../lib/firebase'
import Btn from '../components/Btn'
import Input from '../components/Input'

export default function TrainerRegisterView({ onDone, onBack }) {
  const [fullName, setFullName] = useState('')
  const [countryCode, setCountryCode] = useState('+54')
  const [areaCode, setAreaCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [studentCount, setStudentCount] = useState(STUDENT_COUNT_RANGES[0])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handle = async () => {
    if (!fullName.trim() || !email) { setErr('Completá todos los campos obligatorios.'); return }
    setLoading(true); setErr('')
    try {
      await fbSubmitTrainerRequestPublic({
        email,
        fullName: fullName.trim(),
        phone: { countryCode, areaCode, number: phoneNumber },
        studentCount
      })
      setSubmitted(true)
    } catch (e) {
      setErr(e.message || 'Error al enviar solicitud.')
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Solicitud enviada</div>
        <div style={{ fontSize: 14, color: C.sub, marginBottom: 8, lineHeight: 1.5 }}>
          Tu solicitud como Personal Trainer fue enviada correctamente.
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: A, marginBottom: 20 }}>{email}</div>
        <div style={{ fontSize: 14, color: C.sub, marginBottom: 24, lineHeight: 1.5 }}>
          Cuando un administrador apruebe tu solicitud, recibirás un email con tus credenciales de acceso.
        </div>
        <span onClick={onBack}
          style={{ color: C.sub, cursor: 'pointer', fontSize: 14, marginTop: 8 }}>
          ← Volver al inicio de sesión
        </span>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh' }}>
      <div style={{ fontSize: 12, color: C.sub, letterSpacing: '2px', marginBottom: 24 }}>GYM TRACKER</div>
      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Registro Personal Trainer</div>
      <div style={{ fontSize: 14, color: C.sub, marginBottom: 24 }}>
        Completá tus datos para solicitar acceso como entrenador.
      </div>

      <label style={{ fontSize: 13, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>NOMBRE COMPLETO *</label>
      <Input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Tu nombre completo" />

      <label style={{ fontSize: 13, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>TELÉFONO</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={countryCode} onChange={e => setCountryCode(e.target.value)} placeholder="+54"
          style={{ width: 60, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 10px', color: C.text, fontSize: 14, outline: 'none' }} />
        <input value={areaCode} onChange={e => setAreaCode(e.target.value)} placeholder="11"
          style={{ width: 60, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 10px', color: C.text, fontSize: 14, outline: 'none' }} />
        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="12345678"
          style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 14px', color: C.text, fontSize: 14, outline: 'none' }} />
      </div>

      <label style={{ fontSize: 13, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>RANGO DE ALUMNOS</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {STUDENT_COUNT_RANGES.map(r => (
          <button key={r} onClick={() => setStudentCount(r)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              background: studentCount === r ? A : C.card, color: studentCount === r ? '#111' : '#fff',
              border: `1px solid ${studentCount === r ? A : C.border}`
            }}>{r}</button>
        ))}
      </div>

      <label style={{ fontSize: 13, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 6 }}>EMAIL *</label>
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" />

      {err && <div style={{ color: C.danger, fontSize: 14, marginBottom: 12, padding: '10px 14px', background: 'rgba(255,85,85,.1)', borderRadius: 10, border: `1px solid ${C.danger}` }}>{err}</div>}

      <Btn onClick={handle} disabled={loading} style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 12, marginTop: 4 }}>
        {loading ? '...' : 'Enviar solicitud →'}
      </Btn>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span onClick={onBack} style={{ color: C.sub, cursor: 'pointer', fontSize: 14 }}>
          ← Volver al inicio de sesión
        </span>
      </div>
    </div>
  )
}
