import logoImg from '../../image/logo.svg';
import aboutImg from '../../image/about.svg';
import compartilharImg from '../../image/compartilhar.svg';
import docesImg from '../../image/doces.svg';
import devPolyImg from '../../image/dev-poly.png';
import devAdriImg from '../../image/dev-adri.png';
import iconGitHubImg from '../../image/icon-git.svg';
import iconLinkedinImg from '../../image/icon-linkedin.svg';

export default () => {
  const container = document.createElement('main');

  container.classList.add('main-about');

  const template = `
    <header class='header-about'>
      <h1 class='name-about'>Friandy</h1>
      <img src=${logoImg} alt='Logo' class='logo mt-1rem'> 
      <a href='/#home' class='entrar-about'>Entrar</a>
    </header>
    <section class='main-section'>
      <section class='img-txt'>
        <img src=${aboutImg} alt='feed da rede social friandy' class='img-test'>
        <p class='text-one'>Somos uma rede social <br>voltada para pessoas <br> apaixonadas por doces</p>
      </section>
      <section class='txt-img img-txt'>
        <p class='text-two'>Aqui você poderá compartilhar sobre os seus doces</p> 
        <img src=${compartilharImg } alt='feed da rede social friandy' class='img-test'>      
      </section>
      <section class='txt-img img-txt'>
        <img src=${docesImg} alt='feed da rede social friandy' class='img-batedeira'>  
        <p class='text-tree'>Ver receitas e curtir os posts</p> 
      </section>
      <p class='text-about'>Sobre as Desenvolvedoras:</p> 
      <section class='dev-poly'>
        <img src=${devPolyImg} alt='imagem poly' class='img-dev'>  
        <p class='text-dev'>Me chamo Polyana Feitoza,<br>tenho 21 anos e sou do Paraná.<br>Sempre foi apaixonada por doces<br> e o meu favorito é donnuts.</p> 
        <a class='icon-git' href="https://github.com/PolyanaCristinaFeitoza" target='_blank'> <img src=${iconGitHubImg} alt='icone do gitHub' class='img-git'></a> 
        <a class='icon-linkedin' href="https://www.linkedin.com/in/polyftza/" target='_blank'> <img src=${iconLinkedinImg} alt='icone do gitHub' class='img-linkedin'></a>
      </section>
      <section class='dev-adri'>
        <img src=${devAdriImg} alt='imagem adri' class='img-dev'>  
        <p class='text-dev'>Me chamo Adriana Oliveira, tenho 26 anos e sou de Fortaleza. Nãe consigo esperar até a festa junina para comer meu doce favorito que é o bolo de macaxeira.</p>
        <a class='icon-git' href="https://github.com/AdrianaKatarina" target='_blank'> <img src=${iconGitHubImg} alt='icone do gitHub' class='img-git'></a> 
        <a class='icon-linkedin' href="https://www.linkedin.com/in/adroliveira/" target='_blank'> <img src=${iconLinkedinImg} alt='icone do gitHub' class='img-linkedin'></a>
      </section>
    `;

  container.innerHTML = template;

  return container;
};
