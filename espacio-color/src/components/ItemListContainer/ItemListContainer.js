
import Counter from '../counter/Counter';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from "react";
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase.js';
import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";


function ItemListContainer (props)
{ 
        const [catalogo, setCatalogo] = useState([]);
const [totalproducts, setTotalproducts]= useState([]);
const [loading, setLoading] =useState(true);
let {nameCategory}=useParams();
let ruta = useLocation();
let productsList;
useEffect( ()=>{
 setLoading(true); 
 const db = getFirestore();
 const itemCollection = db.collection('items');

 /*new Promise( (resolve, reject)=>*/

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
  
        /*console.log(category.nameCategory)
        if (category.nameCategory!=undefined) { totalProducts= querySnapShot.docs.map(product=> {let result= product.data(); console.log(result) } ) }
        else { totalProducts=querySnapShot.result;
        console.log("no pase el if")}
        setCatalogo(totalProducts)
        console.log(catalogo) */
         
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
} }, [ruta], [])
        
        return  <div className="container"> 
        {nameCategory? ( <h2 className='text-center main-title my-4 py-4'> {catalogo[0].data().subcategoryName} </h2>):(<h2 className='text-center main-title my-4 py-4'> Catálogo de Productos</h2>)}

<div className="row">

<ItemList catalogo={catalogo} loading={loading}></ItemList>
</div>
 </div> 
 


}

export default ItemListContainer