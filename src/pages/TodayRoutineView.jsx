import { useMemo } from 'react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getTodayDayIndex, getWeekRange, dateStr } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'

export default function TodayRoutineView({ objective, completions, onToggleCompletion, onBack }) {
  if (!objective) return null
  const todayIdx = getTodayDayIndex()
  const today = toDay()
  const day = objective.days[todayIdx]
  const isCompleted = completions.some(c => c.objectiveId === objective.id && c.dayIndex === todayIdx && c.date === today)

  if (!day || day.rest || (!day.label && !day.exercises.length)) return null

  return (
    <div>
      <BackHeader onBack={onBack} title={DAY_NAMES[todayIdx]} />

      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{day.label || 'Rutina del día'}</div>
        <div style={{ fontSize: 15, color: '#fff' }}>{day.exercises.length} ejercicios</div>
      </div>

      <div style={{ padding: '0 20px 12px' }}>
        <button onClick={() => onToggleCompletion(objective.id, todayIdx, today)}
          style={{
            width: '100%', padding: 14, borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: 'pointer',
            border: isCompleted ? 'none' : `2px solid ${A}`, transition: 'all .2s',
            background: isCompleted ? A : 'transparent', color: isCompleted ? '#111' : A
          }}>
          {isCompleted ? '✓ Rutina completada' : 'Marcar como completada'}
        </button>
      </div>

      <div style={{ padding: '0 20px' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingLeft: 16 }}>
            <span style={{ flex: 1, fontSize: 11, color: A, fontWeight: 700, letterSpacing: '1px' }}>EJERCICIO</span>
            <span style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: '1px', width: 70, textAlign: 'center' }}>SERIE/REP</span>
            <span style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: '1px', width: 50, textAlign: 'center' }}>PESO</span>
            <span style={{ fontSize: 11, color: A, fontWeight: 700, letterSpacing: '1px', width: 50, textAlign: 'right' }}>DESC</span>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }} />
          {(() => {
            const rows = []
            let i = 0
            while (i < day.exercises.length) {
              const ex = day.exercises[i]
              if (ex.group) {
                const groupId = ex.group
                const groupExs = []
                while (i < day.exercises.length && day.exercises[i].group === groupId) {
                  groupExs.push(day.exercises[i])
                  i++
                }
                const lastEx = groupExs[groupExs.length - 1]
                rows.push(
                  <div key={groupId} style={{ display: 'flex', alignItems: 'stretch', marginBottom: 6 }}>
                    <div style={{ width: 10, marginRight: 6, position: 'relative', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', left: 0, width: 2, background: A, top: 6, bottom: 6, borderRadius: 1 }} />
                      <div style={{ position: 'absolute', left: 0, top: 6, width: 6, height: 2, background: A }} />
                      <div style={{ position: 'absolute', left: 0, bottom: 6, width: 6, height: 2, background: A }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {groupExs.map(gex => (
                        <div key={gex.id} style={{ fontSize: 15, color: '#fff', marginBottom: 3, display: 'flex', alignItems: 'center' }}>
                          <span style={{ flex: 1 }}>{gex.nombre}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 14, width: 70, textAlign: 'center' }}>{gex.series}x{gex.repeticiones}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 14, width: 50, textAlign: 'center' }}>{gex.peso}kg</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 14, color: A, fontWeight: 700, width: 50, textAlign: 'right' }}>{gex.id === lastEx.id ? lastEx.descanso + 's' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              } else {
                rows.push(
                  <div key={ex.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 6, paddingLeft: 16 }}>
                    <span style={{ flex: 1, fontSize: 15, color: '#fff' }}>{ex.nombre}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: 14, width: 70, textAlign: 'center' }}>{ex.series}x{ex.repeticiones}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: 14, width: 50, textAlign: 'center' }}>{ex.peso}kg</span>
                    <span style={{ fontFamily: 'monospace', fontSize: 14, color: '#5b9bd5', fontWeight: 700, width: 50, textAlign: 'right' }}>{ex.descanso}s</span>
                  </div>
                )
                i++
              }
            }
            return rows
          })()}
        </Card>
      </div>
    </div>
  )
}
