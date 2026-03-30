import { useState, useMemo } from 'react'
import { A, C } from '../lib/constants'
import ProgressionChart from './ProgressionChart'

export default function ProgressionSection({ exercises }) {
  const exercisesWithHistory = useMemo(
    () => exercises.filter(e => e.weightHistory && e.weightHistory.length > 0),
    [exercises]
  )

  const [selectedId, setSelectedId] = useState(
    () => exercisesWithHistory[0]?.id || null
  )
  const [showAll, setShowAll] = useState(false)

  if (!exercisesWithHistory.length) return null

  const selectedExercise = exercisesWithHistory.find(e => e.id === selectedId) || exercisesWithHistory[0]

  return (
    <div style={{ padding: '0 8px 32px' }}>
      <div style={{ fontSize: 11, color: C.muted, letterSpacing: '1px', marginBottom: 12 }}>PROGRESIÓN</div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 16
      }}>
        {!showAll && (
          <select
            value={selectedExercise.id}
            onChange={e => setSelectedId(e.target.value)}
            style={{
              flex: 1, marginRight: 12,
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
              padding: '10px 14px', color: C.text, fontSize: 14, fontWeight: 600,
              outline: 'none', cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8e7a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center'
            }}
          >
            {exercisesWithHistory.map(ex => (
              <option key={ex.id} value={ex.id}>{ex.nombre}</option>
            ))}
          </select>
        )}

        {showAll && <div style={{ flex: 1 }} />}

        <button
          onClick={() => setShowAll(prev => !prev)}
          style={{
            background: showAll ? A : 'transparent',
            color: showAll ? '#111' : C.sub,
            border: `1px solid ${showAll ? A : C.border}`,
            borderRadius: 10, padding: '8px 14px',
            fontSize: 12, fontWeight: 700, cursor: 'pointer',
            whiteSpace: 'nowrap', transition: 'all .2s'
          }}
        >
          {showAll ? 'Mostrar uno' : 'Mostrar todos'}
        </button>
      </div>

      {showAll
        ? exercisesWithHistory.map(ex => (
            <ProgressionChart
              key={ex.id}
              weightHistory={ex.weightHistory}
              exerciseName={ex.nombre}
              showEstimated1RM={!!ex.oneRM}
              hideLabel
            />
          ))
        : (
          <ProgressionChart
            weightHistory={selectedExercise.weightHistory}
            exerciseName={selectedExercise.nombre}
            showEstimated1RM={!!selectedExercise.oneRM}
            hideLabel
          />
        )
      }
    </div>
  )
}
