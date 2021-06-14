import React, { Component } from "react";

import * as ReactBootstrap from "react-bootstrap";

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


    </ReactBootstrap.Card.Body>

}

export default Item