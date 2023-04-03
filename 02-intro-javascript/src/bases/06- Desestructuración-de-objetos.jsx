// Desestructuración de objetos

const persona = {
  nombre: "Tony",
  edad: 39,
  clave: "Tony39",
};

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// crea una nueva constante con el valor de la propiedad
const { clave, edad, nombre: miNombre } = persona;

console.log(miNombre);
console.log(edad);
console.log(clave);

// Desestructuración en una función
const retornaPersona = (usuario) => {
  const { clave, edad, nombre } = usuario;

  console.log(edad);
};

retornaPersona(persona);

// Desestructuración directamente en la definición de una función

const retornaPersona2 = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre);
  console.log(edad);
  console.log(rango);

  return {
    nombreClave: nombre,
    anios: edad,
  };
};

retornaPersona2(persona);

// *******************

//Desestructuración del objeto que retorna una función | Desestructuración anidada de objetos
const useContext = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre);
  console.log(edad);
  console.log(rango);

  return {
    nombreClave: nombre,
    anios: edad,
    latlng: {
      lat: 854.302223,
      lng: 424.3032092,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

// o

console.log(nombreClave, anios);

console.log(lat);
console.log(lng);
