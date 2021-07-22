import {useContext} from 'react';
import { useEffect, useState } from "react";
import Counter from '../counter/Counter'
import firebase from 'firebase/app'
import { getFirestore } from '../../firebase/firebase.js'


function Cart(props) {
 let cartlist=props.cartlist;
 console.log(cartlist);
 let buyerMail;
 let buyerName;
 let buyerPhone;
 const db=getFirestore();
 const order=db.collection('orders');
 function newOrder(cartlist, name, mail, phone, orderFb) {
     console.log(mail)
     console.log(name)
     console.log(cartlist)
     console.log(phone)
     console.log(orderFb)
let orderToCreate={
    buyer:{
        mail:mail,
        name:name,
        phone:phone,},
    date: firebase.firestore.Timestamp.fromDate( new Date()),

   items:cartlist,
   total:8000,


 }   
 console.log(orderToCreate)
 orderFb.add(orderToCreate).then(() =>
     console.log('Elemento creado'))
 
.catch( error=> console.log(error))

}

    return <div className="container">
<form>
<input type='text'placeholder='nombre' id='buyer-name' onChange={()=>buyerName=document.querySelector('#buyer-name').value}></input>
<input type='text' placeholder='mail' id='buyer-mail'onChange={()=> buyerMail=document.querySelector('#buyer-mail').value}></input>
<input type='number' placeholder='fono' id='buyer-phone'onChange={()=>buyerPhone=document.querySelector('#buyer-phone').value}></input> 
</form>

<button onClick={()=>{newOrder(cartlist.cart, buyerName, buyerMail,buyerPhone, order)}}> Confirmar compra </button>

    {cartlist.cart.length>0? (<button onClick={()=>cartlist.clear()}> Vaciar carrito </button>):(<> </>)}
    {cartlist.cart.length>0? (  cartlist.cart.map( item => {
    return   <div>
    <ul>
        <li> Producto: {item.item}</li>
        <li>  Cantidad: {item.quantity} </li> 
        <li> Stock: {item.stock} </li>
        <li>  id: {item.id} </li>
        <li>  Total Carrito : {cartlist.totalItems} </li>
        </ul>
        <Counter startCounter={item.quantity} stock={item.stock} id={item.id} item={item.item} addToCart={cartlist.addToCart} cartCounter={1}></Counter>
        <button onClick={()=>cartlist.removeItem(item.id)}> Quitar ítem </button> 
        </div>
    })  ) : ( <div> No hay items en el carrito </div>) 
        
        }




        
    </div>  


}
export default Cart