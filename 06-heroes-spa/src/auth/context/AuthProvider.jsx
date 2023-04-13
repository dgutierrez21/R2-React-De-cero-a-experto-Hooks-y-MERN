import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const initiaiState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initiaiState);

  const onLogin = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
