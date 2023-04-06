import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
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

export const auth = getAuth(app);

// Entrar com email e senha
export const login = (email, senha) => signInWithEmailAndPassword(auth, email, senha);

export const criarConta = (email, senha) => createUserWithEmailAndPassword(auth, email, senha);

export const updateName = (username) => updateProfile(auth.currentUser, {
  displayName: username,
}).then(() => {
  console.log('atualizou nome', auth.currentUser.displayName);
}).catch((error) => {
  console.log('não atualizou nome', error);
});

const provider = new GoogleAuthProvider();

export const entrarComGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    const user = result.user;
    console.log(user);
    window.location.hash = 'feed';
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

// /* Quando clicar no logout e quiser entrar novamente com google,
// se o erro for igual a auth/popup-closed-by-user*/
export const userLogout = () => signOut(auth);

export const getSignedUser = () => {
  const user = auth.currentUser;
  if (user) {
    return 'Usuário encontrado';
  } return 'Usuário não encontrado';
};
