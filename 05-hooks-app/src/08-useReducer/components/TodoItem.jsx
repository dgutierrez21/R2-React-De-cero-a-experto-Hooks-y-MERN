import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = ({ descripcion, id, hecho }) => {
  const { handleDeleteTodo, handleToggleTodo } = useContext(TodoContext);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          hecho && "text-decoration-line-through"
        }`}
      >
        {descripcion}
      </span>
      <div className="btnContainer d-flex">
        <button
          className="checkBtn align-self-center"
          onClick={() => handleToggleTodo(id)}
        >
          <p className="">{hecho && "✅"}</p>
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteTodo(id)}>
          Borrar
        </button>
      </div>
    </li>
  );
};
