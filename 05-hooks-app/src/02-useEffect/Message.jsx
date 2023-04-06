import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message montado");

    return () => {
      console.log("Message desmontado");
    };
  }, []);

  return (
    <>
      <h3 className="mt-3 text-danger fw-bold">Usuario ya existe</h3>
    </>
  );
};
