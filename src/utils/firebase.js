import * as firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDCYGUiAJpnHjqP-EDo-ddv2UOU9sUZhNk',
  authDomain: 'abrigos-bus.firebaseapp.com',
  databaseURL: 'https://abrigos-bus.firebaseio.com',
  projectId: 'abrigos-bus',
  storageBucket: '',
  messagingSenderId: '946834717735',
  appId: '1:946834717735:web:2d70a77d8fbaad04902202'
})

const db = firebase.firestore(app)
const auth = firebase.auth(app)

export { db, auth }
