import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from './exports';

const firebaseConfig = {
  apiKey: 'AIzaSyC2OxkN8MJGo9tWdGGLxCl57x4kivaa2ZA',
  authDomain: 'friandy-83b1a.firebaseapp.com',
  projectId: 'friandy-83b1a',
  storageBucket: 'friandy-83b1a.appspot.com',
  messagingSenderId: '636010240748',
  appId: '1:636010240748:web:e7e8c6e52cde393d7423c9',
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
/* console.log("antes") */

const auth = getAuth(app);

// Entrar com email e senha
export const login = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const criarConta = (email, senha) => createUserWithEmailAndPassword(auth, email, senha);

const provider = new GoogleAuthProvider();

export const entrarComGoogle = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.hash = 'feed';
      return true;
    }).catch(() => false);
};
