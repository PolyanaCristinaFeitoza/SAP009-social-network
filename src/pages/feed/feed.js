import { userLogout, getSignedUser } from '../../firebase/firebase';
import { addPost } from '../../firebase/firestore';

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
    <section class='post'>
      <img src='/image/user.svg' alt='user' class='img-user'>
      <p class='username'></p>
      <p class='hours'>7h<p>
      <button class='img-edit'>
        <img src='/image/edit.svg' alt='edit'>
      </button>
      <p class='message-post'>Oi! Hoje fiz uma torta de amora!</p>
      <button class='img-like'>
        <img src='/image/like.svg' alt='like' class='img-like'>
      </button>
      <p class='count'>0</p>
      <button class='img-comment'>
        <img src='/image/comment.svg' alt='comentario'>
      </button>
      <button class='img-delete'>
        <img src='/image/delete.svg' alt='delete'>
      </button>    
    </section>
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
  const valorLogout = container.querySelector('.img-logout');
  valorLogout.addEventListener('click', () => {
    userLogout()
      .then(() => {
        window.location.hash = 'home';
      });
  });

  const newPost = container.querySelector('.btn-add');
  newPost.addEventListener('click', () => {
    const getPost = container.querySelector('#post');
    addPost(getPost);
  });

  const editPost = container.querySelector('.img-edit');
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

  window.addEventListener('load', () => {
    const user = getSignedUser();
    if (window.location.hash === '#feed') {
      console.log(user);
    } else {
      console.log('erro');
    }
  });
  return container;
};
