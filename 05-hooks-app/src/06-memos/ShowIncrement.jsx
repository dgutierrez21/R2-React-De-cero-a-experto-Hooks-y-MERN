import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Render ShowIncrement");

  return (
    <button
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
