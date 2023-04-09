import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const estadoInicial = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, estadoInicial, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
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

  const handleToggleTodo = (id) => {
    const accion = {
      type: "hecho Todo",
      payload: id,
    };

    dispatch(accion);
  };

  const contadorTodos = (value) =>
    todos.filter((todo) => todo.hecho === value).length;

  const todosCompletados = contadorTodos(true);

  const todosPendientes = contadorTodos(false);

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCompletados,
    todosPendientes,
  };
};
