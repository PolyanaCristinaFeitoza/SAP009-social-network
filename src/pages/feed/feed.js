import { async } from 'regenerator-runtime';
import { userLogout, getSignedUser, auth } from '../../firebase/firebase';
import { addPost, loadPosts } from '../../firebase/firestore';
import publishPost  from './publishPost';

/* Pagina Feed */
export default async () => {
  
  const logged = getSignedUser();
  /* console.log('passei', logged); */
  if (logged === 'Usuário não encontrado') {
    return window.location.href = ''
  }

/*   let nowDate = new Date();
  let expiryDate = new Date(new Date().setHours(new Date().getHours() + 2));
  let expiryDate2 = new Date(Date.now() + 2 * (60 * 60 * 1000) );

  console.log('now', nowDate);
  console.log('expiry', expiryDate);
  console.log('expiry 2', expiryDate2); */
 
  const container = document.createElement('main');
  container.classList.add('background-feed');
  const template = `
  <header class='bg-header'>
    <img src='/image/logo.svg' alt='Logo'>
  </header>
  <section class='conteudo'>
    <section class='add-post'>
      <form action='' id= 'postForm'>
        <img src='/image/user.svg' alt='user'>
        <textarea id='post' name='post' placeholder='No que está pensando...' class='text-area' rows='2' cols='30'></textarea>
        <button type ='button' class='btn-add'>
            <img src='/image/teste.svg' alt='adicionar'>
        </button>
      </form>
    </section>
   <section class='timeline'></section>
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

  const newPost = container.querySelector('.btn-add');
  newPost.addEventListener('click', () => {
    const getPost = container.querySelector('#post');
    const username = auth.currentUser.displayName;
    const uidUser = auth.currentUser.uid;
 /*    console.log('dados do usuário', username);
    console.log('dados do usuário', uidUser); */
    addPost(getPost, username, uidUser);
  });
  /* Seleciona em qual section colocar o post. Tentei fazer ${não deu certo, chamei a função} */

  const data = await loadPosts();
  /* console.log('dados doc', data); */
  const loadTimeline = container.querySelector('.timeline');
  const uidUser = auth.currentUser.uid;
  publishPost(data, loadTimeline, uidUser);

  const logout = container.querySelector('.img-logout');
  logout.addEventListener('click', () => {
    userLogout()
      .then(() => {
        window.location.href = '';
      });
  });

  return container;
};
