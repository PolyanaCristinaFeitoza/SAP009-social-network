/* Pagina Sobre */
export default () => {
  const container = document.createElement('main');

  container.classList.add('main-about');

  const template = `
    <header class='header-about'>
      <h1 class='name-about'>Friandy</h1>
      <img src='/image/logo.svg' alt='Logo' class='logo mt-1rem'> 
      <a href='/#home' class='entrar-about'>Entrar</a>
    </header>
    <section class='main-section'>
      <section class='img-txt'>
        <img src='/image/about.svg' alt='feed da rede social friandy' class='img-test'>
        <p class='text-one'>Somos uma rede social <br>voltada para pessoas <br> apaixonadas por doces</p>
      </section>
      <section class='txt-img img-txt'>
        <p class='text-two'>Aqui você poderá compartilhar sobre os seus doces</p> 
        <img src='/image/compartilhar.svg' alt='feed da rede social friandy' class='img-test'>      
      </section>
      <section class='txt-img img-txt'>
        <img src='/image/doces.svg' alt='feed da rede social friandy' class='img-batedeira'>  
        <p class='text-tree'>Ver receitas e curtir os posts</p> 
      </section>
      <p class='text-about'>Sobre as Desenvolvedoras:</p> 
      <section class='dev'>
        <img src='/image/dev-poly.png' alt='imagem poly' class='img-dev'>  
        <p class='text-dev'>Me chamo Polyana Feitoza, tenho 21 anos e sou do Paraná. Sempre foi apaixonada por doces e o meu favorito é donnuts.</p> 
        <a class='icon-git' href="https://github.com/PolyanaCristinaFeitoza" target='_blank'> <img src='/image/icon-git.svg' alt='icone do gitHub' class='img-git'></a> 
        <a class='icon-linkedin' href="https://www.linkedin.com/in/polyftza/" target='_blank'> <img src='/image/icon-linkedin.svg' alt='icone do gitHub' class='img-linkedin'></a>
      </section>
      <section class='dev'>
        <img src='/image/dev-adri.png' alt='imagem adri' class='img-dev'>  
        <p class='text-dev'>Me chamo Adriana Oliveira, tenho 26 anos e sou de Fortaleza. Nãe consigo esperar até a festa junina para comer meu doce favorito que é o bolo de macaxeira.</p>
        <a class='icon-git' href="https://github.com/AdrianaKatarina" target='_blank'> <img src='/image/icon-git.svg' alt='icone do gitHub' class='img-git'></a> 
        <a class='icon-linkedin' href="https://www.linkedin.com/in/adroliveira/" target='_blank'> <img src='/image/icon-linkedin.svg' alt='icone do gitHub' class='img-linkedin'></a>
      </section>
    `;

  container.innerHTML = template;

  return container;
};
