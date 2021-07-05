import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';
import Loading from '../../assets/images/loading/Loading';
import ArticleList from '../../ArticleList';


function ItemDetailContainer ()
{
    let products =[
        {id:"1", name:"agendas-minimal",  stock:10, category:"libreria", description:"agenda con diseños minimalistas", models:["violeta", "amarillo", "azul", "verde agua", "verde musgo", "naranja"], image:"/image/products/agenda-minimal.png", },
        {id:"2", name: "móvil metálico",  stock:20, category:"deco", description:"Móvil metalico con sonidos", models:"móvil metálico flautas", image:"/image/products/movil-semillas.png"},
         {id:"3", name:"movil de semillas",stock:20, category:"deco", description:"Móvil de semillas", models:["colores tropicales", "colores marinos", "colores puesta de sol", " colores noche"], image:"/image/products/movil-tubos.png"},]

        let productId=useParams();
        console.log(productId);
let productSelected;

const [product, setProduct] = useState([{id:"", name:"", stock:"", description:"", models:"",}]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
 setLoading(true);  
new Promise( (resolve, reject) => {

        setTimeout(resolve({ result: ArticleList,}, 3000))})

        .then( (data) => {

            if(data.result)
            {


            console.log(data.result)
    for (let i=0; i<3; i++) {   console.log(`Este es el id del producto ${productId.productId}`); 
    if(data.result[i].id==productId.productId) {productSelected=data.result[i]; 

        console.log(productSelected) ;
        setProduct(productSelected);
  
     } } } else { throw new Error()}},

     (error)=> {
         console.log("Ha ocurrido un error");
     }
     
     ).catch( error=> {console.log(error.message);
        return <div> Ha ocurrido un error</div>
    } )
    .finally( ()=>{ setLoading(false) }) }, [])
return <div className="container my-5 mx-auto containerProductDetail"> 
{ loading? (<p className="text-center"> <h2> Loading </h2> <Loading></Loading> </p> ): (
<div className="row mx-auto"> <div className="col-md-2"></div> <div className="col-md-8"><ItemDetail name={product.name} category={product.category} description={product.description} image={product.image} stock={product.stock} id={product.id}> </ItemDetail> </div> </div>)} </div>
/*<div>  detalle producto <br></br>
Producto: {product.name} <br></br>
Categoría : {product.category} <br></br>
Descripción: {product.description} <br></br>
<img src={`${product.image}`}></img>

 </div> */


}


export default ItemDetailContainer