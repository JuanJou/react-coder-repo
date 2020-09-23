import React, { useContext } from "react";
import { Contador } from "./Context";

export function Boton({ children }) {
  const { setCount } = useContext(Contador);
  const add = () => {
    setCount((prevCounter) => prevCounter + 1);
  };
  return <button onClick={add}>{children}</button>;
}
