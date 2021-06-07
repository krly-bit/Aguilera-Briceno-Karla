import React, { useState } from 'react';

function Counter (props){
    
    const [count, setCount] = useState(1);
    let message;

    function onAdd (props){
        count+1 <= props.stock ? setCount(count +1): message="no hay stock disponible";


    }

    function onOff(){
        count -1 <=0? setCount(count-1): message=" ";

    } 

    return <container>
<div onclick={onAdd}> +</div> <div> {count} </div> <div onClick={onOff()}> - </div>

        </container>


}

export default Counter