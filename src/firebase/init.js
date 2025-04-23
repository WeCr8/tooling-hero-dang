import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyARxX9KlWhlcZ7OeY_NN1WfqMwUxx5KZ1s",
  authDomain: "tooling-hero-dang.firebaseapp.com",
  projectId: "tooling-hero-dang",
  storageBucket: "tooling-hero-dang.firebasestorage.app",
  messagingSenderId: "937312439116",
  appId: "1:937312439116:web:8b745d17d8cb2e4f4b5de9"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
