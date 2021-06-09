import React, { Component } from "react";

import * as ReactBootstrap from "react-bootstrap";
import Logo from '../../assets/images/logo/Logo';
import CartWidget from '../CartWidget/CartWidget'; 
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarCs() {
  
        
        return <ReactBootstrap.Container fluid>
        <ReactBootstrap.Navbar bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Brand href="#home"> <Logo/> </ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">

    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Inicio</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#novedades">Novedades</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pasteles"> Pasteles</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#invierno"> Invierno</ReactBootstrap.Nav.Link>
      
      </ReactBootstrap.Nav>
  
   
    <ReactBootstrap.Form inline>
    <CartWidget/>
      <ReactBootstrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
  
      <ReactBootstrap.Button variant="outline-info">Buscar</ReactBootstrap.Button>
    </ReactBootstrap.Form>
    
    </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Navbar>

  
  </ReactBootstrap.Container>
 }

    
 
 
 export default NavbarCs