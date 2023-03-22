/* Template criar conta*/
import { criarConta } from "../../firebase";
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Criando conta no Friandy</h2>
    <input type="text" name="nome" id="nome" placeholder="Nome"/>
    <input type="email" name="email" id="email" placeholder="Email"/>
    <input type="password" name="password" id="senha" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button" id="criarConta">Criar Conta</button>
  `;

  container.innerHTML = template;

  const valoresCriarConta = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    criarConta(email, senha)
    console.log(email, senha)
  }
  
  container.addEventListener('click', function(event) { //pegando todos os eventos de click
    if (event.target.id === 'criarConta' && event.target.nodeName == 'BUTTON') valoresCriarConta() //event. target é o elemento no qual o evento ocorreu ou o elemento que acionou o evento. Já o nodeName mostra se o elemento clicado é um input ou boutton.
  })

  return container;         
}
