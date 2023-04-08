import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/todoAdd";

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
  const [todos, dispatch] = useReducer(todoReducer, estadoInicial);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <h2>Completados: 10 | Pendientes: 5</h2>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>

          <hr />

          <TodoAdd onNewTodo={(newTodo) => handleNewTodo(newTodo)} />
        </div>
      </div>
    </>
  );
};
