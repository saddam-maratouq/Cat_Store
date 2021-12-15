import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import {  Link } from "react-router-dom";

import './cartIcon.style.css' 

const CartIcon = () => {
    return (
        <div id="cart-icon"> 
        <Link  to='cart' > 
            <FontAwesomeIcon className='shoping-cart' icon={faShoppingCart} >  </FontAwesomeIcon> 
           
            <span className="badge bg-danger ">2</span>
        </Link> 
        </div>
    )
}

export default CartIcon
