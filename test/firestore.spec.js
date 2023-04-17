import { addPost, deletePost, updatePost } from '../src/firebase/firestore';
import { addDoc, deleteDoc, updateDoc } from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Adicionar um novo post', () => {
  test('is a function', () => {
    expect(typeof addPost).toBe('function');
  });

  it('Deve adicionar o post no banco de dados', async () => {
    const postText = 'Hoje fiz um bolo de laranja';
    const username = 'Teste';
    const uidUser = 'YGi3lupKoxQJKy8qewSydqhEGGc3';
    const newDate = new Date();
    await addPost(postText, username, uidUser);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: username,
      likes: [],
      text: postText,
      date: newDate,
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
  test('is a function', () => {
    expect(typeof updatePost).toBe('function');
  });

  it('Deve atualizar o post no banco de dados', async () => {
    const postId = '9an5D2zC1vTY2xEObwLA';
    const newText = 'Hoje fiz um bolo de macaxeira';
    const newDate = new Date();
    await updatePost(postId, newText);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      text: newText,
      date: newDate,
    });
  });
});
