export { initializeApp } from 'firebase/app';
export { getFirestore } from 'firebase/firestore';
export { collection, addDoc, getDocs } from 'firebase/firestore';

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
