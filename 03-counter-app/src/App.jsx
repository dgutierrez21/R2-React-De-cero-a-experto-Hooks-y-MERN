import { FirstApp } from "./FirstApp";

// const App2 = () => {
//   return (
//       <h1>Hola Mundo con React</h1>
//       <FirstApp />
//   );
// };

// Un fragment en React es una característica que permite agrupar un conjunto de elementos hijos (child elements) de un componente sin crear un elemento padre (parent element) adicional en el árbol de elementos (DOM). Esto puede ser útil para mejorar el rendimiento y evitar renderizaciones innecesarias al evitar la creación de nodos HTML adicionales. En lugar de crear un nodo HTML adicional, el fragment simplemente envuelve los elementos hijos, sin introducir un nodo adicional en el árbol de elementos.

const sub = "Este es un subtitulo";

const num = 10;

const App = () => {
  return (
    <>
      <h1>Hola Mundo con React</h1>
      <p>Soy un subtitulo</p>
      <FirstApp subtitulo={sub} numero={num} titulo2={123} />
    </>
  );
};

export default App;
