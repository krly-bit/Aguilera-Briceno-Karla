
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import {useState } from "react";
import './CartWidget.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';

library.add(fab, faShoppingCart)

function CartWidget () {

    const  cart  = useContext(CartContext);


    return (<div> <Link exact to={`/cart`}> {cart.id} <FontAwesomeIcon icon="shopping-cart" className="cart"/> </Link>
        </div>

   

    )
}
 export default CartWidget