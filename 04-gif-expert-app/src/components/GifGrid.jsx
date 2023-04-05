import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoria }) => {
  const [counter, setCounter] = useState(10);
  // useEffect es un hooks de react que sirve para disparar efectos secundarios

  //--- Si el array de dependencias está vacío ([]), el efecto se ejecutará solo una vez, inmediatamente después de que el componente se haya montado en el DOM.

  //--- Cuando se utiliza useEffect sin un array de dependencias, el efecto se ejecuta en cada renderizado del componente, incluyendo el primer renderizado y también cuando ocurren actualizaciones.

  //--- Cuando el array de dependencias está presente, React solo volverá a ejecutar la función useEffect si alguna de las dependencias en el array cambia de valor.

  useEffect(() => {
    getGifs(categoria);
  }, []);

  return (
    <>
      <h3>{categoria}</h3>

      <h3>{counter}</h3>

      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
