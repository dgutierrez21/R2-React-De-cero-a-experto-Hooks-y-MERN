import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { onLogin } = useContext(AuthContext);

  const handleLogin = () => {
    const nombre = prompt("Ingrese su nombre");

    onLogin(nombre);

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-3">
      <h1>LoginPage</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
