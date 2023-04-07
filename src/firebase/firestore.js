import { app } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
  /* Timestamp, */
  getDocs,
} from './exports';

/* Iniciar o Firestore. Este método precisa ser executado
toda vez que quisermos interagir com nosso banco de dados Firestore. */
const db = getFirestore(app);

/* Função para usuário adicionar um novo post e armazenar */

export async function addPost(post, username) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    likes: 0,
    text: post.value,
    date: new Date(),
  });
  console.log('Document written with ID: ', docRef.id);
}

/* Toda vez que a página carrega, ele vai no banco de dados e ler todos os posts */
export async function loadPosts() {
  /* const arrayPosts = []; */
  const querySnapshot = await getDocs(collection(db, 'Post'));
  return querySnapshot;
}
