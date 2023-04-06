import { useState } from "react";

export const useCounter = (valorInicial = 10) => {
  const [counter, setCounter] = useState(valorInicial);

  const incrementar = (valor = 1) => setCounter(counter + valor);

  const restar = (valor = -1) => {
    // if (counter === 0) return;
    setCounter(counter - valor);
  };

  const reiniciar = () => setCounter(valorInicial);

  return {
    counter,
    incrementar,
    restar,
    reiniciar,
  };
};
