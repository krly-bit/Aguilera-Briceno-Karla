import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import './Counter.css'
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import { useParams } from 'react-router-dom';

function Counter (props){
  
   /* const { addToCart } = useContext(CartContext);*/
   
    let [count, setCount] = useState(props.startCounter);
    let cart=useContext(CartContext);
    const addToCart=props.addToCart;
    let updateQuantityItems=cart.updateQuantityItems;
    let cartList=cart.cart;
    console.log(cart.cart);
    console.log(props.id);
    
   useEffect(()=>{let isInCart=cartList.find(product=>product.id===props.id)
    if (isInCart!=undefined){
        
        let index= cartList.map(element=>element.id).indexOf(props.id);
        cartList[index].quantity=count; } updateQuantityItems()
    } ,[count])
    let message;
    
    
    
    
    function onAdd (){
      if(count < props.stock) {  setCount(count +1) } else {console.log("no hay stock disponible")}; 
    }

    function onSubstrat(){
        if (count >= 0) { setCount(count--)} else {console.log("no puedes llevar menos de cero productos")};

    } 

    function BuyButton( props){
        return <Link exact to={`/cart`} className="BuyButton btn-light"> Comprar</Link>
             
            


    }

    return <div className="containerCounter itemAction"> { !props.cartCounter? (<div className="containerCounter">
    <button className="BuyButton btn-light" onClick={()=> { addToCart({ item:props.item, quantity:count, stock:props.stock, id:props.id, price:props.price, total:props.price*count}) }}> Agregar al carrito </button>
     <div className="counter">
    <div className="itemCounter itemAction" onClick={()=>onAdd()}>+</div> <div className="itemCounter itemNumber"> {count} </div> 
    <div className="itemCounter itemAction" onClick={()=>onSubstrat()}>-</div> 
   </div> 
           <div>{  count >=1?  (<BuyButton url='/cart'/>): (<p> </p>) }
           
       </div> </div>): (<div className="containerCounter"> <div  onClick={()=>onAdd()} className="itemCounter">+</div> <div className="itemCounter itemNumber"> {count} </div> <div className="itemCounter itemAction" onClick={()=>onSubstrat()}>-</div>  </div> )
 }
</div>
}

export default Counter