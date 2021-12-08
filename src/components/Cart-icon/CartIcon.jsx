import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartIcon.style.css'

const CartIcon = () => {
    return (
        <div id="cart-icon">
            <FontAwesomeIcon className='shoping-cart' icon={faShoppingCart} >  </FontAwesomeIcon> 
           
            <span className="badge bg-danger ">2</span>
        
        </div>
    )
}

export default CartIcon
