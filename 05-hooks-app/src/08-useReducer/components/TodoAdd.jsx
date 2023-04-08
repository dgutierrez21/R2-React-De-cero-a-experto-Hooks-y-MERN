import { useForm } from "../../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { descripcion, onInputChange, onResetForm } = useForm({
    descripcion: "",
  });

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

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Nueva Tarea"
        className="form-control"
        name="descripcion"
        value={descripcion}
        onChange={onInputChange}
      />

      <button type="submit" className="mt-3">
        Agregar
      </button>
    </form>
  );
};
