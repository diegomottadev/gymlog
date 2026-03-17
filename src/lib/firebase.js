import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

let _db = null
export let _uid = null

export function initFirebaseApp(cfg) {
  if (!firebase.apps.length) firebase.initializeApp(cfg)
  _db = firebase.firestore()
  try { _db.enablePersistence() } catch (e) { /* ignore */ }
}

export async function fbSignIn(email, pass) {
  const cred = await firebase.auth().signInWithEmailAndPassword(email, pass)
  _uid = cred.user.uid
}

export async function fbRegister(email, pass) {
  const cred = await firebase.auth().createUserWithEmailAndPassword(email, pass)
  _uid = cred.user.uid
  await cred.user.sendEmailVerification()
  return cred.user
}

export async function fbResendVerification() {
  const user = firebase.auth().currentUser
  if (user && !user.emailVerified) {
    await user.sendEmailVerification()
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

export async function fbSave(data) {
  if (!_db || !_uid) return
  try {
    await _db.collection('users').doc(_uid).set(data)
  } catch (e) {
    console.error('fbSave', e)
  }
}
