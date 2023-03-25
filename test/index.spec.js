// importamos la funcion que vamos a testear
/* import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
 */

// importando as funções que vamos testar
import { login } from '../src/firebase';

// Todo teste precisa de variáveis para preparar o que precisamos
const teste = {
  'email': 'teste@teste.com',
  'senha': 'teste987654',
};

const teste2 = {
  'email': 'teste2@teste.com',
  'senha': 'teste02987',
};

const email = [teste.email, teste2.email];
describe('Login do Usuário', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('Deve realizar login do usuário', () => {
    const resultado = login(email, ['teste987654']);

    expect(resultado).toEqual([teste]);
  });
});
