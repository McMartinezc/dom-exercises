function boton1() {
  document.querySelector("#panel").style.backgroundColor = "green";
}

function boton2() {
  document.querySelector("#panel").style.backgroundColor = "rgb(0, 0, 255)";
}

function asociamePorFavor() {
  document.querySelector("#panel").textContent =
    "Gracias por asociar la función al botón 3!";
}

function calcularLetrasTitulo() {
  // 1. Accede a la propiedad textContent del nodo h1. Guarda esa información en una variable
  const titulo = document.querySelector('h1').textContent
  // 2. Usa el método adecuado para obtener el número de carácteres del string en textContent. Pon ese valor en el textContent del #panel
  document.querySelector('#panel').textContent = titulo.length;
}
