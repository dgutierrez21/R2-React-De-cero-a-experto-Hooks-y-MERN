import { useState } from "react";

export const CounterWithUseState = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const sumarContador1 = () => setContador1(contador1 + 1);

  const restarContador1 = () => setContador1(contador1 - 1);

  const sumarContador2 = () => setContador2(contador2 + 1);

  const restarContador2 = () => setContador2(contador2 - 1);

  return (
    <>
      <h1>Contador con useState</h1>
      <h2>{contador1}</h2>
      <div className="btnContainer">
        <button onClick={sumarContador1}>+1</button>
        <button onClick={restarContador1}>-1</button>
      </div>

      <h2>---------------</h2>

      <h2>{contador2}</h2>
      <div className="btnContainer">
        <button onClick={sumarContador2}>+1</button>
        <button onClick={restarContador2}>-1</button>
      </div>

      <hr />
    </>
  );
};
