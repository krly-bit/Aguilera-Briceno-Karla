
import NavbarCs from './NavBar/NavbarCs';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
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

<Route exact path="/itemDetailContainer/:productId">
    
    <ItemDetailContainer/>


</Route>
<Route exact path="/category/:id">

<ItemListContainer greeting="Catálogo de productos"/>

</Route>



</Switch>  
</BrowserRouter>
    )
}
 export default Main