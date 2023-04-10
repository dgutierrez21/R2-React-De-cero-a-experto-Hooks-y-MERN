import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { usuario, setUsuario } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(usuario, null, 3)}</pre>

      <button
        onClick={() =>
          setUsuario({
            id: 2020,
            nombre: "Pedro",
            apellido: "Gomez",
            email: "pedroG@gmail.com",
          })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
