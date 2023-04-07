import { userLogout, getSignedUser, auth } from '../../firebase/firebase';
import { addPost, loadPosts } from '../../firebase/firestore';
import { publishPost } from './post';

/* Pagina Feed */
export default async () => {
  const user1 = getSignedUser();
  console.log('passei', user1);
  if (user1 === 'Usuário não encontrado') {
    return window.location.href = ''
  }
  
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
    const user = auth.currentUser.displayName;
    console.log('dados do usuário', user);
    addPost(getPost, user);
  });

  /* Seleciona em qual section colocar o post. Tentei fazer ${não deu certo, chamei a função} */
  const loadTimeline = container.querySelector('.timeline');

 
  const carregar = await loadPosts();
  console.log('carregar feed', carregar)
  /* Chamar a função dos posts */
  const published =  publishPost(carregar);
  console.log('published', published)
  /* Agora adiciona novamente no feed */
  loadTimeline.innerHTML = published.join('');
  
 

  const logout = container.querySelector('.img-logout');
  logout.addEventListener('click', () => {
    userLogout()
      .then(() => {
        window.location.href = '';
      });
  });

  return container;
};
