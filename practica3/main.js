// Ejercicio A

import { restar } from "./utils.js";

console.log("probando la funcion restar");
console.log("10-5 =", restar(6, 5));
console.log("20-8 =", restar(17, 7));
console.log("7-3 =", restar(9, 4));
console.log("100-25 =", restar(58, 28));

//Ejercicio BVerrificar usuario

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarUsuario("admin")
  .then(res => console.log(res))   //  Acceso concedido
  .catch(err => console.error(err));

verificarUsuario("Ivan")
  .then(res => console.log(res))   //  Acceso denegado
  .catch(err => console.error(err));


