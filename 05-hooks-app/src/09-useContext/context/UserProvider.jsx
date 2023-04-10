import { useState } from "react";
import { UserContext } from "./UserContext";

// const usuario = {
//   id: 321,
//   nombre: "Pedro",
//   email: "pedro@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();
  return (
    // <UserContext.Provider value={{ saludo: "Hola Mundo", usuario }}>
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
