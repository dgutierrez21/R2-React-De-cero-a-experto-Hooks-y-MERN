//Import, export y funciones comunes de arreglos

import Heroes from "../data/heroes";

// console.log(Heroes);

export const getHeroeById = (id) => Heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>
  Heroes.filter((heroe) => heroe.owner == owner);

// console.log(getHeroesByOwner("Marvel"));
