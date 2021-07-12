import React, { useContext, useState, useEffect} from 'react';
import CartContext from '../context/CartContext';



export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);
  const [totalItems, setTotalItems]=useState(0);
  useEffect(()=>{  
   console.log(cart);
    let counter=0;
    if (cart.length>0){ 
    for(let i=0; i<cart.length; i++)
    {counter=cart[i].quantity + counter}
    setTotalItems(counter);
   }
  else {setTotalItems(0)}
  },[cart]) 
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

 function removeItem(id){
   console.log(cart);
   console.log(id);
   let index= cart.map(elemento=>elemento.id).indexOf(id);
 let updateCart= cart.splice(index,1);
 setCart([updateCart]);
 
   
    
  
  } 

  function quantityInStock(obj){

    return obj.stock > obj.quantity
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
      value={{ cart, addToCart, isInCart, removeItem, clear, totalItems, cartSize: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}
