/* Pagina Feed */
export default () => {
  const container = document.createElement('main');

  container.classList.add('background-feed');

  const template = `
  <header class='bg-header'>
    <img src='/image/logo.svg' alt='Logo' class='logo'>
  </header>
  <section class='conteudo'>
    <section>
      <form>
        <img src='/image/user.svg' alt='user'>
        <textarea type='text' id='post' name='post' placeholder='No que está pensando...' rows='2' cols='30'></textarea>
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
  </section>
  <footer class='nav-feed'>
    <img src='/image/home.svg' alt='home' class='home'>
    <img src='/image/hash.svg' alt='hash' class='hash'>
    <img src='/image/logout.svg' alt='sair' class='sair'>
  </footer>
  `;

  container.innerHTML = template;

  return container;
};
