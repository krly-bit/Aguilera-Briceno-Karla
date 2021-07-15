import {useState, useEffect} from "react";
import Item from '../Item/Item';
import './itemList.css'  
import Loading from '../../assets/images/loading/Loading'
import ArticleList from '../../ArticleList'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.js';

 function ItemList () {

   let products =[
        {id:"1", name:"agendas-minimal",  stock:"10", category:"libreria", description:"agenda con diseños minimalistas", models:["violeta", "amarillo", "azul", "verde agua", "verde musgo", "naranja"] },
        {id:"2", name: "móvil metálico",  stock:"20", category:"deco", description:"Móvio metalico con sonidos", models:"móvil metálico flautas"},
        {id:"3", name:"movil de semillas",stock:"20", category:"deco", description:"Móvil de semillas", models:["colores tropicales", "colores marinos", "colores puesta de sol", " colores noche"]},]

const [catalogo, setCatalogo] = useState([{ id:"", name:" ", stock:"", category:"", description:"", models:""}]);
const [loading, setLoading] =useState(true);
let category=useParams();
let totalProducts;
useEffect( ()=>{
 setLoading(true); 
 const db = getFirestore();
 const itemCollection = db.collection('items');

 /*new Promise( (resolve, reject)=>*/
 itemCollection.get() 
  .then( (querySnapshot)=>{ if (querySnapshot.size>0){ setCatalogo(querySnapshot.docs); 
    totalProducts= querySnapshot.docs.map(product=> {let result= product.data(); 
    console.log(result.name+"son los datos") } )
        /*console.log(category.nameCategory)
        if (category.nameCategory!=undefined) { totalProducts= querySnapShot.docs.map(product=> {let result= product.data(); console.log(result) } ) }
        else { totalProducts=querySnapShot.result;
        console.log("no pase el if")}
        setCatalogo(totalProducts)
        console.log(catalogo) */
      } else{
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
.finally (() =>{
   setLoading(false);})}, [] ) 

return <div className="row containerProducts py-4"> 
  
    {loading?( <p> <h2> LOADING</h2> <Loading> </Loading> </p>): (
  
  catalogo.map(element=>{  
return <div className="col-md-4">
  
  <Item name={element.data().name} category={element.data().category} stock={element.data().stock}> </Item> </div>

         
        } ) 
        
         ) } </div>         
        }
        
        export default ItemList
