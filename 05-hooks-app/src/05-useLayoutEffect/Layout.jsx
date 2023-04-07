import { useEffect } from "react";
import { useCounter, useFetch } from "../hooks";
import { Isloading, Quote } from "../03-examples/components";

export const Layout = () => {
  const { counter, incrementar, reiniciar } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

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
