import { useTodos } from "../hooks";
import { TodoAdd, TodoList } from "./components";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCompletados,
    todosPendientes,
  } = useTodos();

  return (
    <>
      <h1>TodoApp</h1>
      <h2>
        Completados: {todosCompletados} | Pendientes: {todosPendientes}
      </h2>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
