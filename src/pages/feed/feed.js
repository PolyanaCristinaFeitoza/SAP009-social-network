/* Pagina Feed */
export default () => {
  const container = document.createElement('div');

  container.classList.add('div-sobre');

  const template = `
    <header>
      <h1>Deu certo<h1>
    </header>
  `;

  container.innerHTML = template;

  return container;
};
