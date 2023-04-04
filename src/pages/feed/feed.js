import { userLogout } from '../../firebase/firebase';
import { addPost } from '../../firebase/firestore'

/* Pagina Feed */
export default () => {
  const container = document.createElement('main');

  container.classList.add('background-feed');

  const template = `
  <header class='bg-header'>
    <img src='/image/logo.svg' alt='Logo'>
  </header>
  <section class='conteudo'>
    <section class='add-post'>
      <form>
        <img src='/image/user.svg' alt='user'>
        <textarea id='post' name='post' placeholder='No que está pensando...' class='text-area' rows='2' cols='30'></textarea>
        <button type ='button' class='btn-add'>
            <img src='/image/teste.svg' alt='adicionar'>
        </button>
      </form>
    </section>
    <section class='post'></section>
  </section>
  <nav class='nav-feed'>
    <a href="/#feed" class='img-home'>
      <img src='/image/home.svg' alt='home'>
    </a>
    <a href="/#hash" class='img-hash'>
      <img src='/image/hash.svg' alt='hash'>
    </a>
    <a href="/#home" class='img-logout'>
      <img src='/image/logout.svg' alt='sair'>
    </a>
  </nav>
  `;

  container.innerHTML = template;

  /* Quando o usuário clicar em logout, chamar a função para deslogar */

  const valorLogout = container.querySelector('.img-logout');
  valorLogout.addEventListener('click', () => {
    userLogout()
      .then(() => {
        window.location.hash = 'home'
      });
  });

  /* Printar na tela o novo post da mensagem que esta no banco de dados 
    Igual no data-lovers vamos escrever um template printar informaçãoes
    1. Pegar a section onde quer iniciar
    2. criar um template
  */

  
  
  /* Quando o usuário clicar no totão adicionar post,
  pegar o valor do textarea e
  chamar a função para armazenar no banco de dados*/


  const newPost = container.querySelector('.btn-add');
  newPost.addEventListener('click', () => {
    const getPost = container.querySelector('#post');
    addPost(getPost);
  });


/*   const editPost = container.querySelector('.img-edit');
  editPost.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  const btnLike = container.querySelector('.img-like');
  btnLike.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  const btnDelete = container.querySelector('.img-delete');
  btnDelete.addEventListener('click', () => {
    window.location.hash = '#feed';
  });
 */
  return container;
};
