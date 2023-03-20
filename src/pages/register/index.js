/* Template criar conta*/
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Criando conta no Friandy</h2>
    <input type="text" name="nome" placeholder="Nome"/>
    <input type="email" name="email" placeholder="Email"/>
    <input type="password" name="password" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button">Criar Conta</button>
  `;

  container.innerHTML = template;

  return container;         
}