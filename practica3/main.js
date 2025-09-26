
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

  // simulacro de API
 
 function simularPeticionAPI() 
 {
   return new Promise(resolve =>
     {
      setTimeout(() => 
        {
          resolve("Datos recibidos correctamente");
        }, 5000);
     });
}

async function obtenerDatos() 
{
  console.log("Cargando datos...")
  const datos = await simularPeticionAPI();
  console.log(datos);
}

obtenerDatos();

