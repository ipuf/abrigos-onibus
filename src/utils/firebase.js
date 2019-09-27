import * as firebase from 'firebase/app'

import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBEDQtVHlls8Ahda4t4WjdRM7lxrpP8fzI",
  authDomain: "abrigos-onibus.firebaseapp.com",
  databaseURL: "https://abrigos-onibus.firebaseio.com",
  projectId: "abrigos-onibus",
  storageBucket: "",
  messagingSenderId: "1025594978915",
  appId: "1:1025594978915:web:c0bc7d021951268fe4fe56"
})

const db = firebase.firestore(app)

export { db }
