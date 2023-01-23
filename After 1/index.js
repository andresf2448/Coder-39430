// let nombre = "andres";
// let edad = 45;
// let valor = true;
// let valorUno = false;

// let edad = prompt("Ingrese su edad");
// alert(typeof(Number(edad)));

// let numero = parseInt(prompt("Ingrese un numero"));

// if(isNaN(numero)){
//   alert("Ingresaste un string");
// }else{
//   alert("Ingresaste un numero");
// }

// let numero = parseInt(prompt("Ingrese un número"));

// if(numero % 2 === 0){
//   let mensaje = `El número ${numero} es par`;
//   alert(mensaje);
// }else{
//   alert("El número es impar");
// }

// let nombre = prompt("Ingrese su nombre");
// let mensaje = `Turno #1 Nombre: ${nombre}`;
// alert(mensaje);

// nombre = prompt("Ingrese su nombre");
// mensaje = `Turno #2 Nombre: ${nombre}`;
// alert(mensaje);

// nombre = prompt("Ingrese su nombre");
// mensaje = `Turno #3 Nombre: ${nombre}`;
// alert(mensaje);

// nombre = prompt("Ingrese su nombre");
// mensaje = `Turno #4 Nombre: ${nombre}`;
// alert(mensaje);

// nombre = prompt("Ingrese su nombre");
// mensaje = `Turno #5 Nombre: ${nombre}`;
// alert(mensaje);

// for (let turno = 1; turno <= 5; turno++) {
//   nombre = prompt("Ingrese su nombre");
//   mensaje = `Turno #${turno} Nombre: ${nombre}`;
//   alert(mensaje);
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "mariana"){
//   alert("Usario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// let moneda = "ars";

// switch (moneda) {
//   case "ars":
//     console.log("moneda de argentina");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda no identificada");
//     break;
// }

let enfermedad = prompt("ingrese el nombre de la enfermedad");

switch(enfermedad){
  case "covid":
    alert("Dos pastillas de acetaminofen");
    break;

  case "dolor estomago":
    alert("asdfasdf");
    break;

  default:
    alert("enfermedad no registrada");
    break;
}