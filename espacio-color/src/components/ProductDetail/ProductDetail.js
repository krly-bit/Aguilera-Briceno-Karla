import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";


function ProductDetail ()
{
    let products =[
        {id:"1", name:"agendas-minimal",  stock:"10", category:"libreria", description:"agenda con diseños minimalistas", models:["violeta", "amarillo", "azul", "verde agua", "verde musgo", "naranja"] },
        {id:"2", name: "móvil metálico",  stock:"20", category:"deco", description:"Móvio metalico con sonidos", models:"móvil metálico flautas"},
        {id:"3", name:"movil de semillas",stock:"20", category:"deco", description:"Móvil de semillas", models:["colores tropicales", "colores marinos", "colores puesta de sol", " colores noche"]},]
/*const {ProductId}=useParams();
useEffect(()=>{
    console.log(ProductId)
})*/
return <div> Soy detalle producto</div>


}

export default ProductDetail