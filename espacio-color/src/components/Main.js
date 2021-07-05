
import NavbarCs from './NavBar/NavbarCs';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './main.css';
import React, {useContext} from 'react';
import {useState} from 'react';
import CartContext from '../context/CartContext'
import CartProvider from '../provider/CartProvider'

function Main () {

 

    return (
        
<BrowserRouter>
<CartProvider>
<NavbarCs/> 
<Switch>
     
      <Route exact path="/">
         
      


<ItemListContainer greeting="Catálogo de productos"/>

</Route>   

<Route exact path="/itemDetailContainer/:productId">
    
    <ItemDetailContainer/>


</Route>
<Route exact path="/category/:nameCategory">

<ItemListContainer greeting="Catálogo de productos"/>

</Route>

<Route exact path="/cart">

<p> Carrito de compras </p>

</Route>



</Switch>  
</CartProvider>
</BrowserRouter>

    )
}
 export default Main