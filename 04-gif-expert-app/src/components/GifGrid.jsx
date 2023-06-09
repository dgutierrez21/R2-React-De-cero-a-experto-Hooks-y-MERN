import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ categoria }) => {
  const { imagenes, cargando } = useFetchGifs(categoria);

  console.log({ cargando });

  return (
    <>
      <h3>{categoria}</h3>

      {cargando && <h2>Cargando...</h2>}

      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
