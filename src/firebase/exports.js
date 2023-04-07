export { initializeApp } from 'firebase/app';

export {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

export {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
} from 'firebase/firestore';
