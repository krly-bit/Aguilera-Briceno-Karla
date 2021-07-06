import React, { useState } from 'react';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import './Counter.css'

function Counter (props){
  
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(props.startCounter);
    let message;

    function onAdd (){
        count < props.stock? setCount(count +1): console.log("no hay stock disponible");


    }

    function onSubstrat(){
        count > 0? setCount(count-1): console.log("no puedes llevar menos de cero productos");

    } 

    function BuyButton( props){
        return <div>
             
            <button className="BuyButton btn-light" onClick={(ev)=>{window.location.replace(props.url)}}> Terminar compra </button> </div>


    }

    return <div className="containerCounter">
 <button className="BuyButton btn-light" onClick={()=> addToCart({id:props.id, item:props.item, quantity:count})}> Agregar al carrito </button>
  <div className="counter">
      
<div className="itemCounter itemAction" onClick={()=>onAdd()}>+</div> <div className="itemCounter itemNumber"> {count} </div> <div className="itemCounter itemAction" onClick={()=>onSubstrat()}>-</div>
</div> 
        <div>{  count >=1?  (<BuyButton url='/cart'/>): (<p> </p>) }
        </div>
        
        </div>

}

export default Counter