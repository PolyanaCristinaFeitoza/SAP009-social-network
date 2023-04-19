import {
  login,
  createNewAccount,
  checkAuthentication,
} from '../src/firebase/firebase';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getAuth,
} from '../src/firebase/exports';

jest.mock('../src/firebase/exports');

describe('Login do Usuário', () => {
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
  it('Deve criar uma nova conta com sucesso', async () => {
    const email = 'teste3@teste.com';
    const password = 'teste54321';
    const username = 'Polyana';

    const mockGetAuth = {
      currentUser: {},
    };

    getAuth.mockReturnValueOnce(mockGetAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();

    await createNewAccount(email, password, username);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth, email, password);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    /* expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
      displayName: username,
    }); */
  });
});

describe('Login com o Google', () => {
  it('Deve realizar login com Google com sucesso', () => {
    const emailGoogle = 'adrianakatarina.estudos@gmail.com';
    signInWithPopup(undefined, emailGoogle);
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, emailGoogle);
  });
});

describe('Sair da rede social', () => {
  it('Deve sair da rede social com sucesso', () => {
    const auth = getAuth();
    signOut(auth);
    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(auth);
  });
});

describe('Permanecer usuário logado', () => {
  it('O usuário deve permanecer logado', () => {
    const callback = jest.fn();
    checkAuthentication(callback);
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
    expect(onAuthStateChanged).toHaveBeenCalledWith(undefined, callback);
  });
});

/* describe('Gravar nome do usuário', () => {
  it('Deve gravar o nome do usuário', async () => {
    const mockGetAuth = {
      currentUser: {},
    };

    getAuth.mockReturnValueOnce(mockGetAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();
    const username = 'Polyana';
    await updateName(username);
  });
}); */
