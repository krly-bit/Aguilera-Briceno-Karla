import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { useEffect, useState } from "react";
import Counter from '../counter/Counter';
import Cart from '../Cart/Cart';

function CartContainer () {
    const cart  = useContext(CartContext);
    console.log(cart);
   
    const [cartlist, setCartlist] = useState(cart);
    console.log(cartlist);
    console.log(cartlist);
 
    
    return <Cart cartlist={cartlist}> </Cart>


}

export default CartContainer