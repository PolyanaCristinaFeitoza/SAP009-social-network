/* Template criar conta*/
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Criando conta no Friandy</h2>
    <input type="text" name="nome" placeholder="Nome"/>
    <input type="email" name="email" id="email" placeholder="Email"/>
    <input type="password" name="password" id="password" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button" id="createAcount">Criar Conta</button>
  `;

  container.innerHTML = template;

  const btnCreate = container.querySelector("#createAcount");
    console.log('botão criar conta', btnCreate)
  
  const inputEmail = container.querySelector("#email").value;
  console.log("email", inputEmail)

  const inputPassword = container.querySelector("#password").value;
  console.log("senha", inputPassword)


  btnCreate.addEventListener("click", () => {
    const email = inputEmail.value;
    const senha = inputPassword.value;
    
  })

  return container;         
}



