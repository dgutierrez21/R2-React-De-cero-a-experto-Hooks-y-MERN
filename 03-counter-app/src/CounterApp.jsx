import PropTypes from "prop-types";

import { useState } from "react";

export const CounterApp = ({ value }) => {
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
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAniadir}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
