export { initializeApp } from 'firebase/app';

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth';

export { 
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";