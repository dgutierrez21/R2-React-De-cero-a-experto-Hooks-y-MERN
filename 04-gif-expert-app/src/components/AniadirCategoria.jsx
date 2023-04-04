import { useState } from "react";

export const AniadirCategoria = () => {
  const [valorInput, setValorInput] = useState("One Punch");

  const onInputChange = (evento) => {
    console.log(evento);
    console.log(evento.target.value);

    setValorInput(evento.target.value);
  };

  const onFormSubmit = (evento) => {
    evento.preventDefault();

    alert(valorInput);
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
