export const TodoItem = ({ descripcion, id, onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{descripcion}</span>
      <div className="btnContainer">
        <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
          Borrar
        </button>
      </div>
    </li>
  );
};
