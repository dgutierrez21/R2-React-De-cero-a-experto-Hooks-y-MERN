import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    nombreUsuario: "user00",
    email: "correo@ejemplo.com",
  });

  const { nombreUsuario, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect !!!");
  }, []);

  useEffect(() => {
    console.log("formState changed !!!");
  }, [formState]);

  useEffect(() => {
    console.log("email change !!!");
  }, [email]);

  return (
    <>
      <h1>Formmulario</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Nombre de usuario"
        name="nombreUsuario"
        value={nombreUsuario}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-4"
        placeholder="correo@ejemplo.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
