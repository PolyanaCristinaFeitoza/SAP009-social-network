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
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // Isso fornece um token de acesso do Google. Você pode usá-lo para acessar a API do Google.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      // As informações do usuário conectado.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // Dados de IdP disponíveis usando getAdditionalUserInfo(result)
      window.location.hash = 'feed';
      return true;
    }).catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      return false;
    });
};
