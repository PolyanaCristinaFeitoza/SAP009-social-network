import { app } from './firebase'

import {
  getFirestore,
  collection,
  addDoc,
} from './exports';

/* Iniciar o Firestore */
const db = getFirestore(app);

/*Função para usuário adicionar um novo post e armazenar*/

export const addPost = (post) => {
  const docRef = addDoc(collection(db, 'Post'), {
    text: post.value
  });
  console.log("Document written with ID: ", docRef.id);
}

/*Função atualizar o feed com nova postagem*/