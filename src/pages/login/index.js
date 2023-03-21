/* Template página login com email e senha*/
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Entre no Friandy</h2>
    <input type="email" name="email" id="loginEmail" placeholder="Email"/>
    <input type="password" name="password" id="loginPassword" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button" id="enter">Entrar</button>
  `;

  container.innerHTML = template;

  const btnLogin = container.querySelector("#enter");
  const inputEmail = container.querySelector("#loginEmail");
  const inputPassword = container.querySelector("#loginPassword");
  

return {container, btnLogin, inputEmail, inputPassword};
           
}