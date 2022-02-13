import axios from "axios";
import Contexto from "./Contexto";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);
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
