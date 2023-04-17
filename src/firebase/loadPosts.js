import { app } from './firebase';

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from './exports';

import publishPost from '../pages/feed/publishPost';

const db = getFirestore(app);

export const loadPosts = (loadTimeline, uidUser) => {
  const q = query(collection(db, 'Post'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const arrayPosts = [];
    querySnapshot.forEach((doc) => {
      arrayPosts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    publishPost(arrayPosts, loadTimeline, uidUser);
    return arrayPosts;
  });
};
