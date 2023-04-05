import { app } from './firebase'

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from './exports';

/* Iniciar o Firestore */
const db = getFirestore(app);

/*Armazenar nova conta usuário*/

export async function addUser(username, email, uid) {
  await setDoc(doc(db, 'Users', uid), {
    displayName: username,
    email: email,
    uid: uid
  });
}

/*Função para usuário adicionar um novo post e armazenar*/

export async function addPost(post) {
  const docRef = await addDoc(collection(db, 'Post'), {
    text: post.value,
    date: Timestamp.fromDate(new Date())
  });
  console.log("Document written with ID: ", docRef.id);
}


/* export async const addPost = (post) => {
  const docRef = await addDoc(collection(db, 'Post'), {
    text: post.value
  });
  console.log("Document written with ID: ", docRef.id);
} */

/*Função pegar nome do usuário - Executar uma consulta*/

export const getUsername  = () => {
  const q = query(collection(db, 'Users'), where("uid", "==", true));

  const querySnapshot = getDocs(q);
  querySnapshot.forEach((doc) => {

  console.log(doc.id, " => ", doc.data());
});

}


