
import Counter from '../counter/Counter';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


function ItemListContainer (props)
{ 
        return  <div className="container"> 
<h2 className="text-center main-title my-4 py-4" >{props.greeting} </h2>
<div className="row">

<ItemList></ItemList>
</div>
 </div> 
 


}

export default ItemListContainer