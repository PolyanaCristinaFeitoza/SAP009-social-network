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
        <img src='/image/feed.svg' alt='feed da rede social friandy' class='img-test'>
        <p class='p-about'>Somos uma rede social <br>voltada para pessoas <br> apaixonadas por doces</p>
      </section>
      <section class='txt-img img-txt'>
      <p class='p-about'>Aqui você poderá compartilhar sobre os seus doces</p>
      <img src='/image/feed.svg' alt='feed da rede social friandy' class='img-test'>      
    </section>
  `;

  container.innerHTML = template;

  return container;
};
