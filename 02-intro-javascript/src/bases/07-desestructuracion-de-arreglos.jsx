// desestructuración de arreglos
const personajes = ["Thanos", "Spider-man", "Iron man"];

// a diferencia de la desestructuración de objetos, en este caso el orden si importa y se le puede poner cualquier nombre o no poner ninguno en caso de que se quiera extraer valores especificos
const [p1, , p3] = personajes;

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

console.log(p1);
console.log(p3);

const retornaArreglo = () => ["ABC", 123];

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea
// 1. el primer valor del arreglo se debe llamar nombre
// 2. el segundo valor se debe setNombre
const useState = (valor) => [valor, () => console.log("Hola Mundo")];

const [nombre, setNombre] = useState("DeadPool");

console.log(nombre);

setNombre();
// arr[1]();
