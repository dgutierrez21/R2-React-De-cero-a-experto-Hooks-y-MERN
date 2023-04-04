import { useState } from "react";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  console.log(categorias);

  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        {categorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
