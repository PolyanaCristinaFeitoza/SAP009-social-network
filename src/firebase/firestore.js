import { app } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
  onSnapshot,
} from './exports';

// Iniciar o Firestore. Este método precisa ser executado
// toda vez que quisermos interagir com nosso banco de dados Firestore.
const db = getFirestore(app);

// Função para usuário adicionar um novo post e armazenar
export async function addPost(post, username, uidUser) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    likes: [],
    text: post.value,
    date: new Date(),
    uid: uidUser,
  });
  console.log('Document written with ID: ', docRef.id);
  /* console.log('Document written with ID: ', docRef.id); */
}

export async function loadPosts() {
  const arrayPosts = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    arrayPosts.push(data);
  });
  return arrayPosts;
}


// Deletar seu elemento pelo id do post
export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'Post', postId));
  console.log('apagou');
};

/* editar irá precisar saber do id do doc e value do novo text */
export const updatePost = async (postId, newText) => {
  const postRef = doc(db, 'Post', postId);
  await updateDoc(postRef, {
    text: newText.value,
  });
};
const getPost = async (postId) => {
  const postRef = doc(db, 'Post', postId);
  const post = await getDoc(postRef);
  return post.data();
};

const like = async (postId, userId) => {
  const postRef = doc(db, 'Post', postId);
  await updateDoc(postRef, {
    likes: arrayUnion(userId),
  });
};
const deslike = async (postId, userId) => {
  const postRef = doc(db, 'Post', postId);
  await updateDoc(postRef, {
    likes: arrayRemove(userId),
  });
};

export const likePost = async (postId, userId) => {
  const post = await getPost(postId);
  const alreadyLiked = post.likes.includes(userId);
  console.log(alreadyLiked);
  let count = post.likes.length;
  let liked;
  if (alreadyLiked) {
    await deslike(postId, userId);
    count -= 1;
    liked = false;
  } else {
    await like(postId, userId);
    count += 1;
    liked = true;
  }
  return { liked, count };
};

export const updateTimestamp = async (postId) => {
  const docRef = doc(db, 'Post', postId);
  await updateDoc(docRef, {
  });
};
