// funciones

//❌ no se recomienda usar declaraciones de funciones ya que se facilita cambiar su referencia por accidente

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

console.log(saludar); // ƒ saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

saludar = 30;

console.log(saludar); // 30

//✅ en su lugar es mejor usar Expresiones de función

const saludar2 = function (nombre) {
  return `Hola Mundo. Mi nombre es ${nombre}`;
};

console.log(saludar2); // ƒ (nombre) {
//   return `Hola Mundo. Mi nombre es ${nombre}`;
// }

// saludar2 = 20; // main.jsx:28 Uncaught TypeError: Assignment to constant variable.

console.log(saludar2);

// función de flecha
const saludar3 = (nombre) => {
  return `Hola Mundo. Mi nombre es ${nombre}`;
};

console.log(saludar3("Juan"));

//simplificar más una función de flecha

const saludar4 = (nombre) => `Hola Mundo. Mi nombre es ${nombre}`;

console.log(saludar4("Pedro"));

//simplificar más una función de flecha

const saludar5 = () => "Hola Mundo";

console.log(saludar5());

// funciones de flecha al retornar un objeto. Se usa parentesis para retornar un objeto de manera implicita
const getUser = () => ({
  uid: "ABC024",
  userName: "user04",
});

const userObj = getUser();

console.log(userObj);

// tarea
// 1. transformar a una función de flecha
//2. retornar un objeto implicito

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC5500",
    userName: nombre,
  };
}

// Resolución de tarea

const getUsuarioActivo02 = (nombre) => ({
  uid: "ABC5500",
  userName: nombre,
});

const user2 = getUsuarioActivo02("user60");

console.log(user2);
