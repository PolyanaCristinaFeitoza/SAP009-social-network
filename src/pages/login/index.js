/* Template página login com email e senha*/
import {login} from "../../firebase.js"
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Entre no Friandy</h2>
    <input type="email" name="email" id="email" placeholder="Email"/>
    <input type="password" name="password" id="senha" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button" id="entrar">Entrar</button>
  `;

  container.innerHTML = template;

  const valoresLogin = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    login(email, senha)
    console.log(email, senha)
  }
  
  container.addEventListener('click', function(event) { //pegando todos os eventos de click
    if (event.target.id === 'entrar' && event.target.nodeName == 'BUTTON') valoresLogin() //event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
  })

  return container; 
}
