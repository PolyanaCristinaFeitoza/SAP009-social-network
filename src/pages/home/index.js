/* Template página inicial*/
export default () => {
    const container = document.createElement("form");

    container.classList.add("form");

    const template = `
    <h2 class="entre">Entre no Friandy</h2>
    <button type="button" class="botao-login">Entrar com Google</button>
    <p class="centralizar">ou</p>
    <button type="button" class="botao-login" id="login">Entrar com Email</button>
    <p class="sem-conta">Não tem conta cadastrada?</p>
    <button type="button" id="register">Criar Conta</button>
  `;

    container.innerHTML = template;

    //Adicionando uma hash.
    const buttonLogin = container.querySelector("#login");
    /* console.log('botão login', buttonLogin) */
    buttonLogin.addEventListener("click", () => {
      window.location.hash = 'login';
    })

    const buttonRegister = container.querySelector("#register");
    buttonRegister.addEventListener("click", () => {
      window.location.hash = 'register';
})

    return container;
}

/* console.log('home ', document.querySelector('form')) */




