import { useReducer } from "react";

const estadoInicial = { contador1: 0, contador2: 0 };

export const CounterWithuseReducer = () => {
  const reducer = (estado, accion) => {
    switch (accion.type) {
      case "sumar1":
        return { ...estado, contador1: estado.contador1 + 1 };
      case "restar1":
        return { ...estado, contador1: estado.contador1 - 1 };
      case "sumar2":
        return { ...estado, contador2: estado.contador2 + 1 };
      case "restar2":
        return { ...estado, contador2: estado.contador2 - 1 };

      default:
        return estado;
    }
  };

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div className="text-center">
      <h1>Contador con useReducer</h1>
      <h2>{estado.contador1}</h2>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: "sumar1" })}>+1</button>
        <button onClick={() => dispatch({ type: "restar1" })}>-1</button>
      </div>

      <h2>------------</h2>

      <h2>{estado.contador2}</h2>
      <div className="btnContainer">
        <button onClick={() => dispatch({ type: "sumar2" })}>+1</button>
        <button onClick={() => dispatch({ type: "restar2" })}>-1</button>
      </div>
    </div>
  );
};

// El hook useReducer se utiliza en React para manejar estados complejos y/o cuando la lógica de actualización del estado es compleja. Es una alternativa a useState que es útil cuando se tiene una lógica de actualización del estado que involucra múltiples sub-valores o cuando el siguiente estado depende del anterior.

// En general, useReducer es útil cuando se tiene una estructura de estado más compleja que un simple valor o cuando se necesita un control más fino sobre cómo se actualiza el estado. Además, se recomienda utilizar useReducer cuando se necesita actualizar el estado basado en un estado previo, ya que permite realizar operaciones inmutables más complejas para actualizar el estado.

// Sin embargo, si el estado es simple y la lógica de actualización del estado no es compleja, useState es suficiente.

// en el caso de este ejemplo useReducer puede ser una opción más adecuada si la lógica de estado es más compleja o si hay varias acciones que afectan al estado. useReducer también puede hacer que el código sea más fácil de entender y mantener, especialmente si se tiene un conjunto complejo de acciones que cambian el estado.

// En resumen, para una simple aplicación de contador con dos valores, useState puede ser suficiente. Pero si la lógica de estado es más compleja o hay varias acciones que afectan al estado, useReducer puede ser una mejor opción.
