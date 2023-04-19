import { userLogout, getSignedUser, auth } from '../../firebase/firebase';
import { addPost } from '../../firebase/firestore';
import { loadPosts } from '../../firebase/loadPosts';

export default () => {
  const logged = getSignedUser();
  if (logged === 'Usuário não encontrado') {
    window.location.href = '';
  }

  const container = document.createElement('main');
  container.classList.add('background-feed');
  const template = `
  <header class='bg-header'>
    <img src='/image/logo.svg' alt='Logo' class='img-logo'>
  </header>
  <section class='conteudo'>
    <section class='add-post'>
      <form action='' id= 'postForm' class='form-post'>
        <img src='/image/user.svg' alt='user' class='img-user'>
        <textarea id='post' name='post' placeholder='No que está pensando...' class='text-area' rows='2' cols='30' required></textarea>
        <button type ='button' class='btn-add'>
            <img src='/image/teste.svg' alt='adicionar' class='img-add'>
        </button>
      </form>
    </section>
   <section class='timeline'></section>
  </section>
  <nav class='nav-feed'>
    <a href="/#feed" class='nav-home'>
      <img src='/image/home.svg' alt='home' class='img-home'>
    </a>
    <a href="/#about" class='nav-hash'>
      <img src='/image/hash.svg' alt='hash' class='img-hash'>
    </a>
    <a href="/#home" class='nav-logout'>
      <img src='/image/logout.svg' alt='sair' class='img-logout'>
    </a>
  </nav>
  `;

  container.innerHTML = template;

  const newPost = container.querySelector('.btn-add');
  newPost.addEventListener('click', () => {
    const getText = container.querySelector('#post');
    if (getText.value === '') {
      /* const messageError = container.querySelector('.message-error'); */
      alert('Preencha o campo antes de publicar');
    } else {
      const username = auth.currentUser.displayName;
      const uidUser = auth.currentUser.uid;
      addPost(getText.value, username, uidUser, new Date());
    }
    container.querySelector('#post').value = '';
  });
  const loadTimeline = container.querySelector('.timeline');
  const uidUser = auth.currentUser.uid;
  loadPosts(loadTimeline, uidUser);

  const backToHome = container.querySelector('.nav-home');
  backToHome.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });


  const logout = container.querySelector('.nav-logout');
  logout.addEventListener('click', () => {
    userLogout()
      .then(() => {
        window.location.href = '';
      });
  });

  return container;
};
