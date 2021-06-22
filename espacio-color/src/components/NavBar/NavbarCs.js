import React, { Component } from "react";

import * as ReactBootstrap from "react-bootstrap";
import Logo from '../../assets/images/logo/Logo';
import CartWidget from '../CartWidget/CartWidget'; 
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';


import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarCs(props) {
  
        
        return <ReactBootstrap.Container fluid>
        <ReactBootstrap.Navbar bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Brand href="/"> <Logo/> </ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">

    <ReactBootstrap.Nav className="mr-auto">
  
      <NavLink exact to={`/`} className="menuLink" activeClassName="selectedLink">
        Inicio </NavLink> 
      <NavLink exact to={`/category/novedades`} className="menuLink" activeClassName="selectedLink">
        Novedades </NavLink> 
        
        
      <NavLink exact to={`/category/pasteles`} className="menuLink" activeClassName="selectedLink">
        Pasteles </NavLink> 
        <NavLink exact to={`/category/invierno`} className="menuLink" activeClassName="selectedLink">
        Invierno </NavLink> 

      
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