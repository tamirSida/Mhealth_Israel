import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

// Check if Firebase config exists
const isFirebaseConfigured = firebaseConfig.apiKey && 
  firebaseConfig.authDomain && 
  firebaseConfig.projectId

let app: any = null
let auth: any = null
let db: any = null
let analytics: any = null

if (isFirebaseConfigured) {
  // Initialize Firebase only if configured
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
  
  // Initialize analytics only in browser environment
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app)
  }
}

export { auth, db, analytics, isFirebaseConfigured }
export default app