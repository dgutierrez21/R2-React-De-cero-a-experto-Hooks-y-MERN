import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />

      <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
      </ul>
    </>
  );
};
