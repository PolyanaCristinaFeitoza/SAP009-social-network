/* Template página login com email e senha */
/* import { signInWithEmailAndPassword } from 'firebase/auth'; */
import { login } from '../../firebase/firebase.js';

export default () => {
  const container = document.createElement('form');

  container.classList.add('form');

  const template = `
    <h2 class='font-margin'>Entre no Friandy</h2>
    <input type='email' name='email' id='email' class='btn-input-wb input-size' placeholder='Email' required/>
    <input type='password' name='password' id='senha' class='btn-input-wb input-size password' placeholder='Senha' required/>
    <button type='button' class='btn-purple enter' id='entrar'>Entrar</button>
    <p class=messagerror></p>
  `;

  container.innerHTML = template;

  const valoresLogin = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    /* const mError = document.querySelector('.messagerror'); */
    login(email, senha);
    /* if (signInWithEmailAndPassword(email, senha) === error){
      console.log('usuario permitido');
    } */
    /* console.log(email, senha) */
  };

  container.addEventListener('click', (event) => { // pegando todos os eventos de click
    if (event.target.id === 'entrar' && event.target.nodeName === 'BUTTON') {
      valoresLogin();
    }
    /* event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento.
    Já o nodeName mostra se o elemento clicado é um input ou boutton. */
  });

  return container;
};
