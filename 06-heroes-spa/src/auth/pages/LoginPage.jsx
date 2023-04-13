import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { onLogin } = useContext(AuthContext);

  const handleLogin = () => {
    const nombre = prompt("Ingrese su nombre");

    if (nombre === null) return;

    if (nombre.trim().length < 3) {
      alert("Ingrese un nombre válido.");
      return;
    }

    const lastPath = localStorage.getItem("lastPath") || "/";

    onLogin(nombre);

    navigate(lastPath, {
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
