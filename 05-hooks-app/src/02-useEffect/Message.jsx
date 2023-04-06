import { useEffect, useState } from "react";

export const Message = () => {
  const [cordenadas, setCordenadas] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCordenadas({ x, y });

      console.log(cordenadas);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3 className="mt-3 text-danger fw-bold">Usuario ya existe</h3>

      <h2>{`X = ${cordenadas.x} --- Y = ${cordenadas.y}`}</h2>
    </>
  );
};
