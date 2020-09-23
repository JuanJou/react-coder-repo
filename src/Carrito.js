import React, { useState } from "react";
import { Boton } from "./Boton";
import { Label } from "./Label";

export const Carrito = React.createContext([]);

export function CarritoProvider({ children }) {
  const [productos, setProductos] = useState([]);
  return (
    <Carrito.Provider value={{ productos, setProductos }}>
      {children}
    </Carrito.Provider>
  );
}
