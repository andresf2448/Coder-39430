// localStorage.setItem("nombre", "andres"); //guarda la informacion en el storage
// localStorage.setItem("edad", 55);
// localStorage.setItem("valor", true);

// let nombre = localStorage.getItem("nombre"); //recupera la informacion del storage
// console.log(nombre);

// let edad = localStorage.getItem("edad");
// console.log(edad);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let arreglo = [1, 2, 3, 4, 4];
// localStorage.setItem("arreglo", arreglo);

// let objeto = { nombre: "Camila", edad: 18 };
// localStorage.setItem("objeto", objeto);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

// sessionStorage.setItem("nombre", "andres");

// localStorage.removeItem("nombre"); //elimina un solo elemento del storage
// localStorage.clear(); //Elimina todo el storage

// let objeto = { nombre: "Camila", edad: 18 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [1, 2, 3, 4, 3, 2];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1200 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardar(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let boton = document.getElementById("boton");
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  alert(`Bienvenid@ ${usuario}`);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
  alert(`Eres nuevo, Bienvenido ${usuario}`);
}

// boton.addEventListener("click", () => {
//   sessionStorage.removeItem("usuario");
//   alert("sesión cerrada exitosamente");
// })

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1200 },
// ];

// localStorage.setItem("carrito", JSON.stringify(carrito));
// let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
  carrito = JSON.parse(carritoStorage);
}else{
  let div = document.createElement("div");
  div.innerHTML = "<h1>No hay productos disponibles</h1>"
  document.body.append(div);
}

carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h1>Id: ${item.id}</h1>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `
  document.body.append(div);
});