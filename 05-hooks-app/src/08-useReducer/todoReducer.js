export const todoReducer = (estadoInicial, accion) => {
  switch (accion.type) {
    case "add Todo":
      return [...estadoInicial, accion.payload];
    case "delete Todo":
      return estadoInicial.filter((todo) => todo.id !== accion.payload);
    case "hecho Todo":
      return estadoInicial.map(todo => {
        if(todo.id === accion.payload) {
            return {...todo, hecho: !todo.hecho}

        }

        return todo;
      })
    default:
      return estadoInicial;
  }
};
