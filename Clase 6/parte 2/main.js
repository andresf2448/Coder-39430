/* 
condicionales

if else if

if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que la condicion2 sea verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores fueron verdaderas
}
*/

// if(""){
//   console.log("entramos");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "mariano"){
//   alert("El usuario es incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// function saludar(nombre, apellido){
//   console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar("Camila", "Gomez");

// const saludar = (nombre, apellido) => {
//   console.log(`Hola ${nombre} ${apellido}`);
// };

// const sumar = (num1, num2) => num1 + num2;
// const restar = (num1, num2) => num1 - num2;
// const multiplicar = (num1, num2) => num1 * num2;
// const dividir = (num1, num2) => num1 / num2;

// function Persona(nombre, edad){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// class Persona{
//   constructor(nombre, edad){
//     this.edad = edad;
//     this.nombre = nombre;
//     this.color = "amarillo";
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", "velasquez");
// persona1.hablar();
// console.log(persona1.nombre);
// console.log(persona1.edad);

// class Persona {
//   constructor(info) {
//     this.edad = info.edad;
//     this.nombre = info.nombre;
//     this.color = "amarillo";
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const perosna1 = new Persona({
//   nombre: "andres",
//   edad: 26,
// });

// let usuarios;

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   let nombre = inputs[0].value;
//   let edad = inputs[1].value;

//   let objeto = {
//     nombre,
//     edad,
//   };

//   let usuarioStorage = localStorage.getItem("usuarios");

//   if (usuarioStorage) {
//     usuarios = JSON.parse(usuarioStorage);
//   }else{
//     usuarios = [];
//   }

//   usuarios.push(objeto);
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
// });

// let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//   let usuarios = JSON.parse(localStorage.getItem("usuarios"));

//   usuarios.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>${item.nombre}</h2>
//       <h3>${item.edad}</h3>
//     `;

//     document.body.append(div);
//   });
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1200 },
// ];

// let nombre = "camisa";
// let arreglo = [];

// let encontrado = productos.find(item => item.nombre === nombre);
// arreglo.push(encontrado);
// localStorage.setItem("carrit", JSON.stringify(arreglo));

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "media", precio: 850 },
  { id: 4, nombre: "zapato", precio: 1200 },
];

const agregar = (id) => {
  let encontrado = productos.find((item) => item.id === id);
  console.log(encontrado);
};

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>${item.id}</h2>
    <p>${item.nombre}</p>
    <b>$${item.precio}</b>
    <button id="boton${item.id}">Agregar</button>
  `;

  document.body.append(div);

  let boton = document.getElementById(`boton${item.id}`);
  boton.addEventListener("click", () => agregar(item.id));
});
