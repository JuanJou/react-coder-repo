import React, { useState } from "react";
import { Boton } from "./Boton";
import { Label } from "./Label";

export const Contador = React.createContext(0);

export function ContadorProvider({ children }) {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };
  return (
    <Contador.Provider value={{ count, setCount, reset }}>
      {children}
    </Contador.Provider>
  );
}
