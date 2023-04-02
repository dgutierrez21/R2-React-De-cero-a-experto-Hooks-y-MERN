const nombre = "Pepe";
const apellido = "Perez";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido} tiene ${10 + 15} años`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
