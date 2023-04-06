import { app } from './firebase';

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  Timestamp,
} from './exports';

/* Iniciar o Firestore */
const db = getFirestore(app);

// Função para usuário adicionar um novo post e armazenar

export async function addPost(post, username) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    text: post.value,
    date: Timestamp.fromDate(new Date()),
  });
}
