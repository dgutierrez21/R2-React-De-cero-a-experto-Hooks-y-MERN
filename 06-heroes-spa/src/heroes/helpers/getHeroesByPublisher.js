import { heroes } from "../data/heroesData";

export const getHeroesByPublisher = (publisher) => {
  const validarPublishers = ["Marvel Comics", "DC Comics"];

  if (!validarPublishers.includes(publisher))
    throw new Error(`${publisher} no es un publisher válido.`);

  return heroes.filter((hero) => hero.publisher === publisher);
};
