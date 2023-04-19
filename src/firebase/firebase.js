import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from './exports';

const firebaseConfig = {
  apiKey: 'AIzaSyC2OxkN8MJGo9tWdGGLxCl57x4kivaa2ZA',
  authDomain: 'friandy-83b1a.firebaseapp.com',
  projectId: 'friandy-83b1a',
  storageBucket: 'friandy-83b1a.appspot.com',
  messagingSenderId: '636010240748',
  appId: '1:636010240748:web:e7e8c6e52cde393d7423c9',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const createNewAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
export const updateName = async (username) => {
  const autenticacao = getAuth(app);
  updateProfile(autenticacao.currentUser, {
    displayName: username,
  });
};

const provider = new GoogleAuthProvider();

export const entrarComGoogle = async () => signInWithPopup(auth, provider);

export const userLogout = () => signOut(auth);

export const checkAuthentication = (cb) => onAuthStateChanged(auth, cb);
