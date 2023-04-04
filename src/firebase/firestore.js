import { app } from './firebase'

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
} from './exports';

/* Iniciar o Firestore */
const db = getFirestore(app);

/*Armazenar nova conta usuário*/

export const addUser = (username, email, uid) => {
  setDoc(doc(db, 'Users', uid), {
    displayName: username,
    email: email
  });
}

/*Função para usuário adicionar um novo post e armazenar*/

export const addPost = (post) => {
  const docRef = addDoc(collection(db, 'Post'), {
    text: post.value
  });
  console.log("Document written with ID: ", docRef.id);
}

/*Função atualizar o feed com nova postagem*/