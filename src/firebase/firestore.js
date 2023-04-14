import { app, auth } from './firebase';

import {
  getFirestore,
  collection,
  addDoc,
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

const db = getFirestore(app);

export async function addPost(text, username, uidUser) {
  const docRef = await addDoc(collection(db, 'Post'), {
    name: username,
    likes: [],
    text: text.value,
    date: new Date(),
    uid: uidUser,
  });
}

export function loadPosts(loadTimeline) {
  const q = query(collection(db, 'Post'), orderBy('date', 'desc'));
  const unsubscribe = onSnapshot(q, (querySnapshot => {
    const arrayPosts = [];
    querySnapshot.forEach((doc) => {
      arrayPosts.push({
      id:doc.id,
      ...doc.data()
      });
    });
    const uidUser = auth.currentUser.uid;
    publishPost(arrayPosts, loadTimeline, uidUser);
    return arrayPosts;
  }));
}

export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'Post', postId));
};

export const updatePost = async (postId, newText) => {
  const postRef = doc(db, 'Post', postId);
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