import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';
import Loading from '../../assets/images/loading/Loading';
import ArticleList from '../../ArticleList';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import Counter from '../counter/Counter';

function ItemDetailContainer ()
{
    const { addToCart } = useContext(CartContext);
    const cart=useContext(CartContext);
  

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
<div className="row mx-auto"> <div className="col-md-2"></div> <div className="col-md-8"><ItemDetail name={product.name} category={product.category} description={product.description} image={product.image} stock={product.stock} id={product.id} addToCart={addToCart} cart-context={cart} > </ItemDetail> </div> </div>)} </div>
/*<div>  detalle producto <br></br>
Producto: {product.name} <br></br>
Categoría : {product.category} <br></br>
Descripción: {product.description} <br></br>
<img src={`${product.image}`}></img>

 </div> */


}


export default ItemDetailContainer