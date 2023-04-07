import { memo } from "react";

export const Small = memo(({ counter }) => {
  console.log("Render Small Component");

  return <small>{counter}</small>;
});
