import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as ReactBootstrap from "react-bootstrap";


function ProductDetail ()
{
    let products =[
        {id:"1", name:"agendas-minimal",  stock:"10", category:"libreria", description:"agenda con diseños minimalistas", models:["violeta", "amarillo", "azul", "verde agua", "verde musgo", "naranja"], image:"/image/products/agenda-minimal.png", },
        {id:"2", name: "móvil metálico",  stock:"20", category:"deco", description:"Móvil metalico con sonidos", models:"móvil metálico flautas", image:"/image/products/movil-semillas.png"},
        {id:"3", name:"movil de semillas",stock:"20", category:"deco", description:"Móvil de semillas", models:["colores tropicales", "colores marinos", "colores puesta de sol", " colores noche"], image:"/image/products/movil-tubos.png"},]
const {productId}=useParams();
let productSelected;

const [product, setProduct] = useState([{id:"", name:"", stock:"", description:"", models:"",}]);

useEffect(()=>{
    for (let i=0; i<3; i++) {   console.log(productId); 
    if(products[i].id==productId) {productSelected=products[i]; 
        console.log(productSelected)
  
    }}
    /* let productSelected = products.filter ( (element)=> element.id=={productId}) 
    console.log({productSelected});*/
    setProduct(productSelected)},[])
return <div>  detalle producto <br></br>
Producto: {product.name} <br></br>
Categoría : {product.category} <br></br>
Descripción: {product.description} <br></br>
<img src={`${product.image}`}></img>

 </div>


}

export default ProductDetail