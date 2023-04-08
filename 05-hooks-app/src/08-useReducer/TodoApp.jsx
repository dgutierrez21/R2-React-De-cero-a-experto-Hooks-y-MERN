import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const estadoInicial = [
  {
    id: new Date().getTime(),
    descripcion: "Sacar la basura",
    hecho: false,
  },
  {
    id: new Date().getTime() * 3,
    descripcion: "Pasear al perro",
    hecho: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, estadoInicial);

  return (
    <>
      <h1>TodoApp</h1>
      <h2>Completados: 10 | Pendientes: 5</h2>

      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>

          <hr />

          <form action="">
            <input
              type="text"
              placeholder="Nueva Tarea"
              className="form-control"
            />

            <button type="submit" className="mt-3">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
