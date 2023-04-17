import { app, auth } from './firebase';

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from './exports';

import publishPost from '../pages/feed/publishPost';

const db = getFirestore(app);

export function loadPosts(loadTimeline) {
  const q = query(collection(db, 'Post'), orderBy('date', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const arrayPosts = [];
    querySnapshot.forEach((doc) => {
      arrayPosts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    const uidUser = auth.currentUser.uid;
    publishPost(arrayPosts, loadTimeline, uidUser);
    return arrayPosts;
  });
}
