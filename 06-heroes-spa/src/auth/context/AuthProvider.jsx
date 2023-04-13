import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initiaiState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initiaiState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
