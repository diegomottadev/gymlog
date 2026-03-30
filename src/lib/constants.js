export const KEY = 'gymtracker_v1'
export const A = '#BBFF00'
export const C = {
  bg: '#0b0c08',
  card: '#141610',
  hi: '#1c1e16',
  border: '#282a20',
  muted: '#8a8e7a',
  text: '#eaeed8',
  sub: '#c0c4b0',
  danger: '#ff6b6b',
  warning: '#f0a030',
  font: "'Plus Jakarta Sans', sans-serif"
}
export const DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA4hUQYcaOfa6048GT_RFGblkLczKvyRhU',
  authDomain: 'gymtrack-d3c1b.firebaseapp.com',
  projectId: 'gymtrack-d3c1b',
  storageBucket: 'gymtrack-d3c1b.firebasestorage.app',
  messagingSenderId: '1043912526777',
  appId: '1:1043912526777:web:e606d213a4ae6e6ab94468'
}
export const ADMIN_EMAILS = ['diegomottadev@gmail.com', 'admin@admin.com']
export const STUDENT_COUNT_RANGES = ['1-3', '4-8', '9-15', '16+']
export const FUNCTIONS_URL = 'https://us-central1-gymtrack-d3c1b.cloudfunctions.net'
export const SUBSCRIPTION_PLANS = {
  athlete: { ars: 5000, usd: 3, label: 'Athlete' },
  trainer: { ars: 13500, usd: 9, label: 'Trainer' }
}
export const EMPTY_DATA = {
  workouts: [],
  objectives: [],
  completions: [],
  reminder: { enabled: false, time: '09:00' }
}
