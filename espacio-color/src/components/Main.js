
import NavbarCs from './NavBar/NavbarCs';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
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

 const db=getFirestore();
 const order=db.collection('orders');

 const newOrder={

    buyer:{
        mail:'kar.aguilera.bri@gmail.com',
        name:'Karly',
        phone:'12345'},
    date: firebase.firestore.Timestamp.fromDate( new Date()),

   items:[{
       id:'ssgghh',
       price: 5000,
       title:' agenda full color'
   }],
   total: 5000


 }

 order.add(newOrder)
 .then(({id}) =>
     console.log(`Elemento creado con Id ${id}`))
 
.catch( error=> console.log(error))


 


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