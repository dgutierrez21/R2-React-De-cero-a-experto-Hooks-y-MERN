import { useMemo, useState } from "react";
import { useCounter } from "../../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Loog !!!");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incrementar } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <hr />

      <h4>{memorizedValue}</h4>

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

//  useMemo se utiliza para memorizar el resultado de una función costosa en términos de rendimiento. En otras palabras, se utiliza para evitar que se recalcule una misma operación o cálculo cada vez que se renderiza un componente, si las entradas de la función que realiza el cálculo no han cambiado.

// Por lo tanto, se debe usar useMemo cuando:

// 1. Se tiene una función que realiza un cálculo costoso y ese cálculo se repite con frecuencia.
// 2. El cálculo depende de ciertas entradas, como propiedades o estado, y esas entradas no cambian con frecuencia.
// 3. El cálculo se realiza dentro de un componente de React y es necesario evitar que el componente se vuelva a renderizar innecesariamente.

// Es importante tener en cuenta que el uso excesivo de useMemo puede tener un impacto negativo en el rendimiento, ya que agregar demasiados cálculos memoizados también puede aumentar la complejidad del código y reducir la legibilidad. Por lo tanto, es importante usar useMemo con moderación y solo en casos en los que realmente mejora el rendimiento.
