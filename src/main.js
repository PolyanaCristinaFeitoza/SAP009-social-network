import "./firebase.js"
// Este es el punto de entrada de tu aplicacion

import home from "./pages/home/index.js";
import login from "./pages/login/index.js";
import register from "./pages/register/index.js";

//Root definido no arquivo index.html
const main = document.querySelector("#root")

//Adicioando hash nos buttons

console.log('root ', document.querySelector('form'))

//Função inicializar a página
const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = " ";
    switch(window.location.hash){
      case " ":
        main.appendChild(home());
        break;
      case "#login":
        main.appendChild(login());
        break;
      case "#register":
        main.appendChild(register());
        break;
      default: main.appendChild(home());
    }
  })
  
}

//Ao carregar a página
window.addEventListener("load", () => {
  main.appendChild(home());
  init();
})


