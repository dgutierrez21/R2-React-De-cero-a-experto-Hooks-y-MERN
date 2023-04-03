// Promesas

import { getHeroeById } from "./bases/08-Import-export-y-funciones-comunes-de-arreglos";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroeById(2);
//     resolve(p1);
//     // reject("No se ha encontrado el héroe")
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch((error) => console.warn(error));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);

      p1 ? resolve(p1) : reject("No se encontró el héroe");
    }, 2000);
  });
};

console.log(getHeroeByIdAsync(4));

getHeroeByIdAsync(4)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.warn(error));

// se puede simplificar así
// getHeroeByIdAsync(4)
//   .then(console.log)
//   .catch(console.warn);
