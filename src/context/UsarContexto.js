import axios from "axios";
// import React, { useContext } from "react";
import Contexto from "./Contexto";
import { useState } from "react";

export default function UsarContexto(props) {
  const { children } = props;
  const [estado, setEstado] = useState([]);
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const listameProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setEstado(res.data);
    console.log(res.data);
  };
  const agregarCarrito = (item) => {
    console.log("Agregamos a carrito", item);
  };
  const eliminarCarrito = () => {};
  return (
    <Contexto.Provider
      value={{
        productos: estado,
        // carrito: estadoInicial.carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
