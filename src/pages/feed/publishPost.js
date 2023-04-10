/* Eu tenho que pegar as informações do loadPosts e aparecer no feed.js */
/* Então será necessário exportar para o feed e lá chamar a função loadposts e
adicionar na section específica */
import { deletePost, updatePost } from '../../firebase/firestore';

/* publicar Post, excluir post */
export default (posts, container, user) => {
/*   console.log('dados', posts);
  console.log('dados', container);
  console.log('dados', user); */

  posts.map((post) => {
    /* console.log('post', post); */

    const postContainer = document.createElement('section');
    postContainer.classList.add('post');

    const isAuthor = user === post.uid;
    
    const templatePost = `
    <img src='/image/user.svg' alt='user' class='img-user'>
    <p class='username'>${post.name}</p>
    <p class='hours'>7h</p>
    ${isAuthor ? `<button class='img-edit'>
      <img src='/image/edit.svg' alt='edit'>
    </button>`: ''}
    
    <textarea id='message-post' name='message-post' class='message-post' rows='3' cols='30' disabled>${post.text}</textarea>
    <button class='img-like'>
      <img src='/image/like.svg' alt='like' class='img-like'>
    </button>
    <p class='count'>0</p>
    <button class='img-comment'>
      <img src='/image/comment.svg' alt='comentario'>
    </button>
    ${isAuthor ? `<button class='img-delete'>
      <img src='/image/delete.svg' alt='delete'>
    </button>` : ''}
        
    `;

    postContainer.innerHTML = templatePost;
    /* console.log('postContainer', postContainer); */

    /* console.log('templatePost', templatePost); */
    
    /* Somente o user que postou poderá apagar ou editar */
    if (isAuthor) {
      const btnEdit = postContainer.querySelector('.img-edit');
      /* console.log('btnEdit', btnEdit); */
      btnEdit.addEventListener('click', async () => { 
        const editMessage = postContainer.querySelector('.message-post');
        editMessage.disabled = false;
        
      /*   postContainer.addEventListener('click', (event) => {
          const clicouForaTextarea = !editMessage.post(event.target);
          if(clicouForaTextarea){
            editMessage.disabled = true;
          }
        }) */
        console.log('pode editar')
      });

      postContainer.addEventListener('click', async () => {
        const btnEdit = postContainer.querySelector('.img-edit');
        if(!btnEdit){
          editMessage.setAttribute('disabled', true);
          await updatePost (post.id, editMessage);
          console.log('foi editado?')
        }

        });

      


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