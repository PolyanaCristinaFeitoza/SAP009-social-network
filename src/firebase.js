import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC2OxkN8MJGo9tWdGGLxCl57x4kivaa2ZA",
  authDomain: "friandy-83b1a.firebaseapp.com",
  projectId: "friandy-83b1a",
  storageBucket: "friandy-83b1a.appspot.com",
  messagingSenderId: "636010240748",
  appId: "1:636010240748:web:e7e8c6e52cde393d7423c9"
};

//Iniciar Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//Entrar com email e senha
export const login = (email, senha) => {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "pages/feed/index.html";
      console.log("foi")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
}
export const criarConta = (email, senha) => {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("foi")
      window.location.hash = "#login";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

  });
}

const provider = new GoogleAuthProvider();

export const entrarComGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      window.location.href = "pages/feed/index.html";
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}



