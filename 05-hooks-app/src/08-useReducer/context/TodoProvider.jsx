import { useTodos } from "../../hooks";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const useTodosObj = useTodos();

  return (
    <TodoContext.Provider value={{ ...useTodosObj }}>
      {children}
    </TodoContext.Provider>
  );
};
