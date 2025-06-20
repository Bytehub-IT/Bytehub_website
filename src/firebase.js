/* global __app_id, __firebase_config, __initial_auth_token */

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, query, onSnapshot, addDoc, deleteDoc } from 'firebase/firestore';

// For local development, use the provided Firebase config directly
const firebaseConfig = {
  apiKey: "AIzaSyAWYkrsLmMTSeo24CQxJMEvfVo0dg134T0",
  authDomain: "byte-hub-4fc5b.firebaseapp.com",
  projectId: "byte-hub-4fc5b",
  storageBucket: "byte-hub-4fc5b.firebasestorage.app",
  messagingSenderId: "377236100344",
  appId: "1:377236100344:web:62be08a572e14df615570d",
  measurementId: "G-3T6YCQ6N3C"
};

// Set appId for use in Firestore paths
const appId = firebaseConfig.appId;

export const initialAuthToken = null; // Not used for email/password auth

// Initialize Firebase App and services
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

// Google Auth Provider for sign-in with Google
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Export the Firebase services for use in other components
export { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
export { getFirestore, doc, setDoc, collection, query, onSnapshot, addDoc, deleteDoc };
export { appId };
