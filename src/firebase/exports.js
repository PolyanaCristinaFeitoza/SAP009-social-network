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
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
