/* 
estructura de una funcion

function nombre(){
  codigo de la funcion
}
*/

// function saludar(){
//   console.log("Hola");
// }

// saludar();

// function pedirDato() {
//   let apellido = prompt("INgrese el apellido");
//   let mensaje = `Hola ${apellido}`;
//   alert(mensaje);
// }

// pedirDato();

/* 
estructura de una funcion con parametros

function nombre(param1, param2, ..., paramn){
  codigo de la funcion
}
*/

// function saludar(nombre, saludo){
//   let mensaje = `${saludo} ${nombre}`;
//   console.log(mensaje);
// }

// saludar("kevin", "Bienvenido");
// saludar("mariana", "Hola");

// function session(usuario){
//   while(usuario != "andres"){
//     alert("Usuario incorrecto");
//     usuario = prompt("Ingrese el usuario");
//   }

//   alert("Bienvenido");
// }

// let usuario = prompt("Ingrese el usuario");
// session(usuario);

// function sumar(numero1, numero2){
//   return numero1 + numero2;
// }

// let resultado = sumar(4, 5);

// console.log(resultado);
/* function saludar(){
  console.log("Hola");
  console.log("chao");
  return
}

saludar(); */

// function calculadora(numeroUno, numeroDos, operacion) {
//   let numeroUno = 4;
//   let numeroDos = 6;
//   let operacion = "restar";
//   switch (operacion) {
//     case "sumar":
//       return numeroUno + numeroDos;
//       break;

//     case "restar":
//       return numeroUno - numeroDos;
//       break;

//     case "multiplicar":
//       return numeroUno * numeroDos;
//       break;

//     case "dividir":
//       return numeroUno / numeroDos;
//       break;

//     default:
//       return "Operacion no identificada";
//       break;
//   }
// }

// let numeroUno = parseInt(prompt("Ingrese el número uno"));
// let numeroDos = parseInt(prompt("Ingrese el número dos"));
// let op = prompt("Ingrese la operacion");

// let resultado = calculadora(numeroUno, numeroDos, op);
// let mensaje = `El resultado de la operacion es ${resultado}`;
// alert(mensaje);
// let resultado;

// function sumar(num1, num2){
//   resultado = num1 + num2;
// }

// sumar(3, 4);
// console.log(resultado);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// console.log(sumar(2, 3) * restar(4, 5));

// const suma = function (a, b){return a + b};
// const resta = function (a, b){return a - b};

// suma(3, 4);
/* 
estructuras de las arrow function

const nombre = (parm1, parm2) => parm1 + param2; 
const nombre = () => el retorno; 
const nombre = x => x; 
*/

// const sumar = (a, b) => a + b;


// console.log(sumar(3, 4));

// function sumar(a, b) {
//   return (a = b);
// }

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento"));

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
                // = resta(suma(1000, iva(1000)), 10)
                // = resta(suma(1000, 210), 10)
                // = resta(1210, 10)
                // = 1200
let mensaje = `El precio del producto es ${nuevoPrecio}`;
alert(mensaje);