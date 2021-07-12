
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import {useState, useEffect} from "react";
import './CartWidget.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';

library.add(fab, faShoppingCart)

function CartWidget () {

    const  cart  = useContext(CartContext);
    console.log(cart);
    let total=0;
   


    return (<div> <Link exact to={`/cart`}> {cart.totalItems} <FontAwesomeIcon icon="shopping-cart" className="cart"/> </Link>
        </div>

   

    )
}
 export default CartWidget