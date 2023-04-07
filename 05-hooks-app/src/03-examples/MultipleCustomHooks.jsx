import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, incrementar, reiniciar } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  // se está utilizando la doble negación (!!), lo cual convierte el valor en un booleano. Si la variable data es nula, indefinida o vacía, la doble negación (!!data) la convertirá en false, mientras que si tiene algún valor, la doble negación la convertirá en true.

  // esto asegura que data no sea nula, indefinida o vacía antes de acceder al primer elemento del arreglo y evita que la app se rompa debido a esto.

  const { author, quote } = !!data && data[0];

  useEffect(() => {
    reiniciar();
  }, [counter]);

  console.log(data);

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      <hr />

      <div
        className={`alert alert-info text-center ${
          isLoading ? "d-block" : "d-none"
        }`}
      >
        Loading...
      </div>

      <blockquote
        className={`blockquote text-end ${isLoading ? "d-none" : "d-block"}`}
      >
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <button
        className={`${isLoading ? "d-none" : "d-block"}`}
        onClick={() => incrementar()}
      >
        Next Quote
      </button>
    </>
  );
};
