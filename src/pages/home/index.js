/* Template página inicial*/
import { entrarComGoogle } from "../../firebase";
export default () => {
    const container = document.createElement("form");

    container.classList.add("form");

    const template = `
    <h2 class="entre">Entre no Friandy</h2>
    <button type="button" class="botao-login" id="google">Entrar com Google</button>
    <p>ou</p>
    <button type="button" class="botao-login" id="login">Entrar com Email</button>
    <p class="sem-conta">Não tem conta cadastrada?</p>
    <button type="button" id="register">Criar Conta</button>
  `;

    container.innerHTML = template;

    //Adicionando uma hash.
    const buttonLogin = container.querySelector("#login");
    buttonLogin.addEventListener("click", () => {
      window.location.hash = 'login';
    })

    const buttonRegister = container.querySelector("#register");
    buttonRegister.addEventListener("click", () => {
      window.location.hash = 'register';
})

    const clicarGoogle = () => {
      const provider = document.getElementById('google')
      provider.addEventListener('click', () => {
          entrarComGoogle()
      })
      
    }

    container.addEventListener('click', function(event) { //pegando todos os eventos de click
      if (event.target.id === 'google' && event.target.nodeName == 'BUTTON') clicarGoogle() //event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
    })
        return container;
    }

/* console.log('home ', document.querySelector('form')) */




