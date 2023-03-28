/* Pagina Feed */
export default () => {
  const container = document.createElement('main');

  container.classList.add('background-feed');

  const template = `
  <header class='bg-header'>
    <img src='/image/logo.svg' alt='Logo' class='logo'>
  </header>
  <section>
    <form>
      <img src='/image/user.svg' alt='user'>
      <input type='text' id="post" name="post" placeholder='No que está pensando...'>
      <button>
          <img src='/image/add.svg' alt='adicionar'>
      </button>
    </form>
  </section>
  <section>
    <img src='/image/user.svg' alt='user'>
    <p></p>
    <p><p>
    <img src='/image/edit.svg' alt='edit'>
    <p><p>
    <img src='/image/like.svg' alt='like'>
    <img src='/image/comment.svg' alt='comentario'>
    <img src='/image/delete.svg' alt='delete'>
  </section>
  <footer>
    <img src='/image/home.svg' alt='home'>
    <img src='/image/hash.svg' alt='hash'>
    <img src='/image/logout.svg' alt='sair'>
  </footer>
  `;

  container.innerHTML = template;

  return container;
};
