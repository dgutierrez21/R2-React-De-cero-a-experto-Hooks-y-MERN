import { UserContext } from "./UserContext";

const usuario = {
  id: 321,
  nombre: "Pedro",
  email: "pedro@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ saludo: "Hola Mundo", usuario }}>
      {children}
    </UserContext.Provider>
  );
};
