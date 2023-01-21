/* 
estrucutra del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

// if(0){
//   console.log("entramos");
// }

/* 
= => asignación
== => comparación pero solo mirando el valor del elemento
=== => comparación mirando tanto el valor del elemento como el tipo de dato
*/

// let numero = 10;

// if(numero === 5){
//   console.log("El numero es el 5");
// }

/* 
estructura del if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}
*/

// let color = "azul";

// if(color === "rojo"){
//   console.log("el color es rojo");
// }else{
//   console.log("El color no es rojo");
// }

// console.log("finalizando");

// let respuesta = prompt("Terminaste la tarea?????");

// if(respuesta === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

// let nombre = prompt("Ingrese su nombre");

// if(nombre === ""){
//   alert("no ingresaste el nombre");
// }else{
//   alert("Bienvenid@ " + nombre);
// }

/* 

estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else if(condicion3){
  codigo a ejecutar cuando la condicion3 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las anteriores condiciones es verdadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad <= 0){
//   alert("Edad incorrecta");
// }else if(edad < 14){
//   alert("no puedes entrar");
// }else if(edad < 18){
//   alert("puedes entrar con un adulto");
// }else{
//   alert("puedes entrar");
// }

// let verdad = true;
// let falsedad = false;
// let numero = 5;
// let valor = numero > 5;

// let edad = parseInt(prompt("Ingrese su edad"));

// if (!isNaN(edad)) {
//   if (edad <= 0) {
//     alert("Edad incorrecta");
//   } else if (edad < 14) {
//     alert("no puedes entrar");
//   } else if (edad < 18) {
//     alert("puedes entrar con un adulto");
//   } else {
//     alert("puedes entrar");
//   }
// } else {
//   alert("puedes entrar");
// }

//OPERADORES LOGICOS
/* 
condicion1 && condicion2 es verdadero cuando todas las condiciones son verdaderas de lo contrario es falsa

condicion1 || condicion2 es verdader cuando al menos una es verdadera de lo contrario es falso
*/

let nombre = prompt("Ingrese un nombre");

// if (nombre === "pepito" || nombre === "PEPITO") {
//   alert("hola pepito");
// } else {
//   alert("no eres pepito");
// }

// if(nombre != "" && nombre === "pepito"){
//   alert("Hola pepito");
// }else{
//   alert("Usuario incorrecto");
// }

if (nombre.toLowerCase() === "pepito") {
  alert("hola pepito");
} else {
  alert("no eres pepito");
}