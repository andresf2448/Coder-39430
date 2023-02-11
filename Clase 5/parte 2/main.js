let boton = document.getElementById("boton");

// let evento = prompt("Ingrese el evento");
// boton.addEventListener(evento, () => console.log("Fuego!!!"));

// boton.onclick = () => console.log("Fuego!!!");
// const saludar = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludar("camila"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.className = "verde";
// });
// boton.addEventListener("mouseout", () => {
//   saludo.className = "rojo";
// });
// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });
// boton.addEventListener("mousedown", () => {
//   saludo.className = "azul";
// });

let nombre = document.getElementById("nombre");
// nombre.addEventListener("keyup", () => console.log("keyup"));
// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", (e) => {
//   if (e.key === "a") {
//     saludo.className = "amarillo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "verde";
//   }
// });

// document.body.addEventListener("keydown", (e) => {
//   alert(e.key);
// })

// nombre.addEventListener("change", () => console.log("change"));

// let saludo = document.getElementById("saludo");

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let correo = inputs[0].value;

  if (!correo.includes("@")) {
    inputs[0].value = "";
  }
});
