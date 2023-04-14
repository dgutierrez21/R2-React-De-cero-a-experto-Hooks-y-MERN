import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // // realizar petición http con fetch
    const url = `pokemon?limit=10&offset=${page * 10}`;

    // const resp = await fetch("https://pokeapi.co/api/v2/" + url);
    // const data = await resp.json();

    // console.log(data);

    const { data } = await pokemonApi.get(url);

    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1,
      })
    );
  };
};
