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

  function quantityInStock(obj){

    return obj.stock < obj.quantity
  }

  function addToCart(obj) {
    console.log({obj})
    if (isInCart({obj})) {
      console.log('El producto ya está en el carrito');
           return;
    }

    if (quantityInStock({obj}))
    { console.log('No hay suficiente stock del producto');
  return;   
  }

    let product=obj
    console.log(product)
    setCart([...cart, product]);
     console.log(cart);
     console.log('elemento agregado');
    
  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, cartSize: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}
