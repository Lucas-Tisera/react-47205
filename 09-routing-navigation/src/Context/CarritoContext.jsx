import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
      console.log("Nuestro Carrito:")
      console.log(cart)
    }, [cart])
  
    const eliminarProducto = (id) => {
      const nuevoCarrito = cart.filter((producto) => producto.id !== id)
      setCart(nuevoCarrito)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <CarritoContext.Provider value={{productosCarrito:cart, agregarProducto:setCart ,eliminarProducto, limpiarCarrito:clear}}>
            {children}
        </CarritoContext.Provider>
    )
}