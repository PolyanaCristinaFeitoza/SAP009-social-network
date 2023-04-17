// importando as funções que vamos testar
import { login, criarConta, entrarComGoogle } from '../src/firebase/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Login do Usuário', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Deve realizar login do usuário com sucesso', async () => {
    await login('teste@teste.com', 'teste987654');
    /* Conta quantas vezes a função foi chamada */
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    /* Com quais parâmetros a função foi chamada */
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'teste@teste.com', 'teste987654');
  });
});

describe('Criar conta', () => {
  test('is a function', () => {
    expect(typeof criarConta).toBe('function');
  });

  it('Deve criar uma nova conta com sucesso', async () => {
    await criarConta('teste3@teste.com', 'teste54321');
    /* Conta quantas vezes a função foi chamada */
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    /* Com quais parâmetros a função foi chamada */
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'teste3@teste.com', 'teste54321');
  });
});

describe('Login com o Google', () => {
  test('is a function', () => {
    expect(typeof entrarComGoogle).toBe('function');
  });

  it('Deve realizar login com Google com sucesso', async () => {
    await signInWithPopup(undefined, 'adrianakatarina.estudos@gmail.com');
    /* Conta quantas vezes a função foi chamada  */
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    /* Com quais parâmetros a função foi chamada */
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, 'adrianakatarina.estudos@gmail.com');
  });
});

describe('Adicionar post', () => {
  test('is a function', () => {
    expect(typeof addPost).toBe('function');
  });
});

describe('Deletar post', () => {
  test('is a function', () => {
    expect(typeof deletePost).toBe('function');
  });
});
