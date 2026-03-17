import { KEY, DAY_NAMES, EMPTY_DATA } from './constants'

export const gid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4)
export const toDay = () => new Date().toISOString().slice(0, 10)
export const getTodayDayIndex = () => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1 }

export const loadLocal = () => {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null') || {}
    return {
      workouts: d.workouts || [],
      objectives: d.objectives || [],
      completions: d.completions || [],
      reminder: d.reminder || { enabled: false, time: '09:00' }
    }
  } catch {
    return { ...EMPTY_DATA }
  }
}

export const persist = d => localStorage.setItem(KEY, JSON.stringify(d))

export const vol = w => w.exercises.reduce((t, e) => t + e.sets.reduce((s, st) => s + (st.w || 0) * (st.r || 0), 0), 0)

export const fmtDate = d => new Date(d + 'T12:00').toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' })

export function getWeekRange() {
  const now = new Date()
  const dow = now.getDay()
  const diff = dow === 0 ? 6 : dow - 1
  const mon = new Date(now); mon.setDate(now.getDate() - diff); mon.setHours(0, 0, 0, 0)
  const sun = new Date(mon); sun.setDate(mon.getDate() + 6); sun.setHours(23, 59, 59, 999)
  return { mon: mon.toISOString().slice(0, 10), sun: sun.toISOString().slice(0, 10) }
}

export function mergeData(local, remote) {
  const wMap = {};
  (local.workouts || []).forEach(w => wMap[w.id] = w);
  (remote.workouts || []).forEach(w => wMap[w.id] = w)
  const oMap = {};
  (local.objectives || []).forEach(o => oMap[o.id] = o);
  (remote.objectives || []).forEach(o => oMap[o.id] = o)
  const cMap = {};
  (local.completions || []).forEach(c => cMap[c.id] = c);
  (remote.completions || []).forEach(c => cMap[c.id] = c)
  return {
    workouts: Object.values(wMap).sort((a, b) => b.date.localeCompare(a.date)),
    objectives: Object.values(oMap),
    completions: Object.values(cMap),
    reminder: remote.reminder || local.reminder || { enabled: false, time: '09:00' }
  }
}

export function getStreak(workouts) {
  const days = [...new Set(workouts.map(w => w.date))].sort().reverse()
  let n = 0, cur = toDay()
  for (const d of days) {
    if (d === cur) {
      n++
      const dt = new Date(d + 'T12:00'); dt.setDate(dt.getDate() - 1)
      cur = dt.toISOString().slice(0, 10)
    } else break
  }
  return n
}

export function createEmptyObjective(name) {
  return {
    id: gid(),
    name,
    createdAt: toDay(),
    days: DAY_NAMES.map((_, i) => ({ dayNumber: i + 1, label: '', exercises: [] }))
  }
}
