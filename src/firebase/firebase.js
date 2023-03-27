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
export const login = (email, senha) => {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.hash = 'feed';
    })
    .catch((error) => {
      const errorCode = error.code;
      /* console.log(errorCode); */
      const errorMessage = error.message;
      /* console.log(errorMessage); */
      /* if (errorCode === 'auth/user-not-found') {
        return alert('Usuário não encontrado.');
      }
      return alert('Suas informações estão incorretas. Tente novamente.'); */
    });
};

export const criarConta = (email, senha) => {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('foi'); /* Colocar o caminho do home */
      console.log(user);
      window.location.hash = 'feed';
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      /* console.log(errorCode); */
      const errorMessage = error.message;
      /* console.log(errorMessage); */
/*       if (errorCode === 'auth/email-already-in-use') {
        alert('Email já em uso.');
      } if (errorCode === 'auth/weak-password') {
        alert('A senha deve ter pelo menos 6 caracteres');
      }
      alert('Suas informações estão incorretas. Tente novamente.'); */
      return false;
    });
};

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
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // Trate erros aqui.
      const errorCode = error.code;
      /* console.log(errorCode); */
      const errorMessage = error.message;
      /* console.log(errorMessage); */
      // O e-mail da conta do usuário usado.
      const email = error.customData.email;
      /* console.log(email); */
      // The AuthCredential type that was used.
      // O tipo AuthCredential que foi usado.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
      return false;
    });
};
