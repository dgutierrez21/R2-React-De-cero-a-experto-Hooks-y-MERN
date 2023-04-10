import { useContext } from "react";
import { TodoAdd, TodoList } from "./components";
import { TodoContext } from "./context/TodoContext";

export const TodoApp = () => {
  const { todos, handleNewTodo, todosCompletados, todosPendientes } =
    useContext(TodoContext);

  return (
    <>
      <h1>TodoApp</h1>
      <h2>
        Completados: {todosCompletados} | Pendientes: {todosPendientes}
      </h2>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>

          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
