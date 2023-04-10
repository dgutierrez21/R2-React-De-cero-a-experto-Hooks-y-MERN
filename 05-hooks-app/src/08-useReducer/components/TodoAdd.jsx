import { useEffect, useRef } from "react";
import { useForm } from "../../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { descripcion, onInputChange, onResetForm } = useForm({
    descripcion: "",
  });

  const descRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (descripcion.trim().length < 2) return;

    const newTodo = {
      id: new Date().getTime(),
      descripcion,
      hecho: false,
    };

    onNewTodo(newTodo);

    onResetForm();
  };

  useEffect(() => {
    descRef.current.focus();
  }, []);

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Nueva Tarea"
        className="form-control"
        name="descripcion"
        value={descripcion}
        onChange={onInputChange}
        ref={descRef}
      />

      <button type="submit" className="mt-3">
        Agregar
      </button>
    </form>
  );
};
