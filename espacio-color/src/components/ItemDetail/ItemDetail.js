import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from 'react-router-dom';

function ItemDetail(props){
console.log(props)

    return <div> <h2>  detalle producto </h2> 
<ul>
<li> Producto: {props.name} </li>
<li> Categoría : {props.category} </li>
<li> Descripción: {props.description} </li> </ul>
<img src={`${props.image}`}></img>

 
</div>

}
export default ItemDetail