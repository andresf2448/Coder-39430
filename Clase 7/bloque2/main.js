// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "No puediste guardar los cambios?",
//     icon: "error",
//     confirmButtonText: "OK!",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Haz clickeado el botón!",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "error",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "bottom-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el producto?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo requerido
//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese un nombre",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Look up",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
});
