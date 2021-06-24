import React, { useState } from 'react';
import './Counter.css'

function Counter (props){
  
    
    const [count, setCount] = useState(props.startCounter);
    let message;

    function onAdd (){
        count < props.stock? setCount(count +1): console.log("no hay stock disponible");


    }

    function onSubstrat(){
        count > 0? setCount(count-1): console.log("no puedes llevar menos de cero productos");

    } 

    function BuyButton( props){
        return <button onClick={(ev)=>{window.location.replace(props.url)}}> Terminar compra </button>


    }

    return <div>
  <h4> Contador </h4>
  <div className="counter">
<div className="itemCounter" onClick={()=>onAdd()}> +</div> <div className="itemCounter"> {count} </div> <div className="itemCounter" onClick={()=>onSubstrat()}> - </div>


        </div> 
        <div>{  count >=1?  (<BuyButton url='/cart'/>): (<p> </p>) }
        </div>
        
        </div>

}

export default Counter