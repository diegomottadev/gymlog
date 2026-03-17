import { useState, useMemo } from 'react'
import { A, C } from '../lib/constants'
import { vol } from '../lib/helpers'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../components/Card'

export default function StatsView({ data }) {
  const [selEx, setSelEx] = useState('')
  const exNames = useMemo(() => { const s = new Set(); data.workouts.forEach(w => w.exercises.forEach(e => s.add(e.name))); return [...s].sort() }, [data.workouts])
  const volData = useMemo(() => {
    const map = {}
    data.workouts.forEach(w => { if (!map[w.date]) map[w.date] = 0; map[w.date] += vol(w) })
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b)).slice(-20).map(([d, v]) => ({ d: d.slice(5), v }))
  }, [data.workouts])
  const freqData = useMemo(() => {
    const map = {}
    data.workouts.forEach(w => w.exercises.forEach(e => { map[e.name] = (map[e.name] || 0) + 1 }))
    return Object.entries(map).sort(([, a], [, b]) => b - a).slice(0, 8).map(([n, c]) => ({ n: n.length > 14 ? n.slice(0, 14) + '…' : n, c }))
  }, [data.workouts])
  const prData = useMemo(() => {
    if (!selEx) return []
    return data.workouts.filter(w => w.exercises.some(e => e.name === selEx)).sort((a, b) => a.date.localeCompare(b.date)).map(w => {
      const ex = w.exercises.find(e => e.name === selEx)
      return { d: w.date.slice(5), kg: ex.sets.length ? Math.max(...ex.sets.map(s => s.w)) : 0 }
    })
  }, [data.workouts, selEx])
  const prs = useMemo(() => {
    const m = {}
    data.workouts.forEach(w => w.exercises.forEach(e => { const mx = e.sets.length ? Math.max(...e.sets.map(s => s.w)) : 0; if (!m[e.name] || mx > m[e.name]) m[e.name] = mx }))
    return Object.entries(m).sort(([, a], [, b]) => b - a)
  }, [data.workouts])

  if (!data.workouts.length) return (
    <div style={{ padding: '60px 20px', textAlign: 'center', color: C.muted }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin datos todavía</div>
      <div style={{ fontSize: 13 }}>Registrá entrenamientos para ver estadísticas</div>
    </div>
  )

  const tt = { contentStyle: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 12 }, labelStyle: { color: C.text } }

  return (
    <div>
      <div style={{ padding: '24px 20px 12px', fontSize: 20, fontWeight: 800 }}>Estadísticas</div>

      {volData.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 14 }}>VOLUMEN POR SESIÓN (kg)</div>
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={volData}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="d" tick={{ fontSize: 10, fill: C.muted }} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: C.muted }} tickLine={false} axisLine={false} />
              <Tooltip {...tt} formatter={v => [v.toLocaleString() + 'kg', 'Volumen']} />
              <Line type="monotone" dataKey="v" stroke={A} strokeWidth={2.5} dot={{ fill: A, r: 3, strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>}

      {freqData.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 14 }}>EJERCICIOS MÁS FRECUENTES</div>
          <ResponsiveContainer width="100%" height={Math.max(150, freqData.length * 38)}>
            <BarChart data={freqData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: C.muted }} tickLine={false} />
              <YAxis type="category" dataKey="n" tick={{ fontSize: 11, fill: C.muted }} width={100} tickLine={false} axisLine={false} />
              <Tooltip {...tt} formatter={v => [v + ' veces', 'Frecuencia']} />
              <Bar dataKey="c" fill={A} radius={[0, 5, 5, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>}

      {exNames.length > 0 && <div style={{ padding: '0 20px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 10 }}>PROGRESIÓN DE PESO</div>
          <select value={selEx} onChange={e => setSelEx(e.target.value)}
            style={{ width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 14px', color: C.text, fontSize: 14, marginBottom: 14, outline: 'none' }}>
            <option value="">Seleccionar ejercicio…</option>
            {exNames.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          {prData.length > 1 ? <ResponsiveContainer width="100%" height={170}>
            <LineChart data={prData}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="d" tick={{ fontSize: 10, fill: C.muted }} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: C.muted }} tickLine={false} axisLine={false} />
              <Tooltip {...tt} formatter={v => [v + 'kg', 'Máx']} />
              <Line type="monotone" dataKey="kg" stroke={A} strokeWidth={2.5} dot={{ fill: A, r: 4, strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer> : selEx && <div style={{ color: C.muted, fontSize: 13, textAlign: 'center', padding: '20px 0' }}>Necesitás 2+ sesiones con este ejercicio</div>}
        </Card>
      </div>}

      {prs.length > 0 && <div style={{ padding: '0 20px 24px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 14 }}>🏆 RÉCORDS PERSONALES</div>
          {prs.map(([n, kg]) => (
            <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 14 }}>{n}</div>
              <div style={{ fontSize: 16, fontFamily: 'monospace', fontWeight: 900, color: A }}>{kg}kg</div>
            </div>
          ))}
        </Card>
      </div>}
    </div>
  )
}
