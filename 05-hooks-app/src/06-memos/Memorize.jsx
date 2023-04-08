import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incrementar } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <Small counter={counter} />
      </h1>

      <hr />

      <div className="btnContainer">
        <button onClick={() => incrementar()}>+1</button>
        <button
          className="btn btn-outline-primary text-white"
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};

// El hook React.memo() 0 memo() en vite se utiliza para optimizar el rendimiento de los componentes funcionales. Este hook permite evitar el renderizado innecesario de un componente si las propiedades (props) que se le pasan no han cambiado.

// Por lo tanto, se recomienda utilizar React.memo() en los siguientes casos:

// 1. Componentes funcionales que renderizan de manera frecuente y reciben las mismas props.
// 2. Componentes que se renderizan con una gran cantidad de datos.

// En general, se utiliza para evitar el costoso proceso de renderizado en componentes que reciben props con la misma información, sin importar cuántas veces se rendericen. Es importante tener en cuenta que React.memo() no debe utilizarse en todos los casos, ya que su uso indebido puede empeorar el rendimiento del componente.
