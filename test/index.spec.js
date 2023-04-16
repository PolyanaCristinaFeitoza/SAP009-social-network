import {
  login,
  createNewAccount,
  entrarComGoogle,
  userLogout,
  app,
} from '../src/firebase/firebase';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
} from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Login do Usuário', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Deve realizar login do usuário com sucesso', async () => {
    const email = 'teste@teste.com';
    const password = 'teste987654';

    await login(email, password);
    /* Conta quantas vezes a função foi chamada */
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    /* Com quais parâmetros a função foi chamada */
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('Criar nova conta', () => {
  test('is a function', () => {
    expect(typeof createNewAccount).toBe('function');
  });

  it('Deve criar uma nova conta com sucesso', () => {
    const email = 'teste3@teste.com';
    const password = 'teste54321';
    createNewAccount(email, password);
   
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('Login com o Google', () => {
  test('is a function', () => {
    expect(typeof entrarComGoogle).toBe('function');
  });

  it('Deve realizar login com Google com sucesso', async () => {
    const emailGoogle = 'adrianakatarina.estudos@gmail.com';

    await signInWithPopup(undefined, emailGoogle);
    /* Conta quantas vezes a função foi chamada  */
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    /* Com quais parâmetros a função foi chamada */
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, emailGoogle);
  });
});

describe('Sair da rede social', () => {
  test('is a function', () => {
    expect(typeof userLogout).toBe('function');
  });

  it('Deve sair da rede social com sucesso', async () => {
    const auth = getAuth();
    await signOut(auth);

    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(auth);
  });
});
