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

// function Producto(info){
//   this.nombre = info.nombre;
//   this.precio = info.precio;
//   this.imagen = info.imagen;
//   this.vendido = false;
// }

// let imagen = prompt("Ingrese el link de la imagen");
// let precio = parseInt(prompt("Ingrese el precio del producto"));
// let nombre = prompt("Ingrese el nombre del producto");

// const producto1 = new Producto(
//   {
//     imagen: imagen,
//     precio: precio,
//     nombre: nombre,
//   }
// );
// console.log(producto1);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function(){console.log("Hola soy ", this.nombre);}
// }

// const persona1 = new Persona("andres", 26, "AV");
// const persona2 = new Persona("camila", 26, "AV");

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");

// for(const clave in persona1){
//   console.log("clave", clave);
//   console.log("valor", persona1[clave]);
// }

//CLASES
// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log("Hola soy ", this.nombre);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// console.log(persona1);
// persona1.hablar();

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("Monitor", 1000);
const producto2 = new Producto("Computador", 1000);
console.log(producto1.vendido);
producto1.vender();
console.log(producto1.vendido);
console.log(producto2.vendido); */


class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad -= 1; //this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto("Monitor", 1000, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);