import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

let _db = null
export let _uid = null

export function initFirebaseApp(cfg) {
  if (!firebase.apps.length) firebase.initializeApp(cfg)
  _db = firebase.firestore()
  _db.settings({ cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED, merge: true })
  _db.enablePersistence({ synchronizeTabs: true }).catch(() => { /* ignore */ })
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
    await _db.collection('users').doc(_uid).set(cleanUndefined(data))
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
