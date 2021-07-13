import {useState, useEffect} from "react";
import Item from '../Item/Item';
import './itemList.css'  
import Loading from '../../assets/images/loading/Loading'
import ArticleList from '../../ArticleList'
import { useParams } from 'react-router-dom';
import { getFirestore } from './factory/firebase.js';

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
  .then( 
      data=>{ if (data.result){
        console.log(category.nameCategory)
        if (category.nameCategory!=undefined) { totalProducts= data.result.filter(product=> product.subcategory==category.nameCategory) }
        else { totalProducts=data.result;
        console.log("no pase el if")}
        setCatalogo(totalProducts)
        console.log(catalogo)
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
  
  <Item name={element.name} id={element.id} category={element.category} stock={element.stock}> </Item> </div>

         
        } ) 
        
         ) } </div>         
        }
        
        export default ItemList
