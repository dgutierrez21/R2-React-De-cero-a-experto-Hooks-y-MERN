export const TodoItem = ({ descripcion }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{descripcion}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
