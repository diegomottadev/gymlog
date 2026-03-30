import { useState, useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../components/Card'
import ProgressionChart from '../components/ProgressionChart'
import { getWeekId } from '../lib/helpers'

function getMonthLabel(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return months[d.getMonth()] + ' ' + d.getFullYear().toString().slice(-2)
}

export default function StatsView({ data }) {
  const completions = data.completions || []
  const objectives = data.objectives || []
  const [selectedExerciseId, setSelectedExerciseId] = useState(null)

  const allExercises = useMemo(() => {
    const map = {}
    objectives.forEach(obj => {
      obj.days.forEach(d => {
        (d.exercises || []).forEach(ex => {
          if (ex.weightHistory && ex.weightHistory.length && !map[ex.id]) {
            map[ex.id] = { id: ex.id, nombre: ex.nombre, oneRMMode: ex.oneRMMode, weightHistory: ex.weightHistory }
          }
        })
      })
    })
    return Object.values(map)
  }, [objectives])
  // Active days count (non-rest days with content) - only active objectives
  const activeDays = useMemo(() => {
    return objectives.filter(obj => obj.active !== false).reduce((total, obj) => {
      return total + obj.days.filter(d => !d.rest && (d.label || d.exercises.length)).length
    }, 0)
  }, [objectives])

  // Summary stats
  const summary = useMemo(() => {
    if (!completions.length) return null
    const weekMap = {}
    completions.forEach(c => {
      const wk = getWeekId(c.date)
      if (!weekMap[wk]) weekMap[wk] = new Set()
      weekMap[wk].add(c.dayIndex)
    })
    const weekCounts = Object.values(weekMap).map(s => s.size)
    const totalWeeks = weekCounts.length
    const avg = totalWeeks ? (weekCounts.reduce((a, b) => a + b, 0) / totalWeeks).toFixed(1) : 0
    const best = Math.max(...weekCounts)
    return { total: completions.length, avgPerWeek: avg, bestWeek: best, totalWeeks }
  }, [completions])

  // Weekly adherence (last 8 weeks)
  const weeklyAdherence = useMemo(() => {
    if (!completions.length || !activeDays) return []
    const weekMap = {}
    completions.forEach(c => {
      const wk = getWeekId(c.date)
      if (!weekMap[wk]) weekMap[wk] = new Set()
      weekMap[wk].add(c.dayIndex)
    })
    return Object.entries(weekMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-8)
      .map(([wk, days]) => {
        const d = new Date(wk + 'T12:00:00')
        const label = `${d.getDate()}/${d.getMonth() + 1}`
        const pct = Math.min(100, Math.round((days.size / activeDays) * 100))
        return { semana: label, adherencia: pct }
      })
  }, [completions, activeDays])

  // Monthly completions
  const monthlyData = useMemo(() => {
    if (!completions.length) return []
    const map = {}
    completions.forEach(c => {
      const key = c.date.slice(0, 7)
      if (!map[key]) map[key] = new Set()
      map[key].add(c.objectiveId + '-' + c.dayIndex + '-' + c.date)
    })
    return Object.entries(map)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-6)
      .map(([key, s]) => ({ mes: getMonthLabel(key + '-01'), completadas: s.size }))
  }, [completions])

  // Day distribution (Mon-Sun)
  const dayDistribution = useMemo(() => {
    if (!completions.length) return []
    const counts = [0, 0, 0, 0, 0, 0, 0]
    completions.forEach(c => { counts[c.dayIndex] = (counts[c.dayIndex] || 0) + 1 })
    return DAY_NAMES.map((name, i) => ({ dia: name.slice(0, 3), completadas: counts[i] }))
  }, [completions])

  // Objective progress - only active objectives
  const objectiveProgress = useMemo(() => {
    return objectives.filter(obj => obj.active !== false).map(obj => {
      if (!obj.startDate || !obj.endDate) return null
      const start = new Date(obj.startDate + 'T12:00:00')
      const end = new Date(obj.endDate + 'T12:00:00')
      const totalWeeks = Math.max(1, Math.ceil((end - start) / (7 * 24 * 60 * 60 * 1000)))
      const activeDaysObj = obj.days.filter(d => !d.rest && (d.label || d.exercises.length)).length
      const totalExpected = totalWeeks * activeDaysObj
      const completed = completions.filter(c => c.objectiveId === obj.id).length
      const pct = totalExpected ? Math.min(100, Math.round((completed / totalExpected) * 100)) : 0
      const now = new Date()
      const elapsedWeeks = Math.max(1, Math.ceil((now - start) / (7 * 24 * 60 * 60 * 1000)))
      return { name: obj.name, pct, completed, totalExpected, elapsedWeeks, totalWeeks }
    }).filter(Boolean)
  }, [objectives, completions])

  // Inactive objectives history
  const inactiveProgress = useMemo(() => {
    return objectives.filter(obj => obj.active === false).map(obj => {
      if (!obj.startDate || !obj.endDate) return null
      const start = new Date(obj.startDate + 'T12:00:00')
      const end = new Date(obj.endDate + 'T12:00:00')
      const totalWeeks = Math.max(1, Math.ceil((end - start) / (7 * 24 * 60 * 60 * 1000)))
      const activeDaysObj = obj.days.filter(d => !d.rest && (d.label || d.exercises.length)).length
      const totalExpected = totalWeeks * activeDaysObj
      const completed = completions.filter(c => c.objectiveId === obj.id).length
      const pct = totalExpected ? Math.min(100, Math.round((completed / totalExpected) * 100)) : 0
      return { name: obj.name, pct, completed, totalExpected, totalWeeks }
    }).filter(Boolean)
  }, [objectives, completions])

  if (!completions.length) return (
    <div style={{ padding: '60px 8px', textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Sin datos todavía</div>
      <div style={{ fontSize: 14, color: C.sub }}>Completá rutinas para ver estadísticas</div>
    </div>
  )

  const tt = { contentStyle: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 13 }, labelStyle: { color: C.text } }

  return (
    <div>
      <div style={{ padding: '24px 8px 12px', fontSize: 20, fontWeight: 800 }}>Estadísticas</div>

      {/* Summary cards */}
      {summary && <div style={{ padding: '0 8px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px' }}>TOTAL</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{summary.total}</div>
        </Card>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px' }}>PROMEDIO</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{summary.avgPerWeek}<span style={{ fontSize: 12 }}>/sem</span></div>
        </Card>
        <Card style={{ marginBottom: 0 }}>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px' }}>MEJOR</div>
          <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'monospace', color: A, marginTop: 4 }}>{summary.bestWeek}<span style={{ fontSize: 12 }}>/sem</span></div>
        </Card>
      </div>}

      {/* Weekly adherence */}
      {weeklyAdherence.length > 0 && <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>ADHERENCIA SEMANAL (%)</div>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={weeklyAdherence}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="semana" tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip {...tt} formatter={v => [v + '%', 'Adherencia']} />
              <Bar dataKey="adherencia" fill={A} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>}

      {/* Day distribution */}
      {dayDistribution.length > 0 && <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>DISTRIBUCIÓN POR DÍA</div>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={dayDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="dia" tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip {...tt} formatter={v => [v, 'Completadas']} />
              <Bar dataKey="completadas" fill={A} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>}

      {/* Monthly completions */}
      {monthlyData.length > 0 && <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>COMPLETADAS POR MES</div>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#fff' }} tickLine={false} axisLine={false} allowDecimals={false} />
              <Tooltip {...tt} formatter={v => [v, 'Completadas']} />
              <Bar dataKey="completadas" fill={A} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>}

      {/* Objective progress */}
      {objectiveProgress.length > 0 && <div style={{ padding: '0 8px 8px' }}>
        <Card>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>PROGRESO DE OBJETIVOS</div>
          {objectiveProgress.map((op, i) => (
            <div key={i} style={{ marginBottom: i < objectiveProgress.length - 1 ? 16 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.sub }}>{op.name}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: A }}>{op.pct}%</span>
              </div>
              <div style={{ width: '100%', height: 10, background: C.hi, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ width: op.pct + '%', height: '100%', background: A, borderRadius: 5, transition: 'width .3s' }} />
              </div>
              <div style={{ fontSize: 12, color: C.sub, marginTop: 4 }}>
                {op.completed}/{op.totalExpected} rutinas · Semana {op.elapsedWeeks}/{op.totalWeeks}
              </div>
            </div>
          ))}
        </Card>
      </div>}

      {allExercises.length > 0 && (
        <div style={{ padding: '0 8px 8px' }}>
          <Card>
            <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 10 }}>PROGRESIÓN POR EJERCICIO</div>
            <select
              value={selectedExerciseId || ''}
              onChange={e => setSelectedExerciseId(e.target.value || null)}
              style={{
                width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 10,
                padding: '10px 12px', color: C.text, fontSize: 13, fontWeight: 600, outline: 'none'
              }}
            >
              <option value="">Seleccionar ejercicio...</option>
              {allExercises.map(ex => (
                <option key={ex.id} value={ex.id}>{ex.nombre}</option>
              ))}
            </select>
          </Card>
          {selectedExerciseId && (() => {
            const ex = allExercises.find(e => e.id === selectedExerciseId)
            if (!ex) return null
            return (
              <ProgressionChart
                weightHistory={ex.weightHistory}
                exerciseName={ex.nombre}
                showEstimated1RM={ex.oneRMMode === 'auto'}
              />
            )
          })()}
        </div>
      )}

      {inactiveProgress.length > 0 && <div style={{ padding: '0 8px 24px' }}>
        <Card style={{ opacity: 0.7 }}>
          <div style={{ fontSize: 11, color: C.sub, letterSpacing: '1px', marginBottom: 14 }}>HISTORIAL DE OBJETIVOS</div>
          {inactiveProgress.map((op, i) => (
            <div key={i} style={{ marginBottom: i < inactiveProgress.length - 1 ? 16 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.sub }}>{op.name}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.muted }}>{op.pct}%</span>
              </div>
              <div style={{ width: '100%', height: 10, background: C.hi, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ width: op.pct + '%', height: '100%', background: C.muted, borderRadius: 5 }} />
              </div>
              <div style={{ fontSize: 12, color: C.sub, marginTop: 4 }}>
                {op.completed}/{op.totalExpected} rutinas · {op.totalWeeks} semanas
              </div>
            </div>
          ))}
        </Card>
      </div>}
    </div>
  )
}
