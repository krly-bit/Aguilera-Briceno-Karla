import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';



export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(id) {
    return cart.find(x => x.id === id);
  }

  function isInCart({ id }) {
    return id === undefined ? undefined : getFromCart(id);
  }

  function clear() {
    setCart([]);
  }

  function addToCart(product) {
    if (isInCart(product)) {
      console.log('Element already in cache store.');
      return;
    }
    setCart([product.item, product.quantity]);
    console.log('Elemento agregado!');
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, cartSize: cart.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
