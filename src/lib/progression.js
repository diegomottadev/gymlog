/**
 * Epley formula: 1RM = weight × (1 + reps / 30)
 */
export function calcEpley1RM(weight, reps) {
  if (!weight || weight <= 0 || !reps || reps <= 0) return 0
  if (reps === 1) return weight
  return Math.round(weight * (1 + reps / 30) * 10) / 10
}

/**
 * Returns suggested weight ranges for each training goal based on 1RM
 */
export function getSuggestedWeights(oneRM) {
  if (!oneRM || oneRM <= 0) return null
  const round = v => Math.round(v * 2) / 2
  return {
    fuerza:      { min: round(oneRM * 0.80), max: round(oneRM * 0.95), reps: '1–8' },
    hipertrofia: { min: round(oneRM * 0.65), max: round(oneRM * 0.80), reps: '8–12' },
    resistencia: { min: round(oneRM * 0.50), max: round(oneRM * 0.65), reps: '12+' }
  }
}
