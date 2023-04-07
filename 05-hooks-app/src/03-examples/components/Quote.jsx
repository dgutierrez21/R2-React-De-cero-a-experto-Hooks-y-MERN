import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const pRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({ height, width });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end d-flex">
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>
      <h2>
        Width: {boxSize.width} --- height: {boxSize.height}
      </h2>
    </>
  );
};

// useEffect y useLayoutEffect son hooks de React que se utilizan para manejar efectos secundarios en componentes funcionales. Ambos hooks ejecutan una función después de que el componente se haya renderizado, pero difieren en cuándo se ejecuta esa función.

// useEffect se ejecuta después de que la renderización se haya completado y la página se haya pintado en el navegador, lo que significa que cualquier actualización visual que la función tenga no será visible para el usuario hasta que la página se haya repintado. Por lo tanto, es adecuado para efectos secundarios que no necesitan ser sincronizados con la interfaz de usuario, como solicitudes de red, cambios de estado y otros efectos que no afectan directamente a la presentación.

// Por otro lado, useLayoutEffect se ejecuta antes de que la página se repinte, lo que lo hace más adecuado para efectos secundarios que afectan la presentación, como animaciones o cambios en el tamaño o posición de los elementos del DOM. Si el efecto no se sincroniza correctamente con la presentación, puede provocar efectos secundarios no deseados, como la parpadeo de elementos.

// Es importante tener en cuenta que, en general, useEffect es más rápido que useLayoutEffect porque no bloquea la presentación del navegador. Sin embargo, en casos donde es necesario actualizar la presentación de manera síncrona, es necesario utilizar useLayoutEffect.
