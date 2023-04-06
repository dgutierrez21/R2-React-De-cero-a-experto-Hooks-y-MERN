import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { counter, incrementar, restar, reiniciar } = useCounter();
  return (
    <>
      <h1>Counter con Hook: {counter}</h1>

      <hr />

      <div className="btnContainer">
        {/* {El mensaje "[object Object]" puede aparecer cuando se intenta renderizar un objeto en vez de un valor primitivo (string, number, boolean, etc.) en un componente. Esto puede ocurrir cuando se intenta imprimir el resultado de una llamada a un objeto o una función que devuelve un objeto. En este caso, React intentará renderizar el objeto como una cadena de texto, lo que dará como resultado el mensaje "[object Object]".

        Para solucionar este problema, es necesario asegurarse de que se está pasando un valor primitivo al componente o de que se está extrayendo la información que se quiere mostrar del objeto y pasándola al componente de manera adecuada*/}

        <button onClick={() => incrementar(5)}>+1</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={() => restar(10)}>-1</button>
      </div>
    </>
  );
};
