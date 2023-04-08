import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="list-group d-flex flex-column gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
