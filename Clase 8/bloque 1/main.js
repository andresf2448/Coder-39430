// estructura setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("hola");
// }, 5000);

// console.log("inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 1000);

// console.log("final");

// const boton = document.getElementById("boton");
// const mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 3000);
// });

// for(let letra of "hola"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for(let letra of "mundo"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 0);

// console.log("final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 3000);

// console.log("final");

// estructura setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
new Promise((resolve, reject) => {
  cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     valor ? resolve(["juan", "camila", "andres"]) : reject("Promesa rechazada");
//   });
// };

// console.log(futuro(false));

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor
//         ? resolve(["juan", "camila", "andres"])
//         : reject("Promesa rechazada");
//     }, 2000);
//   });
// };

// futuro(false)
//   .then((response) => console.log(response)) //captura exito
//   .catch((error) => console.log(error)) //captura error o rechazo
//   .finally(() => console.log("Proceso terminado")); //siempre se ejecuta

////////////////////////////////////////
//servidor
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 500 },
  { id: 4, nombre: "zapato", precio: 1250 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("Fallo en la conexion");
    }, 3000);
  });
};
/////////////////////////////////////////////////////////

traerDatos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      $${producto.precio}
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = "Error en la conexion, por favor intente luego!";
    document.body.append(div);
  });
