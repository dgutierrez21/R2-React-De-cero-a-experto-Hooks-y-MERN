export const TodoItem = ({
  descripcion,
  id,
  hecho,
  onDeleteTodo,
  onToggleTodo,
}) => {
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
          onClick={() => onToggleTodo(id)}
        >
          <p className="">{hecho && "✅"}</p>
        </button>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
          Borrar
        </button>
      </div>
    </li>
  );
};
