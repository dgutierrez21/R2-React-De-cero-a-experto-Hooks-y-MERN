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

      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </>
  );
};
