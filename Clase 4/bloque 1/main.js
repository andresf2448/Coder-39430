/* 
estructura de un arreglo
[elemento1, elemento2, ..., elementon]
*/

// const arregloVacio = [];
// const numeros = [1, 2, 3, 4, 5, 4, 3, 2];
// const nombres = ["juan", "camila", "sofia"];
// const valores = [true, false, true, true];
// const variados = [1, "juan", false];
// console.log(nombres);

// const nombres = ["juan", "camila", "sofia"];
// console.log(nombres[1]);
// console.log(nombres[0]);
// console.log(nombres[2]);

// const numeros = [1, 2, 3, 4, 5, 4, 3, 2];
// let resultado = numeros[1] + numeros[3];
// console.log(resultado);

// const nombres = ["juan", "camila", "sofia", "lina", "andres"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["juan", "camila", "sofia"];
// nombres.push("lina"); //agrega al final del arreglo un nuevo elemento
// console.log(nombres);

// nombres.unshift("luz"); //agregar al inicio del arreglo un nuevo elemento
// console.log(nombres);

// const nombres = ["juan", "camila", "sofia"];
// nombres.pop(); //saca el ultimo elemento del arreglo
// console.log(nombres);

// nombres.shift(); //saca el primer elemento del arreglo
// console.log(nombres);

// const nombres = ["juan", "camila", "sofia"];
// nombres.splice(1, 1); //para eleminar uno o más elementos
// console.log(nombres);

// const nombres = ["juan", "camila", "sofia"];
// console.log(nombres.join("=====")); //genera un string con los elementos del arreglo separados por lo pasado como parametro

// const nombres = ["juan", "camila", "sofia"];
// const mascotas = ["firu", "max", "zeus"];
// const varios = mascotas.concat(nombres); //genera un nuevo arreglo con los arreglos combinados

// console.log(varios);

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// const copia = nombres.slice(1, 4); //realiza una copia de un fragmento del arrego original
// console.log(copia);

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// console.log(nombres.indexOf("sofia")); //encuentra el indice o posicion del elemento en cuestion, si no lo encuentra devuelve -1
// console.log(nombres.indexOf("mariana"));

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// nombres.reverse(); // invertir el orden del arreglo

// console.log(nombres);

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// console.log(nombres.includes("mariana"));// valida sie xiste o no un elemento dentro del arreglo

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// const nombre = "camila";
// let indicador = false;

// for(let index = 0; index < nombres.length; index++){
//   if(nombres[index] === nombre){
//     indicador = true;
//   }
// }

// if(indicador){
//   console.log(true);
// }else{
//   console.log(false);
// }

// const productos = ["pastel", "cafe"];
// let producto = prompt("Ingrese el producto a buscar");

// if(productos.includes(producto)){
//   alert(`si hay ${producto}`);
// }else{
//   alert(`no hay ${producto}`);
// }

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];
// console.log(nombres.join("===="));

// const nombres = ["juan", "camila", "sofia", "luz", "yuliana"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index !== -1){
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("sofia");

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 700 },
//   { id: 4, nombre: "gorra", precio: 1750 },
// ];

// for (let index = 0; index < productos.length; index++) {
//   productos[index].precio = 3000;
// }

//Paso por valor
// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

//paso por referencia
// let persona1 = {nombre: "andres", edad: 50};
// let persona2 = persona1;

// persona2.nombre = "camila";
// console.log(persona1);