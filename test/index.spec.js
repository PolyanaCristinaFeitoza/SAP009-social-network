import {
  login,
  createNewAccount,
  entrarComGoogle,
  userLogout,
} from '../src/firebase/firebase';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

describe('Criar nova conta', () => {
  test('is a function', () => {
    expect(typeof createNewAccount).toBe('function');
  });

  it('Deve criar uma nova conta com sucesso', async () => {
    await createNewAccount('teste3@teste.com', 'teste54321');
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

describe('Sair da rede social', () => {
  test('is a function', () => {
    expect(typeof userLogout).toBe('function');
  });

  it('Deve sair da rede social com sucesso', async () => {
    await signOut(undefined);

    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(undefined);
  });
});
