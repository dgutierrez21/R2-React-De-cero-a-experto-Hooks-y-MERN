import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   const increment = () => setCounter( counter + 1)
  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </div>
  );
};

// El hook useCallback se utiliza para optimizar el rendimiento de componentes de React que dependen de funciones que pueden ser costosas de calcular. En lugar de crear una nueva función cada vez que se renderiza el componente, useCallback permite "memorizar" una función y la devuelve a menos que sus dependencias hayan cambiado.

// El hook useCallback es útil para optimizar el rendimiento de componentes en React que dependen de funciones que son pasadas como propiedades y que pueden ser re-renderizados innecesariamente.

// En general, se recomienda utilizar useCallback cuando se pasa una función como prop a un componente hijo y esa función depende de valores que pueden cambiar a menudo (por ejemplo, si se pasa una función que utiliza el estado de un componente padre como prop). Al utilizar useCallback, se puede evitar que el componente hijo se vuelva a renderizar innecesariamente cada vez que cambian esos valores, ya que se asegura que la función se mantendrá la misma entre renderizaciones, siempre y cuando no cambien sus dependencias.

// También es importante tener en cuenta que el uso excesivo de useCallback puede afectar negativamente el rendimiento de una aplicación, por lo que se recomienda utilizarlo sólo cuando es necesario.
