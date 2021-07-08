import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { useEffect, useState } from "react";

function CartContainer () {
    const cart  = useContext(CartContext);
    const [cartlist, setCartlist] = useState(cart);
    console.log(cartlist);
    console.log(cartlist.cart);
    
    
    return <div className="container">
        {cartlist.cart? ( cartlist.cart.map( item => {
        return <ul>
            <li> Producto: {item.item}</li>
            <li>  Cantidad {item.quantity} </li> </ul>
        })) : ( <div> No hay items en el carrito </div>) 
            
            }
            
        </div>  


}

export default CartContainer