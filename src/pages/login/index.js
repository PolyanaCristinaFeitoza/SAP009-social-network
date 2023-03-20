/* Template página login com email e senha*/
export default () => {
  const container = document.createElement("form");

  const template =`
    <h2>Entre no Friandy</h2>
    <input type="email" name="email" placeholder="Email"/>
    <input type="password" name="password" placeholder="Senha"/>
    <a>Esqueceu a senha?</a>
    <button type="button">Entrar</button>
  `;

  container.innerHTML = template;

  return container;         
}