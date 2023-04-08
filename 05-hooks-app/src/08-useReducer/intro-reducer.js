const estadoInicial = [
  {
    id: 1,
    todo: "Sacar la basura",
    hecho: false,
  },
];

const todoReducer = (estado = estadoInicial, accion = {}) => {
  switch (accion.type) {
    case "add Todo":
      return [...estado, accion.payload];
  }
  return estado;
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: "Sacar a pasear el perro",
  hecho: false,
};

const addTodoAction = {
  type: "add Todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
