

import * as ReactBootstrap from "react-bootstrap";
import Counter from '../counter/Counter';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props)
{ 
        return  <ReactBootstrap.Container fluid> 
<h2 >{props.greeting} </h2>
<Counter stock={5} startCounter={1}></Counter>
<ItemList></ItemList>
 </ReactBootstrap.Container> 
 


}

export default ItemListContainer