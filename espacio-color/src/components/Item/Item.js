import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './item.css';

function Item( props) {

    return <div className="card-body itemList">
        <div className="card-title text-center">
           {props.name}
        </div>
        <div className=" card-text cardText">
            <div className="list-group-item cardText">
            Categoría: {props.category}<br/> 
            </div>
            <div className=" list-group-item cardText">
            Cantidad en Stock : { props.stock}
            </div>
        </div>
        <a className="py-2  px-2 button btn-light button-item"> <Link exact to={`/itemDetailContainer/${props.id}`} className="link">  Ver Detalle</Link>  </a>

    </div>

}

export default Item
/*<Link exact to={`/itemDetailContainer/${props.id}/`} className="link"> Ver Detalle</Link> */