import { criarConta, updateName } from '../../firebase/firebase';
import { firebaseError } from '../../lib/errors.js';

export default () => {
  const container = document.createElement('main');

  container.classList.add('background-h-r-l');

  const template = `
  <figure>
    <img class='d-w' src='../../image/mulheres.svg' alt='Duas pessoas preparando um bolo na vasilha'>
  </figure>
  <section class='position-card'>
    <section class='card'>
      <header class='position-header'>
        <button class='seta'>
          <img src='/image/arrow.svg' alt='seta' class='img-seta'>
        </button>
        <img src='/image/logo.svg' alt='Logo' class='logo'>
      </header>
      <h2 class='font-margin'>Criando conta no <br>Friandy</h2>
      <form class='form'>
        <input type='text' name='nome' class='btn-input-wb m-b' id='name' placeholder='Nome' required/>
        <input type='email' name='email' class='btn-input-wb m-b' id='email' placeholder='Email' required/>
        <input type='password' name='password' class='btn-input-wb m-b' id='password' placeholder='Senha' required/>
        <button type='button' class='btn-purple create' id='criarConta'>Criar Conta</button>
        <p class='message-error'></p>
      </form>
      <footer>
        <a href="/#about" class="sobre">Sobre Friandy</a>
      </footer>
    </section>
  </section>  
  `;

  container.innerHTML = template;

  const arrow = container.querySelector('.seta');
  arrow.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  /* Utilizar container no lugar do document vai dar typeError */

  const valoresCriarConta = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    criarConta(email, password)
      .then(() => {
        updateName(name);
        window.location.hash = 'login';
      })
      .catch((error) => {
        const errorParagraph = document.querySelector('.message-error');
        errorParagraph.innerHTML = firebaseError(error);
      });
  };

  container.addEventListener('click', (event) => { // pegando todos os eventos de click
    if (event.target.id === 'criarConta' && event.target.nodeName === 'BUTTON') valoresCriarConta(); // event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
  });

  return container;
};
