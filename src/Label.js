import React, { useContext } from "react";
import { Contador } from "./Context";

export function Label() {
  const { count } = useContext(Contador);
  return <span>{count}</span>;
}
