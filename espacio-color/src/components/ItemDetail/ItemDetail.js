import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import Counter from '../counter/Counter';
import './itemDetail.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import Alert from './Alert';

function ItemDetail(props){
const cartState=useContext(CartContext);
let alertInCart= cartState.alertInCart;
console.log(alertInCart)    
console.log(props)
console.log(props.product)


    return <> <div className="card mx-auto px-auto mb-3" >  
<div className="row g-0 py-5 bgProductDetail">
<div className="col-md-4 cardImage">
<img src={`${props.image}`} className="card-img-top" alt={`${props.name}`}></img>
</div>
<div className="col-md-8 cardInfo">
<div className="card-body">

<h5 className="card-title text-center productTitle"> {props.name} </h5>
<p className="card-text textDetail py-4">
 <ul>   
<li> Categoría : {props.category} </li>
<li> Descripción: {props.description} </li>
<li> Precio: {props.price}</li> </ul> </p>


 <Counter startCounter={1} stock={props.stock} id={props.id} item={props.name} addToCart={props.addToCart} cart={props.cart} price={props.price}></Counter>

</div>
</div>

</div>
{alertInCart && <Alert></Alert> } 
</div>

 </>
}
export default ItemDetail