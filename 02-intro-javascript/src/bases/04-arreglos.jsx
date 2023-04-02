// arreglos en JS

// no se recomienda crear un arreglo de esta manera, a excepción de que se quiera crear un arreglo con un tamaño por defecto

const arreglo = new Array(100);

console.log(arreglo); // (100) [empty × 100]
arreglo.push(24);

console.log(arreglo); // (101) [empty × 100, 24]

const arr = [1, 2, 3, 4];

//❌ no se recomienda usar push porque modifica el arreglo original
// arr.push(5);
console.log(arr);

//✅ usar el operador spread en su lugar
const arr2 = [...arr, 5];

console.log(arr2);

// Una función que se va a ejecutar para cada elemento del arreglo. Su valor devuelto se agrega como un solo elemento en el **nuevo arreglo**.
const arr3 = arr2.map(function (numero) {
  return numero * 2;
});

console.log(arr3);
