// Variables y constantes

const nombre = "Pepe";
const apellido = "Perez";

let valorDado = 5;
valorDado = 7;

console.log(nombre, apellido, valorDado);

//Scope global

if (true) {
  // Scope de bloque

  const nombre = "Juan";
  let valorDado = 10;

  console.log(valorDado, nombre);
}

console.log(valorDado, nombre);

// Aunque las variables tengan el mismo nombre, estan en diferente scope, por lo tanto, no son las mismas variables.