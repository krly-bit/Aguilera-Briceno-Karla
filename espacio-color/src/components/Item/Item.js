import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import './item.css';

function Item( props) {

    return <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>
          Producto: {props.name}
        </ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>
            <ReactBootstrap.ListGroup.Item>
            Categoría: {props.category}<br/> 
            </ReactBootstrap.ListGroup.Item>
            <ReactBootstrap.ListGroup.Item>
            Cantidad en Stock : { props.stock}
            </ReactBootstrap.ListGroup.Item>
        </ReactBootstrap.Card.Text>
        <ReactBootstrap.Button variant="primary"> <Link exact to={`/itemDetailContainer/${props.id}`} className="link">  Ver Detalle</Link>  </ReactBootstrap.Button>

    </ReactBootstrap.Card.Body>

}

export default Item
/*<Link exact to={`/itemDetailContainer/${props.id}/`} className="link"> Ver Detalle</Link> */