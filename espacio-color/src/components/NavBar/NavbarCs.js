import React, { Component } from "react";
import Logo from '../../assets/images/logo/Logo';
import CartWidget from '../CartWidget/CartWidget'; 
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';


import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarCs(props) {

 
  
        
        return <div className="container-fluid">
        <div className="navbar navbar-light bg-light navbar-expand-md sticky-top main-menu">
                      
      
        <div className="navbar-brand" href="/"> <Logo/> </div>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapsed" aria-controls="navbar-collapsed" aria-expanded="false" aria-label="Toggle navigation">

    
        
        <span className="navbar-toggler-icon"></span>
        
        </button>
    <div className="navbar-expand-md navbar-nav collapse navbar-collapse navbar-menu mr-auto" id="navbar-collapsed">
     
  
       
      <NavLink exact to={`/`} className="menuLink" activeClassName="selectedLink">
        Inicio </NavLink> 
        <div className="dropdown show">

        <div id="dropdownMenuLink" className="menuLink dropdown-toggle" activeClassName="selectedLink" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        deco-hogar </div>
       <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
 <li> <NavLink  exact to={`/category/cuadros`} className="dropdown-item">Cuadros</NavLink> </li>
<li>  <NavLink  exact to={`/category/movil`} className="dropdown-item">Móviles</NavLink> </li>
<li>  <NavLink  exact to={`/category/luminaria`} className="dropdown-item">Luminaria</NavLink> </li>
  
</ul>

        
        </div>
        
        
      <NavLink exact to={`/category/novedades`} className="menuLink" activeClassName="selectedLink">
        Novedades </NavLink> 
        <NavLink exact to={`/category/invierno`} className="menuLink" activeClassName="selectedLink">
        Invierno </NavLink> 

      
      </div>

        
    <form className="form-menu">
    <CartWidget/>
      <input className="form-control" type="search" placeholder="Buscar"/>
  
      <button className="btn btn-outline-info" type="submit">Buscar</button>
    </form>
      
  
    
    
    </div>

    

    
    
  </div>

  
  
 }

    
 
 
 export default NavbarCs