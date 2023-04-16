/* Template página inicial */
import { entrarComGoogle } from '../../firebase/firebase';

export default () => {
  const container = document.createElement('main');

  container.classList.add('background-h-r-l');

  const template = `
  <figure>
    <img class='d-w' src='../../image/people.svg' alt='Duas pessoas preparando um bolo na vasilha'>
  </figure>
  <section class='position-card'>
  <section class='card'>
    <header class='position-header'>
      <img src='/image/logo.svg' alt='Logo' class='logo'>
    </header>
      <h2 class='font-margin'>Entre no Friandy</h2>
      <form class='form'>
        <button type='button' class='btn-input-wb btn-login' id='google'>
          <img src='/image/google.svg' alt='google' class='icon-login'>
          <p>Entrar com Google</p>
        </button>
        <fieldset>
          <legend>ou</legend>
        </fieldset>  
        <button type='button' class='btn-input-wb btn-login' id='login'>
          <img src='/image/email.svg' alt='email' class='icon-login'>
          <p>Entrar com Email</p>
        </button>
        <p class='sem-conta'>Não tem conta cadastrada?</p>
        <button type='button' class='btn-purple' id='register'>Criar Conta</button>
      </form>
    <footer>
      <a href="/#about" class="sobre">Sobre Friandy</a>
    </footer>
    </section>
  </section>
  `;

  container.innerHTML = template;

  const buttonLogin = container.querySelector('#login');
  buttonLogin.addEventListener('click', () => {
    window.location.hash = 'login';
  });

  const buttonRegister = container.querySelector('#register');
  buttonRegister.addEventListener('click', () => {
    window.location.hash = 'register';
  });

  const provider = container.querySelector('#google');
  provider.addEventListener('click', () => {
    entrarComGoogle();
  });

  return container;
};
