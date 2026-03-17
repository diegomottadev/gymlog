import { useState, useEffect } from 'react'
import { A, C } from '../lib/constants'
import { fbSignIn, fbRegister, fbResendVerification, fbReloadUser, fbSignOut } from '../lib/firebase'
import Btn from '../components/Btn'
import Input from '../components/Input'

export default function LoginView({ onDone }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [resent, setResent] = useState(false)

  // Poll for email verification
  useEffect(() => {
    if (!verifying) return
    const interval = setInterval(async () => {
      const user = await fbReloadUser()
      if (user && user.emailVerified) {
        setVerifying(false)
        onDone()
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [verifying, onDone])

  const handle = async () => {
    if (!email || !pass) { setErr('Completá email y contraseña.'); return }
    if (pass.length < 6) { setErr('La contraseña debe tener al menos 6 caracteres.'); return }
    setLoading(true); setErr('')
    try {
      if (mode === 'login') {
        await fbSignIn(email, pass)
        onDone()
      } else {
        await fbRegister(email, pass)
        setVerifying(true)
      }
    } catch (e) {
      const msgs = {
        'auth/user-not-found': 'Usuario no encontrado. ¿Querés registrarte?',
        'auth/wrong-password': 'Contraseña incorrecta.',
        'auth/email-already-in-use': 'Ese email ya está registrado.',
        'auth/invalid-email': 'Email inválido.',
        'auth/invalid-credential': 'Email o contraseña incorrectos.'
      }
      setErr(msgs[e.code] || e.message)
    }
    setLoading(false)
  }

  const handleResend = async () => {
    try {
      await fbResendVerification()
      setResent(true)
      setTimeout(() => setResent(false), 5000)
    } catch (e) {
      setErr('Error al reenviar. Intentá de nuevo en unos minutos.')
    }
  }

  const handleBackToLogin = async () => {
    await fbSignOut()
    setVerifying(false)
    setMode('login')
    setEmail('')
    setPass('')
    setErr('')
  }

  if (verifying) {
    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>📧</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Verificá tu email</div>
        <div style={{ fontSize: 14, color: C.muted, marginBottom: 8, lineHeight: 1.5 }}>
          Enviamos un link de verificación a
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: A, marginBottom: 20 }}>{email}</div>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 24, lineHeight: 1.5 }}>
          Abrí tu correo y hacé clic en el link. Esta página se actualizará automáticamente.
        </div>

        {resent && (
          <div style={{ color: A, fontSize: 13, marginBottom: 16, padding: '10px 14px', background: `${A}22`, borderRadius: 10, border: `1px solid ${A}44` }}>
            Email reenviado correctamente
          </div>
        )}

        <Btn onClick={handleResend} variant="ghost" style={{ padding: '12px 24px', borderRadius: 12, marginBottom: 12, fontSize: 14 }}>
          Reenviar email
        </Btn>

        <span onClick={handleBackToLogin}
          style={{ color: C.muted, cursor: 'pointer', fontSize: 13, marginTop: 8 }}>
          ← Volver al inicio de sesión
        </span>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 20px', minHeight: '100vh' }}>
      <div style={{ fontSize: 10, color: C.muted, letterSpacing: '2px', marginBottom: 24 }}>GYM TRACKER</div>
      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
        {mode === 'login' ? 'Iniciar sesión 💪' : 'Crear cuenta 💪'}
      </div>
      <div style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>
        Tus entrenamientos sincronizados en todos tus dispositivos.
      </div>
      <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>EMAIL</label>
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" />
      <label style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', display: 'block', marginBottom: 4 }}>CONTRASEÑA</label>
      <Input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="mínimo 6 caracteres" />
      {err && <div style={{ color: C.danger, fontSize: 13, marginBottom: 12, padding: '10px 14px', background: 'rgba(255,85,85,.1)', borderRadius: 10, border: `1px solid ${C.danger}` }}>{err}</div>}
      <Btn onClick={handle} disabled={loading} style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 14, marginTop: 4 }}>
        {loading ? '...' : (mode === 'login' ? 'Entrar →' : 'Crear cuenta →')}
      </Btn>
      <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: C.muted }}>
        {mode === 'login' ? '¿No tenés cuenta? ' : '¿Ya tenés cuenta? '}
        <span onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setErr('') }}
          style={{ color: A, cursor: 'pointer', fontWeight: 700 }}>
          {mode === 'login' ? 'Registrate' : 'Iniciá sesión'}
        </span>
      </div>
    </div>
  )
}
