import React, { useState,useContext,useEffect } from "react";
import CartItem from "../components/CartItem";
import {catContext} from '../context/CatContext'  



const Cart = () => { 

  const {  Cart  } =  useContext(catContext)  





const [total,setTotal] = useState() 

console.log(total);
useEffect(() => {
 setTotal (Cart.reduce((acc,item) => (acc + item.price) * item.qty , 0 ) ) // some time change to number 

}, [Cart]) 

  

  return ( 
    <div>
      <h1>Cart</h1>

      <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

      {Cart.map(cat => (

        <div className={"col-3"} key={cat.id}  > 

        <CartItem cat={cat}  />

        </div>

      ))}   
    </div>
    
    <h3> Total :  &#128178;{total} </h3> 
   

  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Pay now </button> 
   </div>
     
    </div>
  );
};
 
export default Cart;
