import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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

// Iniciar Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Entrar com email e senha
export const login = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const criarConta = (email, senha) => createUserWithEmailAndPassword(auth, email, senha);

const provider = new GoogleAuthProvider();

export const entrarComGoogle = () => {
  return signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    console.log(user);
    window.location.hash = 'feed'
    return true;
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    const email = error.customData.email;
    console.log(email);
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    return false;
  });
};

/* Quando clicar no logout e quiser entrar novamente com google,
se o erro for igual a auth/popup-closed-by-user*/
export const userLogout = () => signOut(auth);

export const logged = () => onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.hash = 'feed';
  } else {
    window.location.hash = 'home';
  }
});

const user = auth.currentUser;
console.log(user)
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  console.log('nome', displayName);
  const email = user.email;
  console.log('email', email);
  const photoURL = user.photoURL;
  console.log('photoURL', photoURL);
  const emailVerified = user.emailVerified;
  console.log('emailVerified', emailVerified);

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}