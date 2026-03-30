import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

let _db = null
export let _uid = null

export function initFirebaseApp(cfg) {
  if (!firebase.apps.length) {
    firebase.initializeApp(cfg)
    _db = firebase.firestore()
    _db.settings({ cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED, merge: true })
    _db.enablePersistence({ synchronizeTabs: true }).catch(() => { /* ignore */ })
  } else {
    _db = firebase.firestore()
  }
}

export async function fbSignIn(email, pass) {
  const cred = await firebase.auth().signInWithEmailAndPassword(email, pass)
  _uid = cred.user.uid
}

const VERIFY_SETTINGS = {
  url: 'https://diegomottadev.github.io/gymlog/',
  handleCodeInApp: false
}

export async function fbRegister(email, pass) {
  const cred = await firebase.auth().createUserWithEmailAndPassword(email, pass)
  _uid = cred.user.uid
  await cred.user.sendEmailVerification(VERIFY_SETTINGS)
  return cred.user
}

export async function fbResendVerification() {
  const user = firebase.auth().currentUser
  if (user && !user.emailVerified) {
    await user.sendEmailVerification(VERIFY_SETTINGS)
  }
}

export async function fbReloadUser() {
  const user = firebase.auth().currentUser
  if (user) {
    await user.reload()
    return firebase.auth().currentUser
  }
  return null
}

export async function fbSignOut() {
  await firebase.auth().signOut()
  _uid = null
}

export function fbOnAuthChange(cb) {
  firebase.auth().onAuthStateChanged(cb)
}

export function setUid(uid) {
  _uid = uid
}

export async function fbLoad() {
  if (!_db || !_uid) return null
  try {
    const doc = await _db.collection('users').doc(_uid).get()
    return doc.exists ? doc.data() : null
  } catch (e) {
    console.error('fbLoad', e)
    return null
  }
}

function cleanUndefined(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export async function fbSave(data) {
  if (!_db || !_uid) return
  try {
    await _db.collection('users').doc(_uid).set(cleanUndefined(data), { merge: true })
  } catch (e) {
    console.error('fbSave', e)
  }
}

// --- Roles ---
export async function fbSaveUserRole(role, profile = {}) {
  if (!_db || !_uid) return
  await _db.collection('users').doc(_uid).set({ role, profile }, { merge: true })
}

export async function fbLoadUserRole() {
  if (!_db || !_uid) return 'athlete'
  try {
    const doc = await _db.collection('users').doc(_uid).get()
    return doc.exists && doc.data().role ? doc.data().role : 'athlete'
  } catch (e) {
    console.error('fbLoadUserRole', e)
    return 'athlete'
  }
}

export async function fbLoadUserProfile() {
  if (!_db || !_uid) return null
  try {
    const doc = await _db.collection('users').doc(_uid).get()
    return doc.exists ? doc.data().profile || null : null
  } catch (e) {
    console.error('fbLoadUserProfile', e)
    return null
  }
}

export async function fbSaveUserProfile(profile) {
  if (!_db || !_uid) return
  await _db.collection('users').doc(_uid).set({ profile }, { merge: true })
}

// --- Trainer Requests ---
export async function fbSubmitTrainerRequest(data) {
  if (!_db || !_uid) return
  await _db.collection('trainerRequests').doc(_uid).set({
    uid: _uid,
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  })
}

// Public trainer request (no auth required)
export async function fbSubmitTrainerRequestPublic(data) {
  if (!_db) {
    const cfg = await import('./constants').then(m => m.FIREBASE_CONFIG)
    initFirebaseApp(cfg)
  }
  const id = data.email.replace(/[^a-zA-Z0-9]/g, '_')
  const existing = await _db.collection('trainerRequests').doc(id).get()
  if (existing.exists) throw new Error('Ya existe una solicitud con este email.')
  await _db.collection('trainerRequests').doc(id).set({
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  })
}

export async function fbLoadTrainerRequest() {
  if (!_db || !_uid) return null
  try {
    const doc = await _db.collection('trainerRequests').doc(_uid).get()
    return doc.exists ? doc.data() : null
  } catch (e) {
    console.error('fbLoadTrainerRequest', e)
    return null
  }
}

export async function fbLoadPendingRequests() {
  if (!_db) return []
  try {
    const snap = await _db.collection('trainerRequests').where('status', '==', 'pending').get()
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.error('fbLoadPendingRequests', e)
    return []
  }
}

export async function fbLoadTrainers() {
  if (!_db) return []
  try {
    const snap = await _db.collection('users').where('role', '==', 'trainer').get()
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
  } catch (e) {
    console.error('fbLoadTrainers', e)
    return []
  }
}

export async function fbApproveRequest(uid) {
  if (!_db) return
  await _db.collection('trainerRequests').doc(uid).update({ status: 'approved' })
  await _db.collection('users').doc(uid).set({ role: 'trainer' }, { merge: true })
}

export async function fbRejectRequest(uid) {
  if (!_db) return
  await _db.collection('trainerRequests').doc(uid).update({ status: 'rejected' })
}

// --- Shared Objectives ---
export async function fbSaveSharedObjective(obj) {
  if (!_db || !_uid) return
  const ref = obj.id
    ? _db.collection('sharedObjectives').doc(obj.id)
    : _db.collection('sharedObjectives').doc()
  const data = {
    trainerId: _uid,
    trainerEmail: obj.trainerEmail,
    studentEmail: obj.studentEmail,
    objective: obj.objective,
    updatedAt: new Date().toISOString()
  }
  if (obj.studentProfile) data.studentProfile = obj.studentProfile
  if (!obj.id) data.createdAt = new Date().toISOString()
  await ref.set(data, { merge: true })
  return ref.id
}

export async function fbLoadSharedByTrainer() {
  if (!_db || !_uid) return []
  try {
    const snap = await _db.collection('sharedObjectives').where('trainerId', '==', _uid).get()
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.error('fbLoadSharedByTrainer', e)
    return []
  }
}

export async function fbLoadSharedByStudent(email) {
  if (!_db) return []
  try {
    const snap = await _db.collection('sharedObjectives').where('studentEmail', '==', email).get()
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.error('fbLoadSharedByStudent', e)
    return []
  }
}

export async function fbUpdateSharedObjective(id, objective) {
  if (!_db) return
  await _db.collection('sharedObjectives').doc(id).update({ objective, updatedAt: new Date().toISOString() })
}

export async function fbDeleteSharedObjective(id) {
  if (!_db) return
  await _db.collection('sharedObjectives').doc(id).delete()
}

export async function fbToggleSharedCompletion(sharedObjectiveId, dayIndex, date) {
  if (!_db) return null
  const ref = _db.collection('sharedObjectives').doc(sharedObjectiveId)
  const doc = await ref.get()
  if (!doc.exists) return null
  const data = doc.data()
  const completions = data.completions || []
  const now = new Date()
  const dow = now.getDay()
  const diff = dow === 0 ? 6 : dow - 1
  const monDt = new Date(now); monDt.setDate(now.getDate() - diff); monDt.setHours(12, 0, 0, 0)
  const sunDt = new Date(monDt.getFullYear(), monDt.getMonth(), monDt.getDate() + 6, 12, 0, 0)
  const pad = n => String(n).padStart(2, '0')
  const mon = `${monDt.getFullYear()}-${pad(monDt.getMonth() + 1)}-${pad(monDt.getDate())}`
  const sun = `${sunDt.getFullYear()}-${pad(sunDt.getMonth() + 1)}-${pad(sunDt.getDate())}`
  const existing = completions.find(c => c.dayIndex === dayIndex && c.date >= mon && c.date <= sun)
  let newCompletions
  if (existing) {
    newCompletions = completions.filter(c => c.id !== existing.id)
  } else {
    const id = Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4)
    newCompletions = [...completions, { id, dayIndex, date, completedAt: new Date().toISOString() }]
  }
  await ref.update({ completions: newCompletions })
  return newCompletions
}

// --- Admin: profile by uid ---
export async function fbLoadProfileByUid(uid) {
  if (!_db) return null
  try {
    const doc = await _db.collection('users').doc(uid).get()
    return doc.exists ? doc.data().profile || null : null
  } catch (e) {
    console.error('fbLoadProfileByUid', e)
    return null
  }
}

export async function fbSaveProfileByUid(uid, profile) {
  if (!_db) return
  await _db.collection('users').doc(uid).set({ profile }, { merge: true })
}

// --- Active/Inactive ---
export async function fbSetUserActive(uid, active) {
  if (!_db) return
  await _db.collection('users').doc(uid).set({ active: !!active }, { merge: true })
}

export async function fbLoadUserActive(uid) {
  if (!_db) return true
  try {
    const doc = await _db.collection('users').doc(uid).get()
    if (!doc.exists) return true
    const data = doc.data()
    return data.active !== false
  } catch (e) {
    console.error('fbLoadUserActive', e)
    return true
  }
}

// --- Exempt ---
export async function fbSetUserExempt(uid, exempt) {
  if (!_db) return
  await _db.collection('users').doc(uid).set({ exempt: !!exempt }, { merge: true })
}

export async function fbLoadUserExempt(uid) {
  if (!_db) return false
  try {
    const doc = await _db.collection('users').doc(uid).get()
    return doc.exists ? !!doc.data().exempt : false
  } catch (e) {
    console.error('fbLoadUserExempt', e)
    return false
  }
}

export async function fbLoadSharedCompletions(sharedObjectiveId) {
  if (!_db) return []
  try {
    const doc = await _db.collection('sharedObjectives').doc(sharedObjectiveId)?.get()
    if (!doc.exists) return []
    return doc.data().completions || []
  } catch (e) {
    console.error('fbLoadSharedCompletions', e)
    return []
  }
}

