import { createNewAccount } from '../../firebase/firebase';
import { firebaseError } from '../../lib/errors.js';
import peopleImg from '../../image/people.svg';
import arrowImg from '../../image/arrow.svg';
import logoImg from '../../image/logo.svg';
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
        <button class='seta'>
          <img src=${arrowImg} alt='seta' class='img-seta'>
        </button>
        <img src=${logoImg} alt='Logo' class='logo'>
      </header>
      <h2 class='font-margin'>Criando conta no <br>Friandy</h2>
      <form class='form'>
        <input type='text' name='nome' class='btn-input-wb m-b' id='name' placeholder='Nome' required/>
        <input type='email' name='email' class='btn-input-wb m-b' id='email' placeholder='Email' required/>
        <input type='password' name='password' class='btn-input-wb m-b' id='password' placeholder='Senha' required/>
        <button type='button' class='btn-purple create' id='btnCreateNewAccount'>Criar Conta</button>
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

  const newAccountData = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createNewAccount(email, password, name)
      .then(() => {
        window.location.hash = 'login';
      })
      .catch((error) => {
        const errorParagraph = document.querySelector('.message-error');
        errorParagraph.innerHTML = firebaseError(error);
      });
  };

  container.addEventListener('click', (event) => { // pegando todos os eventos de click
    if (event.target.id === 'btnCreateNewAccount' && event.target.nodeName === 'BUTTON') newAccountData(); // event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
  });

  return container;
};
