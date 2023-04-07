import { useEffect } from "react";
import { useCounter, useFetch } from "../hooks";
import { Isloading, Quote } from "./components";

export const MultipleCustomHooks = () => {
  const { counter, incrementar, reiniciar } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  // se está utilizando la doble negación (!!), lo cual convierte el valor en un booleano. Si la variable data es nula, indefinida o vacía, la doble negación (!!data) la convertirá en false, mientras que si tiene algún valor, la doble negación la convertirá en true.

  // esto asegura que data no sea nula, indefinida o vacía antes de acceder al primer elemento del arreglo y evita que la app se rompa debido a esto.

  const dataQuote = !!data && data[0];

  useEffect(() => {
    reiniciar();
  }, [counter]);

  console.log(data);

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      <hr />

      {isLoading ? <Isloading /> : <Quote {...dataQuote} />}

      <button
        className={`${isLoading ? "d-none" : "d-block"}`}
        onClick={() => incrementar()}
      >
        Next Quote
      </button>
    </>
  );
};
