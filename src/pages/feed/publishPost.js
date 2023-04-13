/* Eu tenho que pegar as informações do loadPosts e aparecer no feed.js */
/* Então será necessário exportar para o feed e lá chamar a função loadposts e
adicionar na section específica */
import {
  deletePost,
  updatePost,
  likeCounter,
  deslikeCounter,
  updateTimestamp,
} from '../../firebase/firestore';
/* publicar Post, excluir post */
export default (posts, container, user) => {
/*   console.log('dados', posts);
  console.log('dados', container);
  console.log('dados', user); */

  posts.map((post) => {
    // chamando a função de data e hora
    updateTimestamp(post.date);

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

    const isAuthor = user === post.uid;
    const templatePost = `
    <img src='/image/user.svg' alt='user' class='img-user'>
    <p class='username'>${post.name}</p>
    <p class='hours'>${dia} | ${mes} | ${ano}</p>
    ${isAuthor ? `<button class='btn-edit'>
      <img src='/image/edit.svg' alt='edit' class='img-edit'>
    </button>` : ''} 
    <textarea id='message-post' name='message-post' class='message-post' rows='3' cols='30' disabled>${post.text}</textarea>
    <button class='btn-like'>
      <img src='/image/like.svg' alt='like' class='img-like'>
    </button>
    <p class='count'>${post.likes}</p>
    <button class='btn-comment'>
      <img src='/image/comment.svg' alt='comentario' class='img-coment'>
    </button>
    ${isAuthor ? `<button class='btn-delete'>
      <img src='/image/delete.svg' alt='delete' class='img-delete'>
    </button>` : ''}
        
    `;

    postContainer.innerHTML = templatePost;
    /* console.log('postContainer', postContainer); */

    /* console.log('templatePost', templatePost); */
    /* Somente o user que postou poderá apagar ou editar */
    if (isAuthor) {
      const btnEdit = postContainer.querySelector('.img-edit');
      const editMessage = postContainer.querySelector('.message-post');
      /* console.log('btnEdit', btnEdit); */
      btnEdit.addEventListener('click', async () => {
        if (editMessage.disabled === false) {
          editMessage.style.border = 'none';
          editMessage.disabled = true;
          await updatePost(post.id, editMessage);
        } else {
          editMessage.style.border = '2px solid #F5DEF9';
          editMessage.disabled = false;
        }
        /*   postContainer.addEventListener('click', (event) => {
          const clicouForaTextarea = !editMessage.post(event.target);
          if(clicouForaTextarea){
            editMessage.disabled = true;
          }
        }) */
        console.log('pode editar');
      });
      const btnDelete = postContainer.querySelector('.img-delete');
      /* console.log('btnDelete', btnDelete); */

      btnDelete.addEventListener('click', async () => {
        if (window.confirm('Tem certeza?')) {
          await deletePost(post.id);
        }
      });
    }
    /* console.log('post.likes', post.likes); */

    const btnLike = postContainer.querySelector('.btn-like');
    
    const imgLike = postContainer.querySelector('.img-like');
   /*  var align = imgLike.getAttribute('src');
    console.log(align) */
    btnLike.addEventListener('click', async () => {
      if(imgLike.getAttribute('src') === '/image/like.svg'){
        console.log('clique botao like', btnLike);
        await likeCounter(post.id, post.likes);
        console.log(likeCounter(post.id, post.likes));
        const countLike = postContainer.querySelector('.count');
        countLike.innerHTML = post.likes + 1;
        imgLike.setAttribute('src', '/image/like-purple.svg');
      } else {
        await deslikeCounter(post.id, post.likes);
        const countDeslike = postContainer.querySelector('.count');
        countDeslike.innerHTML = post.likes - 1;
        imgLike.setAttribute('src', '/image/like.svg');
      }
    });

    return container.appendChild(postContainer);
  });
};
