import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    nombreUsuario: "",
    email: "",
    contrasenia: "",
  });

  const { nombreUsuario, email, contrasenia } = formState;

  return (
    <>
      <form>
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

        <input
          type="password"
          className="form-control mt-4"
          placeholder="Ingrese su contraseña"
          name="contrasenia"
          value={contrasenia}
          onChange={onInputChange}
        />
      </form>

      <button className="mt-3" onClick={onResetForm}>
        Reiniciar
      </button>
    </>
  );
};
