
import NavbarCs from './NavBar/NavbarCs';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ProductDetail from './ProductDetail/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function Main () {


    return (
        <BrowserRouter>
         <NavbarCs/> 
     <Switch>
     
      <Route exact path="/">
         
      


<ItemListContainer greeting="Catálogo de productos"/>

</Route>   

<Route path="/productDetail/:productId">
    
    <ProductDetail/>


</Route>
</Switch>  
</BrowserRouter>
    )
}
 export default Main