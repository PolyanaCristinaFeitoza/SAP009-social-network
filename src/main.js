// Este es el punto de entrada de tu aplicacion
//import about from "./pages/about/about.html";
import home from "./pages/home/index.js";
import login from "./pages/login/index.js";
import register from "./pages/register/index.js";

//Root definido no arquivo index.html
const main = document.querySelector("#root")
/* console.log('root ', document.querySelector('form')) */

let logar = login();

//Função inicializar a página
const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = " ";
    switch(window.location.hash){
      case " ":
        main.appendChild(home());
        break;
      case "#login":
        main.appendChild(logar.container);
        break;
      case "#register":
        main.appendChild(register());
        break;
      // case "#sobre":
      //   main.appendChild(about());
      //   break;
      default: main.appendChild(home());
    }
  })
  
}

//Ao carregar a página
window.addEventListener("load", () => {
  main.appendChild(home());
  window.location.hash = "#";
  init();
})

  /* Importar funções de login do firebase */
const loginEmailPassword = async () =>{
  const loginEmail = (logar.inputEmail).value;
  console.log("email", loginEmail)
  const loginPassword = (logar.inputPassword).value;
  console.log("senha", loginPassword)

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user)
}
  

logar.btnLogin.addEventListener("click", loginEmailPassword);



