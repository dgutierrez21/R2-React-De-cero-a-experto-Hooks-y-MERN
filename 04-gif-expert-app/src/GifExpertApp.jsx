import { useState } from "react";
import { AniadirCategoria } from "./components/AniadirCategoria";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch", "Dragon Ball"]);

  const onAniadirCategoria = (onNuevaCategoria) => {
    console.log(onNuevaCategoria);

    const categoriasLowerCase = categorias.map((categoria) =>
      categoria.toLowerCase()
    );

    const onNuevaCategoriaLowerCase = onNuevaCategoria.toLowerCase();

    if (categoriasLowerCase.includes(onNuevaCategoriaLowerCase)) return;

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

      {/* No se recomienda utilizar el índice del map como key de un elemento en
        React porque puede generar problemas de rendimiento y de representación
        visual. */}
      {categorias.map((categoria) => (
        <GifGrid categoria={categoria} key={categoria} />
      ))}
    </>
  );
};
