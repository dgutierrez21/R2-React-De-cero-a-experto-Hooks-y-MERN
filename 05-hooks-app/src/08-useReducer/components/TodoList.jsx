import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group d-flex flex-column gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
