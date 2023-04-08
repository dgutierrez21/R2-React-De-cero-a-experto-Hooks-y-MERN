export const todoReducer = (estadoInicial, accion) => {
  switch (accion.type) {
    case "ABC":
      throw new Error("accion.type = ABC no esta implementada");

    default:
      return estadoInicial;
  }
};
