import {useState, useEffect} from "react";
import Item from '../Item/Item';
import * as ReactBootstrap from "react-bootstrap";
 function ItemList () {

   let products =[
        {id:"1", name:"agendas-minimal",  stock:"10", category:"libreria", description:"agenda con diseños minimalistas", models:["violeta", "amarillo", "azul", "verde agua", "verde musgo", "naranja"] },
        {id:"2", name: "móvil metálico",  stock:"20", category:"deco", description:"Móvio metalico con sonidos", models:"móvil metálico flautas"},
        {id:"3", name:"movil de semillas",stock:"20", category:"deco", description:"Móvil de semillas", models:["colores tropicales", "colores marinos", "colores puesta de sol", " colores noche"]},]

const [catalogo, setCatalogo] = useState([{ id:"", name:" ", stock:"", category:"", description:"", models:""}]);

useEffect( ()=>{
 new Promise( (resolve, reject)=>{
      setTimeout(resolve({result:products}, 3000))
  } )
  
  .then( 
      data=>{ if (data.result){
        console.log(data.result)
        setCatalogo(data.result)
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
. then ( msg=>{ return msg;})}, [] ) 

return  <ReactBootstrap.Row> 
  <ReactBootstrap.Col md={4}>
    <h2> Lista de Productos </h2>
  
  {catalogo.map(element=>{ 
return <Item name={element.name} id={element.id} category={element.category} stock={element.stock}> </Item>

         
        } ) }
        </ReactBootstrap.Col>
         </ReactBootstrap.Row> 
         
        }
        
        export default ItemList
