/* Template página inicial*/
export default () => {
    const container = document.createElement("form");

    const template = `
    <h2>Entre no Friandy</h2>
    <button type="button">Entrar com Google</button>
    <p>ou</p>
    <button type="button" id="login">Entrar com Email</button>
    <p>Não tem conta cadastrada?</p>
    <button type="button" id="register">Criar Conta</button>
  `;

    container.innerHTML = template;

    //Adicionando uma hash.
    const buttonLogin = container.querySelector("#login");
    console.log('botão login', buttonLogin)
    buttonLogin.addEventListener("click", () => {
      window.location.hash = 'login';
    })

    const buttonRegister = container.querySelector("#register");
    buttonRegister.addEventListener("click", () => {
      window.location.hash = 'register';
})

    return container;
}

console.log('home ', document.querySelector('form'))




