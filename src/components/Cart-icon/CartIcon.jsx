import {useContext,useState,useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import {  Link } from "react-router-dom"; 
import { catContext } from '../../context/CatContext';

import { IoCartOutline } from "react-icons/io5";

//icon 

import './cartIcon.style.css' 

const CartIcon = () => { 

  const {  Cart  } =  useContext(catContext)  



  const [total,setTotal] = useState() 

console.log(total);
useEffect(() => {
 setTotal (Cart.reduce((acc,item) => (acc +  item.qty)  , 0 ) ) // some time change to number 

}, [Cart]) 



    return (
        <div id="cart-icon"> 
        <Link  to='cart' > 
        <IoCartOutline  color='gray' size="1.9em"   />
           
            <span className="badge bg-danger ">{total} </span>
        </Link> 
        </div>
    )
}

export default CartIcon
