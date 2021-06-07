

import * as ReactBootstrap from "react-bootstrap";
import Counter from '../counter/Counter';

function ItemListContainer (props)
{ 
        return  <ReactBootstrap.Container fluid> 
{props.greeting}
<Counter stock="10"></Counter>
 </ReactBootstrap.Container> 
 


}

export default ItemListContainer