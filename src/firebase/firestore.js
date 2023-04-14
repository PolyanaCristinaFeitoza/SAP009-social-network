import { app } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
  /* getDocs, */
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
  onSnapshot,
  query,
  orderBy,
} from './exports';

import publishPost from '../pages/feed/publishPost';
import { auth } from './firebase';

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
  /* console.log('Document written with ID: ', docRef.id); */
  /* console.log('Document written with ID: ', docRef.id); */
}

/* Toda vez que a página carrega, ele vai no banco de dados e ler todos os posts */
/* export async function loadPosts() {
  const arrayPosts = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    console.log('data.id', data.id);
    arrayPosts.push(data);
    console.log('loadPosts firestore', doc.id, " => ", doc.data());
  });
  return arrayPosts;
} */

export  function loadPosts() {
  
  const q = query(collection(db, 'Post'), orderBy('date', 'desc'));
  /* console.log('q', q); */
  const unsubscribe = onSnapshot(q, (querySnapshot => {
    const arrayPosts = [];
    /* console.log('querySnapshot', querySnapshot); */
    querySnapshot.forEach((doc) => {
      arrayPosts.push({
      id:doc.id,
      ...doc.data()
      });
    });
    /* console.log('arrayPosts', arrayPosts); */
    const loadTimeline = document.querySelector('.timeline');
    const uidUser = auth.currentUser.uid;
    publishPost(arrayPosts, loadTimeline, uidUser);
    return arrayPosts;
  }));
  /* console.log('unsubscribe', unsubscribe)
  console.log('entrei') */
}

// Deletar seu elemento pelo id do post
export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'Post', postId));
  /* console.log('apagou'); */
};

/* editar irá precisar saber do id do doc e value do novo text */
export const updatePost = async (postId, newText) => {
 /*  console.log(newText.value);
  console.log(postId); */
  const postRef = doc(db, 'Post', postId);
  /* console.log(postRef) */
  await updateDoc(postRef, {
    text: newText.value,
    date: new Date(),
  });
  loadPosts()
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