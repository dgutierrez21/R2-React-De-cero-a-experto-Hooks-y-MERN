import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/todoAdd";

const estadoInicial = [
  // {
  //   id: new Date().getTime(),
  //   descripcion: "Sacar la basura",
  //   hecho: false,
  // },
];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, estadoInicial, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log(todo);

    const accion = {
      type: "add Todo",
      payload: todo,
    };

    dispatch(accion);
  };

  const handleDeleteTodo = (id) => {
    const accion = {
      type: "delete Todo",
      payload: id,
    };

    dispatch(accion);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <h2>Completados: 10 | Pendientes: 5</h2>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} />
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
