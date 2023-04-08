/* Eu tenho que pegar as informações do loadPosts e aparecer no feed.js */
/* Então será necessário exportar para o feed e lá chamar a função loadposts e
adicionar na section específica */
import { deletePost } from '../../firebase/firestore';

/* publicar Post, excluir post */
export default (posts, container, user) => {
/*   console.log('dados', posts);
  console.log('dados', container);
  console.log('dados', user); */

  posts.map((post) => {
    /* console.log('post', post); */

    const postContainer = document.createElement('section');
    postContainer.classList.add('post');

     const templatePost = `
      <img src='/image/user.svg' alt='user' class='img-user'>
      <p class='username'>${post.name}</p>
      <p class='hours'>7h<p>
      <button class='img-edit'>
        <img src='/image/edit.svg' alt='edit'>
      </button>
      <p class='message-post'>${post.text}</p>
      <button class='img-like'>
        <img src='/image/like.svg' alt='like' class='img-like'>
      </button>
      <p class='count'>0</p>
      <button class='img-comment'>
        <img src='/image/comment.svg' alt='comentario'>
      </button>
      <button class='img-delete'>
        <img src='/image/delete.svg' alt='delete'>
      </button>    
    `;

    postContainer.innerHTML = templatePost;
    /* console.log('postContainer', postContainer); */

    /* console.log('templatePost', templatePost); */
    
    /* Somente o user que postou poderá apagar ou editar */
    if (user === post.uid) {
      const btnDelete = postContainer.querySelector('.img-delete');
      /* console.log('btnDelete', btnDelete); */

/*       if(btnDelete.style.display === "none") {
        btnDelete.style.display = "block";
      } else {
        btnDelete.style.display = "none";
      } */

      btnDelete.addEventListener('click', async () => {
        if(window.confirm('Tem certeza?')){
          await deletePost(post.id)
        }
      });
    }
    return container.appendChild(postContainer);
  });
}