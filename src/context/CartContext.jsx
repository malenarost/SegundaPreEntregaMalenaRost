import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let newCart = cart.map((e) => {
        if (e.id === producto.id) {
          return { ...e, quantity: producto.quantity };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };
  //FUNCION PARA SABER SI EL PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };
  //FUNCION PARA BORRAR LOS PRD EL CARRITO
  const clearCart = () => {
    setCart([]);
  };
  //FUNCIÓN PARA SABER LA CANTIDAD TOTAL DE PRODUCTOS

  const getTotalQuantity = () => {
    const total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return total;
  };

  //FUNCIÓN PARA OBTENER EL TOTAL A PAGAR
  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, e) => {
      return acc + e.quantity * e.price;
    }, 0);
    return precioTotal;
  };

  //FUNCIÓN PARA ELIMINAR UN PRODUCTO DEL CARRITO

  const deleteProductById = (id) => {
    const newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  };

  const getQuantityById = (id) => {
    const productSelected = cart.find((e) => e.id === id);
    return productSelected?.quantity;
  };

  let data = {
    agregarAlCarrito,
    cart,
    setCart,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    deleteProductById,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
