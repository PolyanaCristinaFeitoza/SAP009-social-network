import { addPost } from '../src/firebase/firestore';
import { addDoc } from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Adicionar um novo post', () => {
  test('is a function', () => {
    expect(typeof addPost).toBe('function');
  });

  it('Deve adicionar o post no banco de dados', async () => {
    const postText = 'Hoje fiz um bolo de laranja';
    await addPost(postText, undefined, undefined);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      date: new Date(),
      likes: [],
      name: undefined,
      text: postText,
      uid: undefined,
    });
  });
});