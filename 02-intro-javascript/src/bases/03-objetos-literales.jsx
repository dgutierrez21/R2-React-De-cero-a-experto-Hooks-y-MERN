// objetos literales
const persona = {
  nombre: "Pepe",
  apellido: "Perez",
  edad: 34,
  direccion: {
    ciudad: "New York",
    lat: 435.203423,
    lng: 326.09987,
  },
};

console.log(persona);
console.log({ persona });

// copiar los valores de un objeto

//❌ mal, al hacer esto estamos copiando la referencia, no el valor, por ende, es el mismo objeto y no uno nuevo.

const persona2 = persona;

persona2.nombre = "Juan";

console.log(persona === persona2); // true

// tambien se le cambio el nombre a el objeto persona porque estamos apuntando a la misma referencia en memoria.
console.log(persona);
console.log(persona2);

//✅ correcto, lo correcto es crear un nuevo objeto y hacer una copia de sus valores

// operador spread, extrae las propiedades y se las asigna al nuevo objeto que estamos creando
const persona3 = { ...persona };

// solo se le cambia el nombre a el objeto persona3
persona3.nombre = "Roberto";
//

console.log(persona);
console.log(persona3);

// tambien se puede utilizar el método assign()
const persona4 = Object.assign({}, persona);
persona4.nombre = "David";

console.log(persona4);
