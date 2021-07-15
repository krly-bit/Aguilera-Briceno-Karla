import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';
import Loading from '../../assets/images/loading/Loading';
import ArticleList from '../../ArticleList';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import Counter from '../counter/Counter';
import { getFirestore } from '../../firebase/firebase.js';

function ItemDetailContainer ()
{    
    const db = getFirestore();
    const itemCollection = db.collection('items');
    
    const { addToCart } = useContext(CartContext);
    const cart=useContext(CartContext);
  

        let productId=useParams();
        console.log(productId);
let productSelected;

const [product, setProduct] = useState([{id:"", name:"", stock:"", description:"", models:"",}]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
 setLoading(true);  
 itemCollection.get()


        .then( (querySnapshot) => {

            if(querySnapshot.size>0)
    {console.log(querySnapshot.docs)
    for (let i=0; i<querySnapshot.size; i++) {   console.log(`Este es el id del producto ${productId.productId}`); 
    if(querySnapshot.docs[i].id==productId.productId) {productSelected=querySnapshot.docs[i].data(); 

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