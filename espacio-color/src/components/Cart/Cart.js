import {useContext} from 'react';
import { useEffect, useState } from "react";
import Counter from '../counter/Counter'

function Cart(props) {
 let cartlist=props.cartlist;
 console.log(cartlist);

    return <div className="container">
    {cartlist.cart.length>0? (<button onClick={()=>cartlist.clear()}> Vaciar carrito </button>):(<> </>)}
    {cartlist.cart.length>0? (  cartlist.cart.map( item => {
    return   <div>
    <ul>
        <li> Producto: {item.item}</li>
        <li>  Cantidad: {item.quantity} </li> 
        <li> Stock: {item.stock} </li>
        <li>  id: {item.id} </li>
        <li>  Total Carrito : {cartlist.totalItems} </li>
        </ul>
        <Counter startCounter={item.quantity} stock={item.stock} id={item.id} item={item.item} addToCart={cartlist.addToCart} cartCounter={1}></Counter>
        <button onClick={()=>cartlist.removeItem(item.id)}> Quitar ítem </button> 
        </div>
    })  ) : ( <div> No hay items en el carrito </div>) 
        
        }




        
    </div>  


}
export default Cart