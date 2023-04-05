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

// /*Armazenar nova conta usuário*/

export async function addUser(username, email, uid) {
  await setDoc(doc(db, 'Users', uid), {
    displayName: username,
    email: email,
    uid: uid,
  });
}

// Função para usuário adicionar um novo post e armazenar

export async function addPost(post) {
  const docRef = await addDoc(collection(db, 'Post'), {
    text: post.value,
    date: Timestamp.fromDate(new Date()),
  });
}


/* export async const addPost = (post) => {
  const docRef = await addDoc(collection(db, 'Post'), {
    text: post.value
  });
  console.log("Document written with ID: ", docRef.id);
} */
