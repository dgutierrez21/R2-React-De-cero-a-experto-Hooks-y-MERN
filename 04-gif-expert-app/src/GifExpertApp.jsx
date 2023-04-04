import { useState } from "react";
import { AniadirCategoria } from "./components/AniadirCategoria";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  const onAniadirCategoria = (onNuevaCategoria) => {
    console.log(onNuevaCategoria);

    setCategorias([onNuevaCategoria, ...categorias]);
    //   const onAniadirCategoria = () => setCategorias((cat) => ["Valorant", ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AniadirCategoria
        //    onAniadirCategoria={setCategorias}
        onNuevaCategoria={(valor) => onAniadirCategoria(valor)}
      />

      <ol>
        {categorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
