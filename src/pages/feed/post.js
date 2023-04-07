/* Eu tenho que pegar as informações do loadPosts e aparecer no feed.js */
/* Então será necessário exportar para o feed e lá chamar a função loadposts e
adicionar na section específica */

export function publishPost(post) {
  const arrayPost = [];
  post.forEach((doc) => {
/*     console.log(doc.id);
    console.log(doc.data().name) */
    arrayPost.push( `
    <section class='post' id='${doc.id}'>
      <img src='/image/user.svg' alt='user' class='img-user'>
      <p class='username'>${doc.data().name}</p>
      <p class='hours'>7h<p>
      <button class='img-edit'>
        <img src='/image/edit.svg' alt='edit'>
      </button>
      <p class='message-post'>${doc.data().text}</p>
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
    </section>
    `);
  });
  return arrayPost;
}
