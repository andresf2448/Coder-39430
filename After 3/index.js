// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1350 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// const modificarPrecio = (nombre, precio) => {
//   let productosStorage = JSON.parse(localStorage.getItem("productos"));

//   let encontrado = productosStorage.find(item => item.nombre === nombre);
//   encontrado.precio = precio;

//   localStorage.setItem("productos", JSON.stringify(productosStorage));
// };

// let nombre = prompt("Ingrese el nombre");
// let precio = parseInt(prompt("Ingrese el precio"));

// modificarPrecio(nombre, precio);

const crearProducto = (nombre, precio) => {
  let productosStorage = JSON.parse(localStorage.getItem("productos"));
  let objeto = {
    id: productosStorage.length + 1,
    nombre: nombre,
    precio: precio
  };

  productosStorage.push(objeto);

  localStorage.setItem("productos", JSON.stringify(productosStorage));
};

let nombre = prompt("Ingrese el nombre");
let precio = parseInt(prompt("Ingrese el precio"));

modificarPrecio(nombre, precio);
