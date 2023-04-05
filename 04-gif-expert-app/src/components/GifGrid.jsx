import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);

  const getImagenes = async () => {
    const nuevasImagenes = await getGifs(categoria);
    setImagenes(nuevasImagenes);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return (
    <>
      <h3>{categoria}</h3>

      <div className="card-grid">
        {imagenes.map((imagen) => (
          <GifItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
