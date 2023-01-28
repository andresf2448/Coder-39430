// let nombre = "Luis";
// let edad = 30;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}

*/

// const persona1 = {
//   nombre: "Luis",
//   edad: 30,
//   direccion: "AV",
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// let clave = "nombre"
// console.log(persona1[clave]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);

// function Persona(nombrePersona, edad, direccion){
//   this.nombre = nombrePersona;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("Luis", 30, "AV");
// const persona2 = new Persona("Marina", 30, "AV");
// console.log(persona1.edad);
// console.log(persona2.nombre);

// function Producto(nombre, imagen, precio){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor Huawei ...", "http:asdf,ljkhbsfd", 649197);

function Producto(info){
  this.nombre = info.nombre;
  this.precio = info.precio;
  this.imagen = info.imagen;
  this.vendido = false;
}

let imagen = prompt("Ingrese el link de la imagen");
let precio = parseInt(prompt("Ingrese el precio del producto"));
let nombre = prompt("Ingrese el nombre del producto");

const producto1 = new Producto(
  {
    imagen: imagen,
    precio: precio,
    nombre: nombre,
  }
);
console.log(producto1);

