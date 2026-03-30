import { useState, useEffect } from 'react'
import { Dumbbell, Brain, MessageSquareX, TrendingDown, AppWindow, Calendar, BarChart3, Users, ChevronDown, ChevronUp, Zap, Shield, Bell, Quote, ArrowRight, Download } from 'lucide-react'
import { A, C } from '../lib/constants'

const PAIN_POINTS = [
  {
    icon: Brain,
    title: 'Llegás al gym y no sabés qué te toca',
    desc: 'Improvisás ejercicios, perdés tiempo mirando el celular y no seguís ningún plan real.',
    solution: 'Tu rutina del día lista al abrir la app. Sin pensar.'
  },
  {
    icon: TrendingDown,
    title: 'No sabés si estás progresando',
    desc: 'Sin registro de pesos, series ni repeticiones. Sentís que estás estancado hace meses.',
    solution: 'Historial completo con estadísticas semanales de tu progreso.'
  },
  {
    icon: MessageSquareX,
    title: 'La rutina se pierde en WhatsApp',
    desc: 'Tu entrenador te la manda por mensaje y tenés que scrollear 200 chats para encontrarla.',
    solution: 'Tu entrenador carga la rutina directo en tu app. Siempre actualizada.'
  },
  {
    icon: Zap,
    title: 'Empezás motivado y a las 2 semanas abandonás',
    desc: 'Sin seguimiento, sin recordatorios. Nadie te empuja. La motivación se esfuma.',
    solution: 'Frases motivacionales diarias, recordatorios y calendario de completación.'
  },
  {
    icon: AppWindow,
    title: 'Usás 3 apps y ninguna es simple',
    desc: 'Apps complicadas, llenas de funciones inútiles, con publicidad que interrumpe.',
    solution: 'Una sola app. Simple. Sin publicidad. Todo en un lugar.'
  }
]

const FEATURES = [
  { icon: Calendar, title: 'Calendario semanal', desc: 'Visualizá tu semana completa y marcá cada día como completado.' },
  { icon: Dumbbell, title: 'Rutinas personalizadas', desc: 'Creá tus propias rutinas o recibilas de tu entrenador.' },
  { icon: BarChart3, title: 'Estadísticas claras', desc: 'Tu progreso en números: series, repeticiones, peso, adherencia.' },
  { icon: Users, title: 'Conexión con tu entrenador', desc: 'Tu coach edita tu rutina y vos la ves al instante.' },
  { icon: Bell, title: 'Recordatorios', desc: 'Notificaciones para que no te saltees ningún día.' },
  { icon: Quote, title: 'Motivación diaria', desc: 'Frases de los mejores culturistas para arrancar cada día.' }
]

const FAQS = [
  { q: '¿Es gratis?', a: 'Tenés 3 días de prueba gratuita con acceso a todas las funcionalidades. Después podés elegir un plan mensual accesible.' },
  { q: '¿Funciona sin internet?', a: 'Sí. La app guarda tus datos localmente y sincroniza cuando tenés conexión.' },
  { q: '¿Mi entrenador puede usarla?', a: 'Sí. Hay un plan especial para entrenadores donde pueden gestionar las rutinas de todos sus alumnos.' },
  { q: '¿Puedo usarla en cualquier celular?', a: 'Sí. Es una app web progresiva (PWA) que funciona en cualquier navegador. Podés instalarla como app desde el menú del navegador.' },
  { q: '¿Mis datos están seguros?', a: 'Tus datos se guardan encriptados en Firebase (Google Cloud). Solo vos tenés acceso a tu cuenta.' }
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', background: 'none', border: 'none', color: C.text, cursor: 'pointer', fontSize: 15, fontWeight: 600, textAlign: 'left' }}>
        {q}
        {open ? <ChevronUp size={18} color={C.muted} /> : <ChevronDown size={18} color={C.muted} />}
      </button>
      {open && <div style={{ fontSize: 14, color: C.sub, paddingBottom: 16, lineHeight: 1.6 }}>{a}</div>}
    </div>
  )
}

export default function LandingView({ onStart }) {
  const [installPrompt, setInstallPrompt] = useState(null)
  const [installed, setInstalled] = useState(false)
  const [showInstallHelp, setShowInstallHelp] = useState(false)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => setInstalled(true))
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) setInstalled(true)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return
    installPrompt.prompt()
    const result = await installPrompt.userChoice
    if (result.outcome === 'accepted') setInstalled(true)
    setInstallPrompt(null)
  }

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: C.font, overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '48px 24px 40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{ background: `${A}15`, borderRadius: 12, padding: 16 }}>
            <Dumbbell size={40} color={A} />
          </div>
        </div>
        <div style={{ fontSize: 11, color: A, letterSpacing: '3px', fontWeight: 700, marginBottom: 12 }}>GYM TRACKER</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>
          Dejá de improvisar.<br />
          <span style={{ color: A }}>Empezá a progresar.</span>
        </h1>
        <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.6, marginBottom: 32, maxWidth: 360, margin: '0 auto 32px' }}>
          La app más simple para organizar tus rutinas, registrar tu progreso y no faltar nunca más al gym.
        </p>
        <button onClick={onStart}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: A, color: '#111', border: 'none', borderRadius: 12,
            padding: '16px 32px', fontSize: 17, fontWeight: 800, cursor: 'pointer',
            boxShadow: `0 0 30px ${A}33`
          }}>
          Probá gratis 3 días <ArrowRight size={18} />
        </button>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 12 }}>Sin tarjeta. Sin compromiso.</div>

        {!installed && (
          <button onClick={() => {
            if (installPrompt) {
              handleInstall()
            } else {
              setShowInstallHelp(true)
            }
          }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
              background: 'transparent', color: A, border: `1px solid ${A}55`, borderRadius: 12,
              padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer'
            }}>
            <Download size={16} /> Descargar app
          </button>
        )}
        {installed && (
          <div style={{ marginTop: 16, fontSize: 13, color: A, fontWeight: 600 }}>
            ✓ App instalada
          </div>
        )}
      </section>

      {/* PAIN POINTS */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ fontSize: 11, color: A, letterSpacing: '2px', fontWeight: 700, marginBottom: 8 }}>¿TE PASA ESTO?</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 32 }}>5 señales de que necesitás GymTracker</h2>

        {PAIN_POINTS.map((p, i) => (
          <div key={i} style={{ marginBottom: 24, padding: 20, background: C.card, borderRadius: 12, border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ background: `${A}15`, borderRadius: 10, padding: 10, flexShrink: 0 }}>
                <p.icon size={22} color={A} />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: C.sub, lineHeight: 1.5, marginBottom: 10 }}>{p.desc}</div>
                <div style={{ fontSize: 13, color: A, fontWeight: 600 }}>→ {p.solution}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ fontSize: 11, color: A, letterSpacing: '2px', fontWeight: 700, marginBottom: 8 }}>FUNCIONALIDADES</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 32 }}>Todo lo que necesitás, nada que no</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ padding: 16, background: C.card, borderRadius: 12, border: `1px solid ${C.border}` }}>
              <f.icon size={24} color={A} style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 48px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 900, color: A, fontFamily: 'monospace' }}>7</div>
            <div style={{ fontSize: 12, color: C.sub }}>Días de la semana cubiertos</div>
          </div>
          <div style={{ width: 1, background: C.border }} />
          <div>
            <div style={{ fontSize: 32, fontWeight: 900, color: A, fontFamily: 'monospace' }}>0</div>
            <div style={{ fontSize: 12, color: C.sub }}>Publicidad</div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ fontSize: 11, color: A, letterSpacing: '2px', fontWeight: 700, marginBottom: 8 }}>PLANES</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 32 }}>Simple y accesible</h2>

        {/* Trial */}
        <div style={{ padding: 24, background: `${A}10`, borderRadius: 12, border: `2px solid ${A}`, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Trial Gratuito</div>
              <div style={{ fontSize: 13, color: C.sub }}>3 días de acceso completo</div>
            </div>
            <div style={{ fontSize: 28, fontWeight: 900, color: A }}>$0</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
            {['Todas las funcionalidades', 'Sin tarjeta de crédito', 'Cancelá cuando quieras'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.sub }}>
                <Shield size={14} color={A} /> {t}
              </div>
            ))}
          </div>
          <button onClick={onStart}
            style={{
              width: '100%', background: A, color: '#111', border: 'none', borderRadius: 12,
              padding: '14px 0', fontSize: 16, fontWeight: 800, cursor: 'pointer'
            }}>
            Empezar gratis
          </button>
        </div>

        {/* Athlete */}
        <div style={{ padding: 24, background: C.card, borderRadius: 12, border: `1px solid ${C.border}`, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>Plan Athlete</div>
              <div style={{ fontSize: 13, color: C.sub }}>Para entrenar en serio</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: A }}>$5.000<span style={{ fontSize: 13, fontWeight: 500 }}>/mes</span></div>
              <div style={{ fontSize: 11, color: C.muted }}>o USD $3/mes</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
            {['Rutinas ilimitadas', 'Calendario de entrenamientos', 'Estadísticas detalladas', 'Recordatorios diarios', 'Sincronización en la nube'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.sub }}>
                <Shield size={14} color={A} /> {t}
              </div>
            ))}
          </div>
          <button onClick={onStart}
            style={{
              width: '100%', background: C.hi, color: C.text, border: `1px solid ${C.border}`, borderRadius: 12,
              padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer'
            }}>
            Empezar con trial gratis
          </button>
        </div>

        {/* Trainer */}
        <div style={{ padding: 24, background: C.card, borderRadius: 12, border: `1px solid ${C.border}` }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Plan Trainer</div>
            <div style={{ fontSize: 13, color: C.sub }}>Para entrenadores y coaches</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
            {['Gestión de alumnos ilimitados', 'Asigná rutinas a cada alumno', 'Seguimiento de progreso en tiempo real', 'Todo lo del Plan Athlete incluido'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.sub }}>
                <Shield size={14} color={A} /> {t}
              </div>
            ))}
          </div>
          <a href="https://wa.me/543764278402?text=Hola%2C%20quiero%20consultar%20por%20el%20Plan%20Trainer%20de%20GymTracker"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'block', width: '100%', background: C.hi, color: A, border: `1px solid ${A}55`, borderRadius: 12,
              padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'none'
            }}>
            Consultar
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ fontSize: 11, color: A, letterSpacing: '2px', fontWeight: 700, marginBottom: 8 }}>PREGUNTAS FRECUENTES</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>¿Dudas?</h2>
        {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: 480, margin: '0 auto', padding: '0 24px 64px', textAlign: 'center' }}>
        <div style={{ padding: 32, background: `${A}10`, borderRadius: 12, border: `1px solid ${A}33` }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>¿Listo para dejar de improvisar?</h2>
          <p style={{ fontSize: 14, color: C.sub, marginBottom: 24 }}>Empezá hoy. 3 días gratis. Sin excusas.</p>
          <button onClick={onStart}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: A, color: '#111', border: 'none', borderRadius: 12,
              padding: '16px 32px', fontSize: 17, fontWeight: 800, cursor: 'pointer'
            }}>
            Crear mi cuenta gratis <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ maxWidth: 480, margin: '0 auto', padding: '24px', borderTop: `1px solid ${C.border}`, textAlign: 'center' }}>
        <div style={{ fontSize: 11, color: C.muted, letterSpacing: '2px' }}>GYM TRACKER</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>© 2026 · Hecho para los que entrenan en serio.</div>
      </footer>

      {/* Install help modal */}
      {showInstallHelp && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: 24 }}
          onClick={() => setShowInstallHelp(false)}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, maxWidth: 340, width: '100%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Instalar GymTracker</div>
            {isIOS ? (
              <div>
                <div style={{ fontSize: 14, color: C.sub, lineHeight: 1.6, marginBottom: 12 }}>
                  En tu iPhone/iPad seguí estos pasos:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>1</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Tocá el botón <strong style={{ color: C.text }}>Compartir</strong> (el cuadrado con flecha hacia arriba)</div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>2</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Buscá y tocá <strong style={{ color: C.text }}>Agregar a pantalla de inicio</strong></div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>3</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Tocá <strong style={{ color: C.text }}>Agregar</strong> y listo</div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 14, color: C.sub, lineHeight: 1.6, marginBottom: 12 }}>
                  En tu celular seguí estos pasos:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>1</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Tocá el menú <strong style={{ color: C.text }}>⋮</strong> (tres puntos arriba a la derecha)</div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>2</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Tocá <strong style={{ color: C.text }}>Agregar a pantalla de inicio</strong></div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ background: A, color: '#111', borderRadius: 8, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>3</div>
                    <div style={{ fontSize: 14, color: C.sub }}>Tocá <strong style={{ color: C.text }}>Agregar</strong> y listo</div>
                  </div>
                </div>
              </div>
            )}
            <button onClick={() => setShowInstallHelp(false)}
              style={{
                width: '100%', marginTop: 20, background: A, color: '#111', border: 'none', borderRadius: 12,
                padding: '12px 0', fontSize: 15, fontWeight: 700, cursor: 'pointer'
              }}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
