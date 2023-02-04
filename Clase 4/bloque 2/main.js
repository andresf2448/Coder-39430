// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); //m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); //m => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));

// function operaciones(op) {
//   if (op === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (op === "restar") {
//     return (a, b) => a - b;
//   }

//   if (op === "dividir") {
//     return (a, b) => a / b;
//   }

//   if (op === "multiplicar") {
//     return (a, b) => a * b;
//   }
// }

// let resta = operaciones("restar"); //(a, b) => a - b;
// console.log(resta(10, 6));

// let multiplicar = operaciones("multiplicar"); //(a, b) => a * b;
// console.log(multiplicar(4, 3));

// let nombreOperacion = prompt("Ingrese la operacion");
// let numeroUno = parseInt(prompt("Ingrese el numero uno"));
// let numeroDos = parseInt(prompt("Ingrese el numero dos"));
// let operacion = operaciones(nombreOperacion); //(a, b) => a - b;

// let resultado = `El resultado de la operacion es ${operacion(numeroUno, numeroDos)}`;
// alert(resultado);

// function recorrer(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// recorrer([1, 4, 3, 5, 7, 8], console.log);

//METODOS IMPORTANTES
// let numeros = [1, 2, 3, 4, 5, 6, 7];

// numeros.forEach((numero) => { //recorrer el arreglo es similar a un for normal
//   console.log(numero);
// });

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// let producto = prompt("Ingrese el nombre del producto a buscar");
// const resultado = productos.find((item) => item.nombre === producto); //encuentra el primer elemento del arreglo que cumpla la condicion

// let mensaje = `
//   ID: ${resultado.id}
//   Nombre: ${resultado.nombre}
//   Precio: $${resultado.precio}
// `;

// alert(mensaje);

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// let precio = parseInt(prompt("Ingrese el valor mínimo"));
// let filtrados = productos.filter((item) => item.precio > precio); //filtra los elementos que cumplen la condicion
// let mensaje = "";

// filtrados.forEach((item) => {
//   mensaje += `
//     ID: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

// });

// alert(mensaje);

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// console.log(productos.some(item => item.nombre === "manga"));//verifica si al menos un elemento cumple con la condicion dada

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// const nombres = productos.map(item => item.nombre);
// const precios = productos.map(item => item.precio);
// console.log(nombres);
// console.log(precios);

// const preciosActualizados = productos.map(item => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21
//   };
// });

// console.log(preciosActualizados);

// const numeros = [1, 2, 4, 3, 5, 6, 9];

// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// const total = productos.reduce((acum, item) => acum + item.precio, 0);// reduce el arreglo a un solo valor
// console.log(total);

// const numeros = [40, 1, 5, 200];

// console.log(numeros.sort((a, b) => a - b)); // menor a mayor
// console.log(numeros.sort((a, b) => b - a)); // mayor a menor

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(items.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   }
//   if (a.name < b.name) {
//     return 1;
//   }
//   // a es igual a b
//   return 0;
// }));

//Math
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(3, 7, 5, 4, 88, 999, 765, 3));
// console.log(Math.min(3, 7, 5, 4, 88, 999, 765, 3));
// console.log(Math.ceil(3.24));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.14));
// console.log(Math.round(3.7));
// console.log(Math.sqrt(9));
// console.log(Math.round(Math.random() * 10));

//Date
// console.log(Date());
// console.log(new Date(2023, 1, 4));

// const casiNavidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(casiNavidad);

  // const hoy = new Date("February 4, 2023");
  // console.log(hoy.toDateString());
  // console.log(hoy.toLocaleString());
  // console.log(hoy.toLocaleDateString());
  // console.log(hoy.toTimeString());
  // console.log(hoy.getFullYear());
  // console.log(hoy.getMonth());
  // console.log(hoy.getDay());

  const navidad = new Date("December 25, 2023");
  const hoy = new Date("February 4, 2023");

  console.log(navidad - hoy);
  const milisegundosPorDia = 86400000;
  
  console.log((navidad - hoy) / milisegundosPorDia);
