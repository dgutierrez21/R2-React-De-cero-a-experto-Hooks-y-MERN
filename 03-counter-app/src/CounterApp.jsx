import PropTypes from "prop-types";

import { useState } from "react";

export const CounterApp = ({ value }) => {
  console.log("render");

  //  retorna un array con dos elementos: la variable de estado y una función para actualizarla.
  const [counter, setCounter] = useState(value);

  function handleAniadir(evento) {
    // console.log(evento);

    // ❌❌❌
    // counter++

    // ✅✅✅
    // forma 1
    // setCounter(counter + 1);

    //forma 2
    //     valor actual
    setCounter((c) => c + 1);
  }

  const handleRestar = () => {
    setCounter(counter - 1);
  };

  const handleReiniciar = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <div className="btnContainer">
        <button onClick={handleAniadir}>+1</button>
        <button onClick={handleRestar}>-1</button>
        <button onClick={handleReiniciar}>Reiniciar</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
