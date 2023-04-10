import { app } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
  /* Timestamp, */
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from './exports';

/* Iniciar o Firestore. Este método precisa ser executado
toda vez que quisermos interagir com nosso banco de dados Firestore. */
const db = getFirestore(app);

/* Função para usuário adicionar um novo post e armazenar */

export async function addPost(post, username, uidUser) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    likes: 0,
    text: post.value,
    date: new Date(),
    uid: uidUser,
  });
  /* console.log('Document written with ID: ', docRef.id); */
}

/* Toda vez que a página carrega, ele vai no banco de dados e ler todos os posts */
export async function loadPosts() {
  const arrayPosts = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    /* Adicionando o id do doc no campo data */
    data.id = doc.id;
    /* console.log('data.id', data.id); */
    arrayPosts.push(data);
    /* console.log('loadPosts firestore', doc.id, " => ", doc.data()); */
  });
  return arrayPosts;
}

/* Deletar seu elemento pelo id do post */
export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'Post', postId));
  console.log('apagou');
}

/* editar irá precisar saber do id do doc e value do novo text */
export const updatePost = async (postId, newText) => {
  const postRef = doc(db, 'Post', postId);
  await updateDoc(postRef, {
    text: newText.value,
  });
  
}
