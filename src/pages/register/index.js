/* Template criar conta */
import { criarConta } from '../../firebase/firebase';

export default () => {
  const container = document.createElement('form');

  container.classList.add('form');

  const template = `
    <h2 class='font-margin'>Criando conta no <br>Friandy</h2>
    <input type='text' name='nome' class='btn-input-wb m-b' id='nom' placeholder='Nome' required/>
    <input type='email' name='email' class='btn-input-wb m-b' id='email' placeholder='Email' required/>
    <input type='password' name='password' class='btn-input-wb m-b' id='senha' placeholder='Senha' required/>
    <button type='button' class='btn-purple create' id='criarConta'>Criar Conta</button>
  `;

  container.innerHTML = template;

  const valoresCriarConta = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    criarConta(email, senha);
  };

  container.addEventListener('click', (event) => { // pegando todos os eventos de click
    if (event.target.id === 'criarConta' && event.target.nodeName === 'BUTTON') valoresCriarConta(); // event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
  });

  return container;
};
