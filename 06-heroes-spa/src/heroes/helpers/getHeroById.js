import { heroes } from "../data/heroesData";

export const getHeroById = (heroId) => {
  return heroes.find((hero) => hero.id === heroId);
};
