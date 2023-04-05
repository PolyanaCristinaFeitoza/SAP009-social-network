import { login } from '../../firebase/firebase.js';
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
      <h2 class='font-margin'>Entre no Friandy</h2>
      <form class='form'>
        <input type='email' name='email' id='email' class='btn-input-wb input-size' placeholder='Email' required/>
        <input type='password' name='password' id='senha' class='btn-input-wb input-size password' placeholder='Senha' required/>
        <button type='button' class='btn-purple enter' id='entrar'>Entrar</button>
        <p class='message-error'></p>
      </form>
      <footer>
        <a href="/#about" class="sobre">Sobre Friandy</a>
      </footer>
    </section>
  </section>   
  `;

  container.innerHTML = template;

  // clique botão voltar
  const arrow = container.querySelector('.seta');
  arrow.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  const valoresLogin = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    /* const mError = document.querySelector('.messagerror'); */
    login(email, senha)
      .then(() => {
        window.location.hash = 'feed';
      })
      .catch((error) => {
        const errorMessage = firebaseError(error);
        const errorParagraph = container.querySelector('.message-error');
        errorParagraph.innerHTML = errorMessage;
      });
    // userPersistente()
    //   .then(() => signInWithEmailAndPassword(auth, email, senha),
    //     window.location.hash = 'feed');
    //   }
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     console.log(errorCode);
    //     const errorMessage = error.message;
    //   });
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
