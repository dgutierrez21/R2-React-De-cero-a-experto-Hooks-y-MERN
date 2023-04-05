import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoria }) => {
  getGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
    </>
  );
};
