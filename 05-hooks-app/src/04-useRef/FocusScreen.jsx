import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  console.log(inputRef);
  const handleClick = () => {
    // document.qukukckerySelector("input").select();

    console.log(inputRef);

    inputRef.current.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-3"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-3"
        ref={inputRef}
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-3"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-3"
      />

      <button className="mt-3" onClick={handleClick}>
        Set Focus
      </button>
    </>
  );
};

//  useRef se utiliza para guardar valores mutable entre re-renderizaciones de un componente y para acceder a los elementos DOM directamente desde el código de React.

// useref no dispara re-renderizaciones

// el querySelector sirve pero no asegura que vamos a seleccionar el elemento que queremos ya que puede que sea un componente que se ha llamado varios veces.
