import React, { useContext } from "react";
import { Contador, ContadorProvider } from "./Context";
import { CarritoProvider } from "./Carrito";
import { Boton } from "./Boton";
import { Label } from "./Label";
function App(props) {
  return (
    <CarritoProvider>
      <ContadorProvider>
        <Boton>-</Boton>
        <Label />
        <Boton>+</Boton>
      </ContadorProvider>
    </CarritoProvider>
  );
}

export default App;
