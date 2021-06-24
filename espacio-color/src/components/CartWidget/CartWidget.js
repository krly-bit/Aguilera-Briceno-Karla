
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import './CartWidget.css'

library.add(fab, faShoppingCart)

function CartWidget () {


    return (<div> <Link exact to={`/cart`}> <FontAwesomeIcon icon="shopping-cart" className="cart"/> </Link>
        </div>

   

    )
}
 export default CartWidget