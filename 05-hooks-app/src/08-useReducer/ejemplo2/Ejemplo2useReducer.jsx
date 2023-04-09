import React from "react";
import { CounterWithUseState } from "./CounterWithUseState";
import { CounterWithuseReducer } from "./CounterWithuseReducer";

export const Ejemplo2useReducer = () => {
  return (
    <div className="text-center">
      <CounterWithUseState />
      <CounterWithuseReducer />
    </div>
  );
};
