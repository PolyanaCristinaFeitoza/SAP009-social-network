import { entrarComGoogle } from '../../firebase/firebase';
import peopleImg from '../../image/people.svg';
import logoImg from '../../image/logo.svg';
import googleImg from '../../image/google.svg';
import emailImg from '../../image/email.svg';
import bgMobileImg from '../../image/background-mobile.svg';
import bgDesktopImg from '../../image/background-desktop.svg';

export default () => {
  const container = document.createElement('main');

  container.classList.add('background-h-r-l');
  if(window.matchMedia('(min-width: 1024px)').matches){
    container.style.backgroundImage = `url(${bgDesktopImg})`;
  }else {
    container.style.backgroundImage = `url(${bgMobileImg})`;
  }
  
  const template = `
    <figure>
      <img class='d-w' src=${peopleImg} alt='Duas pessoas preparando um bolo na vasilha'>
    </figure>
    <section class='position-card'>
    <section class='card'>
      <header class='position-header'>
        <img src=${logoImg} alt='Logo' class='logo'>
      </header>
        <h2 class='font-margin'>Entre no Friandy</h2>
        <form class='form'>
          <button type='button' class='btn-input-wb btn-login' id='google'>
            <img src=${googleImg} alt='google' class='icon-login'>
            <p>Entrar com Google</p>
          </button>
          <fieldset>
            <legend>ou</legend>
          </fieldset>  
          <button type='button' class='btn-input-wb btn-login' id='login'>
            <img src=${emailImg} alt='email' class='icon-login'>
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
  provider.addEventListener('click', async () => {
    await entrarComGoogle();
  });

  return container;
};
