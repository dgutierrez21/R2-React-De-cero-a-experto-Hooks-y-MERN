import { useState } from "react";

export const AniadirCategoria = ({ onNuevaCategoria }) => {
  const [valorInput, setValorInput] = useState("");

  const onInputChange = (evento) => {
    console.log(evento);
    console.log(evento.target.value);

    setValorInput(evento.target.value);
  };

  const onFormSubmit = (evento) => {
    evento.preventDefault();

    const nuevoValorInput = valorInput.trim();

    if (nuevoValorInput.length <= 1) return;

    // onAniadirCategoria((categorias) => [valorInput, ...categorias]);
    onNuevaCategoria(nuevoValorInput);

    setValorInput("");
  };

  return (
    <form action="" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={valorInput}
        onChange={onInputChange}
      />
    </form>
  );
};
