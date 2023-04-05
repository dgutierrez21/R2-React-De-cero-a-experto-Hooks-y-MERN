import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

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

      <ol>
        {imagenes.map(({ id, titulo }) => (
          <li key={id}>{titulo}</li>
        ))}
      </ol>
    </>
  );
};
