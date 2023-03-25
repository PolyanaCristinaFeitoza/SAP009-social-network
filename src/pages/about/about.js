/* Pagina Sobre */
export default () => {
  const container = document.createElement('div');

  container.classList.add('div-sobre');

  const template = `
    <header>
      <h1>Friandy<h1>
      <img src='/image/logo.svg' alt='Logo' class='logo'> 
      <a href='/#login' class='sobre'>Entrar</a>
    </header>
    <section>
      <img src='/image/logo.svg' alt='Logo' class='logo'>
      <p class='sem-conta'>Não tem conta cadastrada?</p>
    </section>
  `;

  container.innerHTML = template;

  return container;
};
