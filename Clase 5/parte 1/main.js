// console.log(document);
// let div = document.getElementById("application");
// console.log(div.innerText);
// console.log(div.innerHTML);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerText);
// console.log(parrafo.innerHTML);

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// let containers = document.getElementsByTagName("div");
// console.log(containers[0].innerHTML);
// console.log(containers[1].innerHTML);
// console.log(containers[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const li of perritos){
//   console.log(li.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola Coder</h1>";

// let seccion = prompt("INgrese la seccion deseada");
// let saludo = document.getElementById("saludo");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "verde";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a favoritos</h1>";
//   saludo.className = "amarillo";
// } else {
//   saludo.innerHTML = "<h1>Bienvenido a mi super pagina</h1>";
//   saludo.className = "azul";
//   // saludo.classList.add(nombre-clase);
// }

//CREACIÓN DE NODOS
// let container = document.getElementById("container");
// let parrafo = document.createElement("p"); //creacion de la etiqueta (primer paso)
// parrafo.innerHTML = "<h2>Hola a todos</h2>"; //Agregado de contenido (segundo paso)
// document.body.append(parrafo); //asignacion del padre
// // container.append(parrafo);

//ELIMINAR ELEMENTOS
// let container = document.getElementById("container");
// container.remove();
// let producto = prompt("INgrese el nombre del producto");
// let container = document.getElementById("container");
// let productos = ["zapato", "pantalon", "camisa", "gorra"];
// productos.push(producto);

// productos.forEach(item => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   container.append(li);
// });

let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

let container = document.getElementById("container");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1550 },
  { id: 3, nombre: "gorra", precio: 800 },
  { id: 4, nombre: "zapato", precio: 150 },
];

let objeto = {
  id: productos.length + 1,
  nombre,
  precio
};
productos.push(objeto);

productos.forEach(item => {
  let producto = document.createElement("div");
  producto.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  container.append(producto);
});