// let numero = 10;
// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario

condicion ? codigo a ejecutar en caso de condicion verdadera : codigo a ejecutar en caso de condicion falsa;
*/

// let edad = 19;

// if(edad < 18){
//   console.log("No puedes entrar a la fiesta");
// }else{
//   console.log("Puedes entrar a la fiesta");
// }

// edad < 18 ? console.log("No puedes entrar a la fiesta") : console.log("Puedes entrar a la fiesta");

// let temperatura = 20;

// if(temperatura > 30){
//   console.log("Día caluroso");
// }else{
//   console.log("Dia agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Dia agradable");

// let usuario = {
//   nombre: "juan",
//   edad: 19,
// };

// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("no puedes entrar a la fiesta");
// }

// let usuario = {
//   nombre: "juan",
//   edad: 19,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("no puedes entrar a la fiesta");

/* 
operador1 && operador2 retorna operador2 si operador1 represnta algo verdadero, en caso contrario retorna operador1

operador1 || operador2 retorna operador2 si operador1 representa algo falso, en caso contrario retorna operador1
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito esta vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   nombre: "andres",
//   edad: 15,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log( 0 || "Falsy") //falsy
// console.log( 40 || "Falsy") //40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy") //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") //falsy

// const usuario1 = {
//   nombre: "andres",
//   edad: 26,
// };
// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario = null;

// console.log(usuario.nombre || "El usuario no existe");
// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   telefonos: {
//     casa: "1234",
//     celular: "242134",
//   },
// };

// console.log(usuario?.telefonos?.casa || "la propiedad no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 26,
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// let { nombre } = usuario;
// console.log(nombre);

// const usuario = {
//   nombre: "andres",
//   edad: 26,
//   telefono: {
//     celular: 1234234,
//     casa: 2342,
//     trabajo: 4356,
//   },
// };

// const {
//   nombre,
//   telefono: { trabajo },
// } = usuario;

// console.log(nombre, trabajo);

// const usuario = {
//   nombre: "andres",
//   edad: 12,
// };

// const {
//   nombre: namePerson,
//   edad
// } = usuario;

// console.log(namePerson);

// const description = ({ id, nombre }) => {
//   console.log(id, nombre);
// };

// description({ id: 1, nombre: "andres" });

// const nombres = ["andres", "camila", "sofia", "mariana"];
// const [, a, , b] = nombres;

// console.log(a, b);

// const persona = ["andres", "velasquez"];
// const [nombre, apellido] = persona;

// console.log(nombre, apellido);

// let numero1 = 1;
// let numero2 = numero1;

// numero2 = 5;
// console.log(numero1);

// let objeto1 = {nombre: "andres", edad: 3};
// let objeto2 = {...objeto1};

// objeto2.nombre = "camila";
// objeto2.edad = 45;
// console.log(objeto1);

// const nombres = ["andres", "camila", "sofia", "mariana"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

// console.log(Math.max(...numeros));

// const usuario1 = {
//   nombre: "pepito",
//   edad: 45,
// };

// const usuario2 = {
//   ...usuario1,
//   nombre: "juan",
//   direccion: "AV",
// };

// console.log(usuario2);

// const ejemplo = (...numeros) => {
//   console.log(numeros);
// };

// ejemplo(1, 2, 3, 4);

const correos = (...emails) => {
  console.log(emails);
  emails.forEach((email) => {
    console.log(email);
  });
};

correos("andres@gmail.com", "sofia@gmail.com");
