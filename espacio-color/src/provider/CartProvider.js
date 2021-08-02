import React, { useContext, useState, useEffect} from 'react';
import CartContext from '../context/CartContext';



export default function CartProvider({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);
  const [totalItems, setTotalItems]=useState(0);
  const [alertInCart, setAlertInCart]=useState(false);
  const [totalPrice, setTotalPrice]=useState(0);
 
  useEffect(()=>{ updateQuantityItems() ; console.log(cart) } , [cart])
function getFromCart(id) {
    return cart.find(x => x.id === id);
  }
  function alert (){
   if (alertInCart) { setAlertInCart(false); console.log(alertInCart)}
   else {setAlertInCart(true); console.log(alertInCart)}
  }
  function isInCart({obj}) {
    console.log({obj});
    return obj.id === undefined ? undefined : getFromCart(obj.id);
    
  }

  function clear() {
    setCart([]);
    
  }

 function removeItem(id){
   console.log(cart);
   console.log(id);
   let cartMap=cart.map(element=>element.id);
   console.log(cartMap);
   let index= cartMap.indexOf(id);
   console.log(index);
   let testCarrito;
   if (index!=-1 && cart.length>1){
    testCarrito=cart.splice(index);
   
    setCart(testCarrito);
  }
    else {setCart([])}
 
   
    
  
  } 

  function quantityInStock(obj){

    return obj.stock > obj.quantity
  }

  function addToCart(obj) {
    console.log({obj})
    if (isInCart({obj})) {
      alert();
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
    updateQuantityItems();
     console.log(cart);
     console.log('elemento agregado');
    
  }

  function updateQuantityItems (){
  console.log('Me estoy ejecutando updete items')
  console.log(cart.length);
    if (cart.length>=1){ 
      console.log(cart.length);
      let total=cart.reduce((acummulator, currentValue)=> { return acummulator +currentValue.quantity}, 0)
      let totalQuantity= cart.reduce( (acummulator, currentValue)=>{ return acummulator + currentValue.total*currentValue.quantity},0)
      console.log(totalQuantity);
      setTotalItems(total);
      setTotalPrice(totalQuantity);
        
   
   }
  else { setTotalItems(0); setTotalPrice(0)}}
  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, removeItem, clear, totalItems, totalPrice, cartSize: cart.length, alertInCart, alert,  updateQuantityItems }}>
      {children}
    </CartContext.Provider>
  );
}
