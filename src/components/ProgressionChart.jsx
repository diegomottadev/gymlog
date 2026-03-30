import { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { A, C } from '../lib/constants'
import Card from './Card'

export default function ProgressionChart({ weightHistory, exerciseName, showEstimated1RM, hideLabel }) {
  const chartData = useMemo(() => {
    if (!weightHistory || !weightHistory.length) return []
    return [...weightHistory]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-20)
      .map(h => {
        const d = new Date(h.date + 'T12:00:00')
        return {
          fecha: `${d.getDate()}/${d.getMonth() + 1}`,
          peso: h.peso,
          rm: h.oneRM || null
        }
      })
  }, [weightHistory])

  if (!chartData.length) return null

  const tt = {
    contentStyle: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 13 },
    labelStyle: { color: C.text }
  }

  return (
    <Card>
      {!hideLabel && <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 4 }}>PROGRESIÓN</div>}
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 14 }}>{exerciseName}</div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
          <XAxis dataKey="fecha" tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} axisLine={false} />
          <Tooltip {...tt} />
          <Line type="monotone" dataKey="peso" stroke={A} strokeWidth={2} dot={{ fill: A, r: 4 }} name="Peso (kg)" />
          {showEstimated1RM && (
            <Line type="monotone" dataKey="rm" stroke="#4488ff" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#4488ff', r: 4 }} name="1RM Est." />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
