/* 
estructura del bucle o ciclo for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// i++  === i = i + 1
// i-- === i = i - 1

// for(let i = 0; i < 10; i++){
//   console.log("repeticion", i);
// }

// for (let i = 0; i < 100; i++) {
//   console.log("hola");
// }

// let numero = parseInt(prompt("Ingrese un numero"));

// for(let i = 1; i <=10; i++){
//   let resultado = numero * i;
//   alert(numero + " X " + i + " = " + resultado);
// }

// let nombre = "andres";
// let edad = 45;

// let resultado = nombre + " " + "edad" + " " + edad;
// let resultado = `${nombre} edad ${edad}`;
// console.log(resultado);

// let numero = parseInt(prompt("Ingrese un numero"));

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//   alert(mensaje);
// }

// for (let i = 1; i <= 10; i++) {
//   if(i === 5){
//     break;
//   }

//   console.log("iteracion", i);
// }

// for (let i = 1; i <= 10; i++) {
//   if(i % 2 === 1){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del ciclo while

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("hola");
// }

// let usuario = prompt("Ingrese su usuario");

// while(usuario != "andres"){
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese su usuario");
// }

// alert("Bienvenido andres");

// let entrada = prompt("Ingrese un dato");

// while(entrada != "ESC"){
//   alert(`ingresaste ${entrada}`);
//   entrada = prompt("Ingrese un dato");
// }

// let repetir = false;

// do{
//   console.log("entramos");
// }while(repetir);

// while(repetir){
//   console.log("entramos");
// }

/* 

estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor sea igual a valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que valor sea igual a valor1
    break;

  .
  .
  .

  default:
    codigo a ejecutar en caso de que el valor no coincida con ninguno de los anteriores valores
    break;
}
*/

let nombre = prompt("Ingrese el nombre");

while(nombre != "ESC"){
  switch(nombre){
    case "ANA":
      alert("Hola Ana");
      break;

    case "JUAN":
      alert("Hola Juan");
      break;

    default:
      for(let i = 0; i < 3; i++){
        alert("Quién eres???");
      }
      break;
  }

  nombre = prompt("Ingrese el nombre");
}