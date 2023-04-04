import { useState } from "react";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  const onAniadirCategoria = () => setCategorias(["CyberPunk", ...categorias]);
  //   const onAniadirCategoria = () => setCategorias((cat) => ["Valorant", ...cat]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAniadirCategoria}>Añadir nueva Categoria</button>

      <ol>
        {categorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
