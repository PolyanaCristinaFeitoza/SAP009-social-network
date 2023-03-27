// importando as funções que vamos testar
import { login } from '../src/firebase/firebase';
import { signInWithEmailAndPassword } from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Login do Usuário', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Deve realizar login do usuário com sucesso', async () => {
    await login('teste@teste.com', 'teste987654');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'teste@teste.com', 'teste987654');
  });
});
