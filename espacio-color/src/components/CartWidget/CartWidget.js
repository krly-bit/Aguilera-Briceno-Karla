
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

library.add(fab, faShoppingCart)

function CartWidget () {


    return (<div>    <FontAwesomeIcon icon="shopping-cart" className="cart"/>
        </div>

   

    )
}
 export default CartWidget