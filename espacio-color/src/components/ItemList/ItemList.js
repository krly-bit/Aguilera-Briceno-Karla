import {useState, useEffect} from "react";
import Item from '../Item/Item';
import './itemList.css'  
import Loading from '../../assets/images/loading/Loading'
import ArticleList from '../../ArticleList'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.js';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";

 
 function ItemList (props) {

  

/*const [catalogo, setCatalogo] = useState([]);
const [totalproducts, setTotalproducts]= useState([]);
const [loading, setLoading] =useState(true);
let {nameCategory}=useParams();
let ruta = useLocation();
let productsList;
useEffect( ()=>{
 setLoading(true); 
 const db = getFirestore();
 const itemCollection = db.collection('items');

 

 if (catalogo.length <=0)
 {console.log('catalogo es menor a cero');
   itemCollection.get() 
  .then( (querySnapshot)=>{ if (querySnapshot.size>0){
    setTotalproducts(querySnapshot.docs)
    console.log(nameCategory);
    console.log(ruta);
    console.log(querySnapshot.docs[1].data())
   if (nameCategory==undefined) 
   {setCatalogo(querySnapshot.docs); console.log(totalproducts) } 
   else { productsList=querySnapshot.docs.filter(element=> element.data().subcategory==nameCategory); console.log(productsList);setCatalogo(productsList)} 
  
       
         
          throw new Error()
      }

      },
      error=>{

        console.log("Ha ocurrido un error")

      }
  )
  .catch(error=>{ console.log(error.message);
    return "No hay productos disponibles"
} ) 
.finally(() =>{
   setLoading(false);}) }  
  else { 
    console.log('catalogo tiene otro valor')
    console.log(catalogo);
    if (nameCategory!=undefined)
 { let newProducts= catalogo.filter(element=> element.data().subcategory==nameCategory); setCatalogo(newProducts) ; setLoading(false);

  } else{ 
    console.log(catalogo)
    setCatalogo(totalproducts); setLoading(false)} 
} }, [ruta], []) */
   
  

return <div className="row containerProducts py-4"> 
  
    {props.loading?( <p> <Loading> </Loading> </p>): (props.catalogo.map(element=>{  
return <div className="col-md-4">
  
  <Item name={element.data().name} category={element.data().category} stock={element.data().stock} id={element.id}> </Item> </div>

         
        } ) 
        
         ) } </div>         
        }
        
        export default ItemList
