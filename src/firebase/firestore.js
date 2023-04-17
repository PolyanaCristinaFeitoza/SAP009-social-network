import { app } from './firebase';

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
} from './exports';

const db = getFirestore(app);

export async function addPost(text, username, uidUser) {
  await addDoc(collection(db, 'Post'), {
    name: username,
    likes: [],
    text,
    date: new Date(),
    uid: uidUser,
  });
}

export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'Post', postId));
};

export const updatePost = async (postId, newText) => {
  const postRef = doc(db, 'Post', postId);
  await updateDoc(postRef, {
    text: newText,
    date: new Date(),
  });
};

export const getPost = async (postId) => {
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
