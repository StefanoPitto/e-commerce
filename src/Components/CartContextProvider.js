import React, { useState } from "react";
import { Provider } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const addItem = (item, quantity) => {
    let newArray = cartItems;
    let found = false;
    for (let i = 0; i < newArray.length && !found; i++) {
      //Recorro el arreglo para ver si está el elemento.
      if (newArray[i].item.productId === item.productId) {
        if (newArray[i].quantity + quantity > newArray[i].item.maxStock) {
          //En caso de pasarme de la cantidad máxima permitida asigno el máximo valor posible viendo de no pasar el maxStock.
          setItemsQuantity(
            itemsQuantity + (newArray[i].item.maxStock - newArray[i].quantity) //Le sumo la cantidad que estoy agregando para no pasarme del máximo.
          );
          newArray[i].quantity = newArray[i].item.maxStock;
        } else {
          newArray[i].quantity = newArray[i].quantity + quantity; //En caso de que ya haya un item dentro del carrito, le sumo la cantidad nueva deseada.
          setItemsQuantity(itemsQuantity + quantity);
        }
        found = true;
      }
    }
    if (!found) {
      newArray.push({ item: { ...item }, quantity: quantity }); //En caso de que no lo haya encontrado en el arreglo lo agrego al nuevo arreglo.
      setItemsQuantity(itemsQuantity + quantity);
    }
    setCartItems(newArray); //Seteo el nuevo array actualizado.
  };

  const removeItem = (id) => {
    let newArray = [];
    for (let i = 0; i < cartItems.length; i++) {
      //Recorro todo el arreglo.
      if (cartItems[i].item.productId !== id) {
        //Si el ID  es distinto entonces lo agrego a mi nuevo arreglo.
        newArray.push(cartItems[i]);
      } else {
        setItemsQuantity(itemsQuantity - cartItems[i].quantity);
      }
    }
    setCartItems(newArray);
  };

  const clearCart = () => {
    setCartItems([]); //Cambio el state por un Arreglo vacío.
    setItemsQuantity(0);
  };

  const getCartItems = () => {
    return cartItems;
  };

  const getTotalCost = () => {
    let result = cartItems.reduce((total, current) => {
      return total + current.quantity * current.item.productPrice;
    }, 0);
    return result;
  };
  return (
    <Provider
      value={{
        addItem,
        removeItem,
        clearCart,
        getCartItems,
        itemsQuantity,
        getTotalCost,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
