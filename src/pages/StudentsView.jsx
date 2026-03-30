import { useState, useMemo } from 'react'
import { Check } from 'lucide-react'
import { A, C, FUNCTIONS_URL } from '../lib/constants'
import { createEmptyObjective, getWeekRange } from '../lib/helpers'
import Card from '../components/Card'
import Btn from '../components/Btn'
import Input from '../components/Input'

const GOALS = ['Hipertrofia', 'Pérdida de grasa', 'Fuerza', 'Resistencia', 'Tonificación', 'Rehabilitación', 'Otro']
const LEVELS = ['Principiante', 'Intermedio', 'Avanzado']
const FREQ_OPTIONS = ['1-2', '3-4', '5-6', '7']

export default function StudentsView({ sharedObjectives, trainerEmail, onSaveShared, onDeleteShared, onSelectStudent }) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    email: '', dni: '', fullName: '', age: '', weight: '', height: '',
    goal: '', level: '', frequency: '', injuries: '', medications: '',
    medicalConditions: '', previousExperience: '', availability: '', notes: ''
  })
  const [err, setErr] = useState('')
  const [adding, setAdding] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const { mon, sun } = useMemo(() => getWeekRange(), [])

  const studentStats = useMemo(() => {
    const map = {}
    sharedObjectives.forEach(so => {
      const email = so.studentEmail
      if (!map[email]) map[email] = { email, objectives: [], totalActiveDays: 0, weekCompletions: 0, lastActivity: null, profile: so.studentProfile || null }
      map[email].objectives.push(so)
      const activeDays = so.objective.days.filter(d => d.label || d.exercises.length).length
      map[email].totalActiveDays += activeDays
      const completions = so.completions || []
      map[email].weekCompletions += completions.filter(c => c.date >= mon && c.date <= sun).length
      completions.forEach(c => {
        if (!map[email].lastActivity || c.date > map[email].lastActivity) map[email].lastActivity = c.date
      })
      if (so.studentProfile && !map[email].profile) map[email].profile = so.studentProfile
    })
    return Object.values(map).sort((a, b) => a.email.localeCompare(b.email))
  }, [sharedObjectives, mon, sun])

  const updateField = (field, value) => setForm(p => ({ ...p, [field]: value }))

  const handleAddStudent = async () => {
    const email = form.email.trim().toLowerCase()
    if (!email || !email.includes('@')) { setErr('El email es obligatorio.'); return }
    if (!form.dni.trim()) { setErr('El DNI es obligatorio.'); return }
    setErr(''); setAdding(true); setSuccessMsg('')
    try {
      const studentProfile = {
        dni: form.dni.trim(),
        fullName: form.fullName.trim(),
        age: form.age,
        weight: form.weight,
        height: form.height,
        goal: form.goal,
        level: form.level,
        frequency: form.frequency,
        injuries: form.injuries.trim(),
        medications: form.medications.trim(),
        medicalConditions: form.medicalConditions.trim(),
        previousExperience: form.previousExperience.trim(),
        availability: form.availability.trim(),
        notes: form.notes.trim()
      }
      const obj = createEmptyObjective('Nueva rutina')
      await onSaveShared({ trainerEmail, studentEmail: email, objective: obj, studentProfile })

      // Register student account and send welcome email
      try {
        const res = await fetch(`${FUNCTIONS_URL}/registerStudent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentEmail: email, trainerEmail, trainerName: form.fullName.trim() || trainerEmail })
        })
        const data = await res.json()
        if (data.success) {
          setSuccessMsg(data.isNew
            ? `Cuenta creada y email enviado a ${email}`
            : `Rutina asignada y notificacion enviada a ${email}`)
          setTimeout(() => setSuccessMsg(''), 5000)
        }
      } catch (e) {
        console.error('registerStudent email error:', e)
      }

      setForm({ email: '', dni: '', fullName: '', age: '', weight: '', height: '', goal: '', level: '', frequency: '', injuries: '', medications: '', medicalConditions: '', previousExperience: '', availability: '', notes: '' })
      setShowForm(false)
    } catch (e) {
      setErr(e.message || 'Error al agregar alumno.')
    }
    setAdding(false)
  }

  const formatLastActivity = (date) => {
    if (!date) return 'Sin actividad'
    const d = new Date(date + 'T12:00:00')
    const now = new Date()
    const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Hoy'
    if (diffDays === 1) return 'Ayer'
    if (diffDays < 7) return `Hace ${diffDays} días`
    return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })
  }

  const inputStyle = { width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 14px', color: C.text, fontSize: 14, outline: 'none', marginBottom: 12 }
  const labelStyle = { fontSize: 12, color: C.sub, letterSpacing: '1px', display: 'block', marginBottom: 4, fontWeight: 700 }

  return (
    <div>
      <div style={{ padding: '24px 8px 8px' }}>
        <div style={{ fontSize: 12, color: C.sub, letterSpacing: '2px', marginBottom: 6 }}>PERSONAL TRAINER</div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>Mis Alumnos</div>
      </div>

      {!showForm && (
        <div style={{ padding: '0 8px 16px' }}>
          <Btn onClick={() => setShowForm(true)} style={{ width: '100%', padding: 14, fontSize: 15, borderRadius: 12 }}>
            + Agregar alumno
          </Btn>
        </div>
      )}

      {/* Student intake form */}
      {showForm && (
        <div style={{ padding: '0 8px 16px' }}>
          <Card style={{ border: `1px solid ${A}` }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: A }}>Ficha del alumno</div>
            <div style={{ fontSize: 13, color: C.sub, marginBottom: 16 }}>Completá los datos para conocer mejor a tu alumno.</div>

            {/* Required fields */}
            <div style={{ background: `${A}11`, border: `1px solid ${A}33`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: '1px', marginBottom: 10 }}>DATOS OBLIGATORIOS</div>
              <label style={labelStyle}>EMAIL *</label>
              <input value={form.email} onChange={e => updateField('email', e.target.value)} placeholder="alumno@email.com" style={inputStyle} />
              <label style={labelStyle}>DNI *</label>
              <input value={form.dni} onChange={e => updateField('dni', e.target.value)} placeholder="12345678" style={inputStyle} />
            </div>

            {/* Personal info */}
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '1px', marginBottom: 10 }}>DATOS PERSONALES</div>
            <label style={labelStyle}>NOMBRE COMPLETO</label>
            <input value={form.fullName} onChange={e => updateField('fullName', e.target.value)} placeholder="Nombre y apellido" style={inputStyle} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
              <div>
                <label style={labelStyle}>EDAD</label>
                <input type="number" value={form.age} onChange={e => updateField('age', e.target.value)} placeholder="25" style={{ ...inputStyle, marginBottom: 0 }} />
              </div>
              <div>
                <label style={labelStyle}>PESO (kg)</label>
                <input type="number" value={form.weight} onChange={e => updateField('weight', e.target.value)} placeholder="75" style={{ ...inputStyle, marginBottom: 0 }} />
              </div>
              <div>
                <label style={labelStyle}>ALTURA (cm)</label>
                <input type="number" value={form.height} onChange={e => updateField('height', e.target.value)} placeholder="175" style={{ ...inputStyle, marginBottom: 0 }} />
              </div>
            </div>

            {/* Training info */}
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '1px', marginBottom: 10, marginTop: 16 }}>PERFIL DE ENTRENAMIENTO</div>

            <label style={labelStyle}>OBJETIVO</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              {GOALS.map(g => (
                <button key={g} onClick={() => updateField('goal', form.goal === g ? '' : g)}
                  style={{
                    padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer',
                    background: form.goal === g ? A : C.hi, color: form.goal === g ? '#111' : '#fff',
                    border: `1px solid ${form.goal === g ? A : C.border}`
                  }}>{g}</button>
              ))}
            </div>

            <label style={labelStyle}>NIVEL DE EXPERIENCIA</label>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {LEVELS.map(l => (
                <button key={l} onClick={() => updateField('level', form.level === l ? '' : l)}
                  style={{
                    flex: 1, padding: '8px 0', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                    background: form.level === l ? A : C.hi, color: form.level === l ? '#111' : '#fff',
                    border: `1px solid ${form.level === l ? A : C.border}`
                  }}>{l}</button>
              ))}
            </div>

            <label style={labelStyle}>DÍAS POR SEMANA</label>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {FREQ_OPTIONS.map(f => (
                <button key={f} onClick={() => updateField('frequency', form.frequency === f ? '' : f)}
                  style={{
                    flex: 1, padding: '8px 0', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                    background: form.frequency === f ? A : C.hi, color: form.frequency === f ? '#111' : '#fff',
                    border: `1px solid ${form.frequency === f ? A : C.border}`
                  }}>{f}</button>
              ))}
            </div>

            <label style={labelStyle}>EXPERIENCIA PREVIA</label>
            <textarea value={form.previousExperience} onChange={e => updateField('previousExperience', e.target.value)}
              placeholder="¿Qué deportes o actividades físicas practicó? ¿Hace cuánto entrena?"
              rows={2} style={{ ...inputStyle, resize: 'vertical' }} />

            {/* Health info */}
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '1px', marginBottom: 10, marginTop: 8 }}>SALUD</div>

            <label style={labelStyle}>LESIONES O LIMITACIONES</label>
            <textarea value={form.injuries} onChange={e => updateField('injuries', e.target.value)}
              placeholder="¿Tiene alguna lesión actual o pasada? ¿Zonas de dolor?"
              rows={2} style={{ ...inputStyle, resize: 'vertical' }} />

            <label style={labelStyle}>CONDICIONES MÉDICAS</label>
            <textarea value={form.medicalConditions} onChange={e => updateField('medicalConditions', e.target.value)}
              placeholder="¿Diabetes, hipertensión, asma, problemas cardíacos, etc.?"
              rows={2} style={{ ...inputStyle, resize: 'vertical' }} />

            <label style={labelStyle}>MEDICAMENTOS</label>
            <textarea value={form.medications} onChange={e => updateField('medications', e.target.value)}
              placeholder="¿Toma algún medicamento o suplemento?"
              rows={2} style={{ ...inputStyle, resize: 'vertical' }} />

            {/* Additional */}
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '1px', marginBottom: 10, marginTop: 8 }}>ADICIONAL</div>

            <label style={labelStyle}>DISPONIBILIDAD HORARIA</label>
            <input value={form.availability} onChange={e => updateField('availability', e.target.value)}
              placeholder="ej: Mañanas de 8 a 10, tardes de 17 a 20" style={inputStyle} />

            <label style={labelStyle}>NOTAS DEL ENTRENADOR</label>
            <textarea value={form.notes} onChange={e => updateField('notes', e.target.value)}
              placeholder="Observaciones, acuerdos, datos relevantes..."
              rows={3} style={{ ...inputStyle, resize: 'vertical' }} />

            {err && <div style={{ color: C.danger, fontSize: 14, marginBottom: 12, padding: '10px 14px', background: 'rgba(255,85,85,.1)', borderRadius: 10, border: `1px solid ${C.danger}` }}>{err}</div>}

            <div style={{ display: 'flex', gap: 8 }}>
              <Btn onClick={handleAddStudent} disabled={adding} style={{ flex: 1, padding: 14, borderRadius: 12 }}>
                {adding ? '...' : <><Check size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Agregar alumno</>}
              </Btn>
              <button onClick={() => { setShowForm(false); setErr('') }}
                style={{ padding: '14px 8px', borderRadius: 12, background: C.hi, border: `1px solid ${C.border}`, color: C.sub, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Cancelar
              </button>
            </div>
          </Card>
        </div>
      )}

      {successMsg && (
        <div style={{ padding: '0 8px 12px' }}>
          <div style={{ color: A, fontSize: 13, padding: '10px 14px', background: `${A}22`, borderRadius: 10, border: `1px solid ${A}44` }}>{successMsg}</div>
        </div>
      )}

      <div style={{ padding: '0 8px' }}>
        {studentStats.length === 0 && !showForm && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>👥</div>
            <div style={{ fontSize: 14, color: C.sub, marginBottom: 4 }}>Sin alumnos todavía</div>
            <div style={{ fontSize: 13, color: C.sub }}>Agregá alumnos para asignarles rutinas</div>
          </div>
        )}

        {studentStats.map(student => {
          const adherence = student.totalActiveDays > 0
            ? Math.min(100, Math.round((student.weekCompletions / student.totalActiveDays) * 100))
            : 0
          const profile = student.profile
          return (
            <Card key={student.email} onClick={() => onSelectStudent(student.email)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 16 }}>👤</span>
                    <span style={{ fontWeight: 700, fontSize: 15, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {profile && profile.fullName ? profile.fullName : student.email}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: A, marginLeft: 24 }}>{student.email}</div>
                  <div style={{ fontSize: 12, color: C.sub, marginLeft: 24, marginTop: 2 }}>
                    {student.objectives.length} rutina{student.objectives.length !== 1 ? 's' : ''} · {formatLastActivity(student.lastActivity)}
                    {profile && profile.goal && <span> · {profile.goal}</span>}
                  </div>
                </div>
                <div style={{ textAlign: 'center', minWidth: 50 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, fontFamily: 'monospace', color: adherence >= 80 ? A : adherence >= 40 ? '#FFD700' : C.text }}>{adherence}%</div>
                  <div style={{ fontSize: 10, color: C.sub }}>semana</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
