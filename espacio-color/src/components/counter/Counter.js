import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Counter.css'

function Counter (props){
  
   /* const { addToCart } = useContext(CartContext);*/
    const [count, setCount] = useState(props.startCounter);
    const addToCart=props.addToCart;
    let message;

    function onAdd (){
        count < props.stock? setCount(count +1): console.log("no hay stock disponible");


    }

    function onSubstrat(){
        count > 0? setCount(count-1): console.log("no puedes llevar menos de cero productos");

    } 

    function BuyButton( props){
        return <Link exact to={`/cart`} className="BuyButton btn-light"> Comprar</Link>
             
            


    }

    return <div className="containerCounter">
 <button className="BuyButton btn-light" onClick={()=> addToCart({id:props.id, item:props.item, quantity:count, stock:props.stock})}> Agregar al carrito </button>
  <div className="counter">
      <div className="itemCounter itemAction" onClick={()=>onAdd()}>+</div> <div className="itemCounter itemNumber"> {count} </div> <div className="itemCounter itemAction" onClick={()=>onSubstrat()}>-</div>
</div> 
        <div>{  count >=1?  (<BuyButton url='/cart'/>): (<p> </p>) }
        
    </div> </div>

}

export default Counter