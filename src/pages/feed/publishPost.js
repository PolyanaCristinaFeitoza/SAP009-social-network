import { deletePost, updatePost, likePost } from '../../firebase/firestore';

export default (posts, container, loggedUser) => {
  container.innerHTML = '';
  posts.map((post) => {
    // add o toDate()
    const data = post.date.toDate();

    // pegando o dia que foi publicado
    const dia = data.getDate();

    // pegando o mês que foi publicado (+1 por que o js só conta 11 meses)
    const mes = data.getMonth() + 1;

    // pegando o ano que foi publicado
    const ano = data.getFullYear();

    const postContainer = document.createElement('section');
    postContainer.classList.add('post');

    const isAuthor = loggedUser === post.uid;
    const statusLikes = post.likes.includes(loggedUser);
    const templatePost = `
    <img src='/image/user.svg' alt='user' class='img-user-post'>
    <p class='username'>${post.name}</p>
    <p class='date'>${dia} / ${mes} / ${ano}</p>
    ${isAuthor ? `<button class='btn-edit'>
      <img src='/image/edit.svg' alt='edit' class='img-edit'>
    </button>` : ''} 
    <textarea id='message-post' name='message-post' class='message-post' rows='3' cols='30' disabled>${post.text}</textarea>
    <button class='btn-like'>
      ${statusLikes ? '<img src="/image/like-purple.svg" alt="like" class="img-like">' : '<img src="/image/like.svg" alt="like" class="img-like">'}
    </button>
    <p class='count'>${post.likes.length}</p>
    <button class='btn-comment'>
      <img src='/image/comment.svg' alt='comentario' class='img-coment'>
    </button>
    ${isAuthor ? `<button class='btn-delete'>
      <img src='/image/delete.svg' alt='delete' class='img-delete'>
    </button>` : ''}
        
    `;

    postContainer.innerHTML = templatePost;

    if (isAuthor) {
      const btnEdit = postContainer.querySelector('.img-edit');
      const editMessage = postContainer.querySelector('.message-post');
      btnEdit.addEventListener('click', async () => {
        if (editMessage.disabled === false) {
          editMessage.style.border = 'none';
          editMessage.disabled = true;
          await updatePost(post.id, editMessage.value, new Date());
        } else {
          editMessage.style.border = '2px solid #F5DEF9';
          editMessage.disabled = false;
        }
      });
      const btnDelete = postContainer.querySelector('.img-delete');

      btnDelete.addEventListener('click', async () => {
        if (window.confirm('Tem certeza?')) {
          await deletePost(post.id);
        }
      });
    }

    const btnLike = postContainer.querySelector('.btn-like');
    const imgLike = postContainer.querySelector('.img-like');
    const countLike = postContainer.querySelector('.count');
    btnLike.addEventListener('click', async () => {
      const status = await likePost(post.id, loggedUser);
      if (status.liked === true) {
        imgLike.setAttribute('src', '/image/like-purple.svg');
        countLike.innerHTML = status.count;
      }
    });
    btnLike.addEventListener('click', async () => {
      const status = await likePost(post.id, loggedUser);
      if (status.liked === false) {
        imgLike.setAttribute('src', '/image/like.svg');
        countLike.innerHTML = status.count;
      }
    });

    return container.appendChild(postContainer);
  });
};
