import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';



export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(id) {
    return cart.find(x => x.id === id);
  }

  function isInCart({obj}) {
    console.log({obj});
    return obj.id === undefined ? undefined : getFromCart(obj.id) !== undefined;
    
  }

  function clear() {
    setCart([]);
  }

  function addToCart(obj) {
    console.log({obj})
    if (isInCart({obj})) {
      console.log('Element already in cache store.');
     
      return;
    }

    let product=obj
    console.log(product)
    setCart([...cart, product]);
     console.log('elemento agregado');
    
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, cartSize: cart.length }}
    >
      {children}
    </CartContext.Provider>
  );
}
