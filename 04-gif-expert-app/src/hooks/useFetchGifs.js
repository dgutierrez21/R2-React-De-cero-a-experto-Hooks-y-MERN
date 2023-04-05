import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [imagenes, setImagenes] = useState([]);

  const [cargando, setCargando] = useState(true);

  const getImagenes = async () => {
    const nuevasImagenes = await getGifs(categoria);
    setImagenes(nuevasImagenes);
    setCargando(false);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return {
    imagenes,
    cargando,
  };
};
