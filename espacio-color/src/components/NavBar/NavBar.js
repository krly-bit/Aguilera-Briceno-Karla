import React, { Component } from "react";

import * as ReactBootstrap from "react-bootstrap";
import Logo from '../../assets/images/logo/Logo';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


class NavBarCs extends React.Component  {
    render () {
        
        return <ReactBootstrap.Container fluid>
        <ReactBootstrap.Navbar bg="light" variant="light">
    <ReactBootstrap.Navbar.Brand href="#home">Navbar</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home"><Logo/></ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#novedades">Novedades</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pasteles"> Pasteles</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#invierno"> Invierno</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-info">Buscar</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar>
  </ReactBootstrap.Container>
 }

    
 } 
 
 export {NavBarCs}