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
        <textarea id="post" name="post" placeholder='No que está pensando...' class='text-area' rows='2' cols='30'></textarea>
        <button class='btn-add'>
            <img src='/image/teste.svg' alt='adicionar'>
        </button>
      </form>
    </section>
    <section class='post'>
      <img src='/image/user.svg' alt='user' class='img-user'>
      <p></p>
      <p><p>
      <img src='/image/edit.svg' alt='edit' class='img-edit'>
      <p><p>
      <img src='/image/like.svg' alt='like' class='img-like'>
      <img src='/image/comment.svg' alt='comentario' class='img-coment'>
      <img src='/image/delete.svg' alt='delete' class='img-delete'>
    </section>
  </section>
  <footer class='nav-feed'>
    <img src='/image/home.svg' alt='home' class='img-home'>
    <img src='/image/hash.svg' alt='hash' class='img-hash'>
    <img src='/image/logout.svg' alt='sair' class='img-logout'>
  </footer>
  `;

  container.innerHTML = template;

  return container;
};
