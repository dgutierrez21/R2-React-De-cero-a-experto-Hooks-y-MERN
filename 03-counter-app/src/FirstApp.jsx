const nuevoMensaje = "Este es un nuevo mensaje";

const nuevoNumero = 543;

const nuevoBoleano = true;

const nuevoArr = [1, 2, 3, , 4, 5];

const nuevoObj = {
  mensaje: "Hola Mundo",
  hora: "6:00pm",
};

const nuevaFunc = (num) => num * 12;

export const FirstApp = () => {
  return (
    <>
      <h1>{nuevoMensaje}</h1>
      <p>Resultado de la suma 10 + 5 es: {10 + 5}</p>
      <p>{nuevoNumero}</p>
      {/* Los valores boleanos no se muestran en pantalla */}
      <p>{nuevoBoleano}</p>
      <p>{nuevoArr}</p>
      {/* los objetos literales no estan permitidos, solo se permite acceder a los valores de sus propiedades */}
      {/* <p>{nuevoObj}</p> Error */}
      <p>{nuevoObj.mensaje}</p>
      {/* sin embargo, es posible mostrar un objeto de la siguiente forma */}
      <code>{JSON.stringify(nuevoObj)}</code>
      <h1>{nuevaFunc(500)}</h1>
    </>
  );
};
