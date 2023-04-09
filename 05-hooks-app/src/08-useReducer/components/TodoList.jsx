import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group d-flex flex-column gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
