import {
  addPost,
  deletePost,
  updatePost,
  /* likePost, */
} from '../src/firebase/firestore';

/* import { loadPosts } from '../src/firebase/loadPosts'; */

import {
  addDoc,
  deleteDoc,
  updateDoc,
  /* onSnapshot, */
  /* query,
  orderBy,
  collection, */
  /* doc, */
} from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Adicionar um novo post', () => {
  test('is a function', () => {
    expect(typeof addPost).toBe('function');
  });

  it('Deve adicionar o post no banco de dados', async () => {
    const postText = 'Hoje fiz um bolo de laranja';
    const username = 'Teste';
    const uidUser = 'YGi3lupKoxQJKy8qewSydqhEGGc3';
    const date = new Date();
    await addPost(postText, username, uidUser, date);
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: username,
      likes: [],
      text: postText,
      date,
      uid: uidUser,
    });
  });
});

describe('Deletar post', () => {
  test('is a function', () => {
    expect(typeof deletePost).toBe('function');
  });

  it('Deve deletar o post no banco de dados', async () => {
    const postId = '9an5D2zC1vTY2xEObwLA';
    await deletePost(postId);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(undefined);
  });
});

describe('Atualizar post', () => {
  it('Deve atualizar o post no banco de dados', async () => {
    const postId = '9an5D2zC1vTY2xEObwLA';
    const newText = 'Hoje fiz um bolo de macaxeira';
    const date = new Date();
    await updatePost(postId, newText, date);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      text: newText,
      date,
    });
  });
});

/* describe('Curtir Post', () => {
  test('is a function', () => {
    expect(typeof likePost).toBe('function');
  });

  it('Deve curtir o post no banco de dados', async () => {
    const userId = 'PGi3lupKoxQJKy8qewSydqhEGGc8';
    const postId = '9an5D2zC1vTY2xEObwLA';
    await likePost(postId, userId);
    console.log(likePost(postId, userId));
    console.log(doc);
    expect(doc.data()).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined);
  });
});
 */

/* describe('Recarregar posts', () => {
  it('Deve recarregar os posts', () => {
    loadPosts();

    expect(onSnapshot).toHaveBeenCalledTimes(1);
    expect(onSnapshot).toHaveBeenCalledWith(undefined, () => {});
  });
}); */
