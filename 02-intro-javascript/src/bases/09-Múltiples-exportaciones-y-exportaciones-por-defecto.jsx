//Múltiples exportaciones y exportaciones por defecto

import Heroes, { owners } from "./data/heroes";

console.log(Heroes);

const getHeroeById = (id) => Heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>
  Heroes.filter((heroe) => heroe.owner == owner);

console.log(getHeroesByOwner("Marvel"));

console.log(owners);
