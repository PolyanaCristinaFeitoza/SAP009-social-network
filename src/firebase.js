// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OxkN8MJGo9tWdGGLxCl57x4kivaa2ZA",
  authDomain: "friandy-83b1a.firebaseapp.com",
  projectId: "friandy-83b1a",
  storageBucket: "friandy-83b1a.appspot.com",
  messagingSenderId: "636010240748",
  appId: "1:636010240748:web:e7e8c6e52cde393d7423c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* console.log("antes") */

const auth = getAuth(app);

//Login com email e senha
/* signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("foi", user)
    // ...
  })
  .catch((error) => {
    console.log("error", error)
    const errorCode = error.code;
    console.log("error1", errorCode)
    const errorMessage = error.message;
    console.log("error2", errorMessage)
  });
  console.log("depois") */

