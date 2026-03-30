import { useState, useRef, useEffect, useCallback } from 'react'
import { Check, Dumbbell } from 'lucide-react'
import { A, C, DAY_NAMES } from '../lib/constants'
import { toDay, getTodayDayIndex, getWeekRange, dateStr } from '../lib/helpers'
import Card from '../components/Card'
import BackHeader from '../components/BackHeader'
import { resolveExerciseSets, formatSetsCompact } from '../lib/overrides'
import ExName from '../components/ExName'
import ProgressionSection from '../components/ProgressionSection'

const DAY_SHORT = ['L', 'M', 'Mi', 'J', 'V', 'S', 'D']

function DayContent({ day, dayIndex, objective, completions, onToggleCompletion, dayDate }) {
  const isCompleted = completions.some(c => c.objectiveId === objective.id && c.dayIndex === dayIndex && c.date === dayDate)

  if (!day || day.rest || (!day.label && !day.exercises.length)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', padding: '0 8px' }}>
        <Dumbbell size={48} aria-hidden="true" style={{ color: C.muted, marginBottom: 16, opacity: 0.4 }} />
        <div style={{ fontSize: 20, fontWeight: 700, color: C.muted, marginBottom: 4 }}>Día de descanso</div>
        <div style={{ fontSize: 15, color: C.muted }}>{DAY_NAMES[dayIndex]}</div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ padding: '0 12px 12px' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{day.label || 'Rutina del día'}</div>
        <div style={{ fontSize: 14, color: C.sub }}>{day.exercises.length} ejercicios</div>
      </div>

      <div style={{ padding: '0 12px 12px' }}>
        <button onClick={() => onToggleCompletion(objective.id, dayIndex, dayDate)}
          style={{
            width: '100%', padding: 14, borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer',
            border: isCompleted ? 'none' : `2px solid ${A}`, transition: 'background .2s, color .2s, border .2s',
            background: isCompleted ? A : 'transparent', color: isCompleted ? '#111' : A
          }}>
          {isCompleted ? <><Check size={14} aria-hidden="true" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Rutina completada</> : 'Marcar como completada'}
        </button>
      </div>

      <div style={{ padding: '0 8px' }}>
        <Card style={{ padding: '10px 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8, paddingLeft: 10 }}>
            <span style={{ flex: 1, fontSize: 10, color: A, fontWeight: 700 }}>EJERCICIO</span>
            <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 36, textAlign: 'center' }}>S/R</span>
            <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 28, textAlign: 'center' }}>KG</span>
            <span style={{ fontSize: 10, color: '#4488ff', fontWeight: 700, width: 24, textAlign: 'center' }}>RM</span>
            <span style={{ fontSize: 10, color: A, fontWeight: 700, width: 32, textAlign: 'right' }}>DESC</span>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 8 }} />
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
                  <div key={groupId} style={{ display: 'flex', alignItems: 'stretch', marginBottom: 5 }}>
                    <div style={{ width: 8, marginRight: 4, position: 'relative', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', left: 0, width: 2, background: A, top: 4, bottom: 4, borderRadius: 1 }} />
                      <div style={{ position: 'absolute', left: 0, top: 4, width: 5, height: 2, background: A }} />
                      <div style={{ position: 'absolute', left: 0, bottom: 4, width: 5, height: 2, background: A }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {groupExs.map((gex, gi) => {
                        const sets = resolveExerciseSets(gex, dayDate)
                        const compact = formatSetsCompact(sets)
                        if (compact) {
                          return (
                            <div key={gex.id} style={{ fontSize: 13, color: C.sub, marginBottom: 2, display: 'flex', alignItems: 'center' }}>
                              <ExName name={gex.nombre} />
                              <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{compact.series}x{compact.repeticiones}</span>
                              <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{compact.peso}</span>
                              <span style={{ fontFamily: 'monospace', fontSize: 12, width: 30, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{gex.oneRM || ''}</span>
                            </div>
                          )
                        }
                        return (
                          <div key={gex.id} style={{ marginBottom: 2 }}>
                            <div style={{ fontSize: 13, color: C.sub, display: 'flex', alignItems: 'center' }}>
                              <ExName name={gex.nombre} />
                              <span style={{ fontFamily: 'monospace', fontSize: 12, width: 30, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{gex.oneRM || ''}</span>
                            </div>
                            {sets.map((s, si) => (
                              <div key={si} style={{ display: 'flex', alignItems: 'center', paddingLeft: 6, marginTop: 1 }}>
                                <span style={{ fontSize: 10, color: C.muted, width: 20 }}>S{si + 1}</span>
                                <span style={{ fontFamily: 'monospace', fontSize: 12, color: C.sub }}>{s.peso}kg × {s.repeticiones}</span>
                              </div>
                            ))}
                          </div>
                        )
                      })}
                    </div>
                    <div style={{ width: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 12, color: A, fontWeight: 700 }}>{lastEx.descanso}s</span>
                    </div>
                  </div>
                )
              } else {
                rows.push(
                  (() => {
                    const sets = resolveExerciseSets(ex, dayDate)
                    const compact = formatSetsCompact(sets)
                    if (compact) {
                      return (
                        <div key={ex.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, paddingLeft: 10 }}>
                          <ExName name={ex.nombre} style={{ fontSize: 13, color: C.sub }} />
                          <span style={{ fontFamily: 'monospace', fontSize: 11, width: 36, textAlign: 'center', flexShrink: 0 }}>{compact.series}x{compact.repeticiones}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 11, width: 28, textAlign: 'center', flexShrink: 0 }}>{compact.peso}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 12, width: 30, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{ex.oneRM || ''}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 12, color: A, fontWeight: 700, width: 38, textAlign: 'right', flexShrink: 0 }}>{ex.descanso}s</span>
                        </div>
                      )
                    }
                    return (
                      <div key={ex.id} style={{ paddingLeft: 10, marginBottom: 5 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <ExName name={ex.nombre} style={{ fontSize: 13, color: C.sub }} />
                          <span style={{ fontFamily: 'monospace', fontSize: 12, width: 30, textAlign: 'center', flexShrink: 0, color: '#4488ff' }}>{ex.oneRM || ''}</span>
                          <span style={{ fontFamily: 'monospace', fontSize: 12, color: A, fontWeight: 700, width: 38, textAlign: 'right', flexShrink: 0 }}>{ex.descanso}s</span>
                        </div>
                        {sets.map((s, si) => (
                          <div key={si} style={{ display: 'flex', alignItems: 'center', paddingLeft: 6, marginTop: 2 }}>
                            <span style={{ fontSize: 10, color: C.muted, width: 20 }}>S{si + 1}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 12, color: C.sub }}>{s.peso}kg × {s.repeticiones}</span>
                          </div>
                        ))}
                      </div>
                    )
                  })()
                )
                i++
              }
            }
            return rows
          })()}
        </Card>
      </div>

      <ProgressionSection exercises={day.exercises} />
    </div>
  )
}

export default function TodayRoutineView({ objective, completions, onToggleCompletion, onBack }) {
  if (!objective) return null

  const todayIdx = getTodayDayIndex()
  const [activeIndex, setActiveIndex] = useState(todayIdx)
  const scrollRef = useRef(null)
  const rafRef = useRef(null)

  const weekDates = (() => {
    const { mon } = getWeekRange()
    const monDate = new Date(mon + 'T12:00:00')
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monDate)
      d.setDate(monDate.getDate() + i)
      return dateStr(d)
    })
  })()

  useEffect(() => {
    const id = 'carousel-scrollbar-hide'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.textContent = '.carousel-scroll::-webkit-scrollbar{display:none}.carousel-scroll{-ms-overflow-style:none;scrollbar-width:none;}'
      document.head.appendChild(style)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ left: todayIdx * el.offsetWidth, behavior: 'instant' })
  }, [todayIdx])

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const el = scrollRef.current
      if (!el || !el.offsetWidth) return
      setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth))
    })
  }, [])

  useEffect(() => {
    const onResize = () => {
      const el = scrollRef.current
      if (el) el.scrollTo({ left: activeIndex * el.offsetWidth, behavior: 'instant' })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeIndex])

  const scrollToDay = (idx) => {
    const el = scrollRef.current
    if (el) el.scrollTo({ left: idx * el.offsetWidth, behavior: 'smooth' })
  }

  return (
    <div>
      <BackHeader onBack={onBack} title={DAY_NAMES[activeIndex]} />

      {/* Day strip */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 4, padding: '0 40px 16px' }}>
        {DAY_SHORT.map((label, i) => {
          const isActive = i === activeIndex
          const isToday = i === todayIdx
          return (
            <div key={i} onClick={() => scrollToDay(i)} role="button" tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToDay(i) } }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, transition: 'all .2s',
                background: isActive ? A : 'transparent',
                color: isActive ? '#111' : C.muted
              }}>
                {label}
              </div>
              {isToday && (
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: A, marginTop: 2 }} />
              )}
            </div>
          )
        })}
      </div>

      {/* Carousel */}
      <div ref={scrollRef} className="carousel-scroll" onScroll={handleScroll}
        style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {objective.days.map((day, i) => (
          <div key={i} style={{ minWidth: '100%', scrollSnapAlign: 'start', flexShrink: 0 }}>
            <DayContent
              day={day}
              dayIndex={i}
              objective={objective}
              completions={completions}
              onToggleCompletion={onToggleCompletion}
              dayDate={weekDates[i]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
