
import NavbarCs from './NavBar/NavbarCs';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Counter from './counter/Counter'
import CartContainer from './CartContainer/CartContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './main.css';
import React, {useContext} from 'react';
import {useState} from 'react';
import CartContext from '../context/CartContext'
import CartProvider from '../provider/CartProvider'
import firebase from 'firebase/app'
import { getFirestore } from '../firebase/firebase.js'



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

<CartContainer></CartContainer>
</Route>
</Switch>  
</CartProvider>
</BrowserRouter>

    )
}
 export default Main