import { useState } from "react";
import { AniadirCategoria } from "./components/AniadirCategoria";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  const onAniadirCategoria = () => setCategorias(["CyberPunk", ...categorias]);
  //   const onAniadirCategoria = () => setCategorias((cat) => ["Valorant", ...cat]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AniadirCategoria onAniadirCategoria={setCategorias} />

      <ol>
        {categorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
