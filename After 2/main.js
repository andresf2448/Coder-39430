// let varios = [1, 2, 3, 4, 5, 4, 3];

// console.log(varios.length);

// varios.push("fabian");
// console.log(varios);

// varios.unshift("andres");
// console.log(varios);

// varios.pop();
// console.log(varios);

// varios.shift();
// console.log(varios);

// varios.splice(1, 0, "matias");
// console.log(varios);

// console.log(varios.join("*"));

// const copia = varios.slice(1, 4);
// console.log(copia);

// console.log(varios.indexOf("andres"));

// console.log(varios.includes("matias"));
// console.log(varios.includes("mandres"));

// let posicion = [0, 0];

// const desplazamiento = (movimiento) => {
//   if(movimiento === "derecha"){
//     posicion[0] += 1;
//   }else if(movimiento === "izquierda"){
//     posicion[0] -= 1;
//   }else if(movimiento === "arriba"){
//     posicion[1] += 1;
//   }else{
//     posicion[1] -= 1;
//   }

//   console.log(posicion);
// };

// desplazamiento("derecha");

// const arreglo = [1, 2, 3, 4, 1];
// const encontrar = arreglo.filter(item => item === 1);

// console.log(encontrar);

const usuarios = [
  { id: 1, nombre: "juan", edad: 10 },
  { id: 2, nombre: "pedro", edad: 15 },
  { id: 3, nombre: "maxi", edad: 20 },
];

const filtrados = usuarios.filter(usuario => usuario.edad > 12);
console.log(filtrados);

const transformado = usuarios.map(usuario => {
  return {
    nombre: usuario.nombre,
    edad: usuario.edad
  }
});

console.log(transformado);