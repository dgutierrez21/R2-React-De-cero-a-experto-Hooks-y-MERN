import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { usuario } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage{" "}
        <small>
          {usuario?.nombre} {usuario?.apellido}
        </small>
      </h1>
      <hr />

      <pre>{JSON.stringify(usuario, null, 3)}</pre>
    </>
  );
};

// La sintaxis {usuario?.nombre} es una forma de acceder a la propiedad nombre de un objeto usuario de manera segura. El operador ?. se conoce como operador de encadenamiento opcional y se utiliza para evitar errores de "TypeError: Cannot read property 'nombre' of null" o "TypeError: Cannot read property 'nombre' of undefined" al intentar acceder a una propiedad de un objeto que puede ser nulo o indefinido.

// En este caso, si el objeto usuario existe, se mostrará su propiedad nombre, de lo contrario, no se mostrará nada. La sintaxis es equivalente a escribir:

// {usuario && usuario.nombre}

// Pero con la ventaja de que no es necesario hacer la comprobación manual de si el objeto usuario existe o no.
