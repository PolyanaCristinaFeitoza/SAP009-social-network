import { app } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from './exports';

// Iniciar o Firestore. Este método precisa ser executado
// toda vez que quisermos interagir com nosso banco de dados Firestore.
const db = getFirestore(app);

// Função para usuário adicionar um novo post e armazenar

export async function addPost(post, username) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    likes: 0,
    text: post.value,
    date: Timestamp.fromDate(new Date()),
  });
  console.log('Document written with ID: ', docRef.id);
}
