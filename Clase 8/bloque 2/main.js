/* 
estructura de fetch
fetch(url, config);
*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.forEach(publicacion => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Probando publicacion",
//     body: "Nuestra primera prublicacion",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
// .then(response => response.json())
// .then(data => console.log(data));

// const listado = document.getElementById("listado");

// fetch('./data.json')
// .then(response => response.json())
// .then(data => {
//   data.forEach(producto => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <h2>${producto.nombre}</h2>
//       <b>$${producto.precio}</b>
//       <p>${producto.id}</p>
//     `;

//     listado.append(li);
//   });
// })

const listado = document.getElementById("listado");
const pedirDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

pedirDatos();
