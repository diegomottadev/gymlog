export function resolveExerciseSets(exercise, dateStr) {
  if (dateStr && exercise.dayOverrides && exercise.dayOverrides[dateStr]) {
    return exercise.dayOverrides[dateStr].sets
  }
  return buildDefaultSets(exercise)
}

export function buildDefaultSets(exercise) {
  const count = exercise.series || 1
  return Array.from({ length: count }, () => ({
    peso: exercise.peso || 0,
    repeticiones: exercise.repeticiones || 0
  }))
}

export function setOverrideValue(exercise, dateStr, setIndex, field, value) {
  const overrides = { ...(exercise.dayOverrides || {}) }
  const existing = overrides[dateStr]
    ? { ...overrides[dateStr], sets: overrides[dateStr].sets.map(s => ({ ...s })) }
    : { sets: buildDefaultSets(exercise) }

  if (setIndex >= 0 && setIndex < existing.sets.length) {
    existing.sets[setIndex] = { ...existing.sets[setIndex], [field]: value }
  }
  overrides[dateStr] = existing
  return { ...exercise, dayOverrides: overrides }
}

export function addOverrideSet(exercise, dateStr) {
  const overrides = { ...(exercise.dayOverrides || {}) }
  const existing = overrides[dateStr]
    ? { ...overrides[dateStr], sets: [...overrides[dateStr].sets] }
    : { sets: buildDefaultSets(exercise) }

  existing.sets.push({ peso: exercise.peso || 0, repeticiones: exercise.repeticiones || 0 })
  overrides[dateStr] = existing
  return { ...exercise, dayOverrides: overrides }
}

export function removeOverrideSet(exercise, dateStr) {
  const overrides = { ...(exercise.dayOverrides || {}) }
  const existing = overrides[dateStr]
    ? { ...overrides[dateStr], sets: [...overrides[dateStr].sets] }
    : { sets: buildDefaultSets(exercise) }

  if (existing.sets.length > 1) {
    existing.sets.pop()
    overrides[dateStr] = existing
  }
  return { ...exercise, dayOverrides: overrides }
}

export function formatSetsCompact(sets) {
  if (!sets || sets.length === 0) return null
  const first = sets[0]
  const allSame = sets.every(s => s.peso === first.peso && s.repeticiones === first.repeticiones)
  if (allSame) {
    return { compact: true, series: sets.length, repeticiones: first.repeticiones, peso: first.peso }
  }
  return null
}

export function hasWeightOverride(exercises, dateStr) {
  if (!exercises || !dateStr) return false
  return exercises.some(ex => ex.dayOverrides && ex.dayOverrides[dateStr])
}

export function getWeightDelta(exercise, dateStr) {
  if (!dateStr || !exercise.dayOverrides || !exercise.dayOverrides[dateStr]) return 0
  const baseSets = buildDefaultSets(exercise)
  const overrideSets = exercise.dayOverrides[dateStr].sets
  const baseMax = Math.max(...baseSets.map(s => s.peso))
  const overrideMax = Math.max(...overrideSets.map(s => s.peso))
  return overrideMax - baseMax
}
