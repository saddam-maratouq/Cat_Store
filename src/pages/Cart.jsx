import React, { useState,useContext,useEffect } from "react";
import CartItem from "../cartItem/CartItem";
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
      <center>  <h1 className="m-5 " >  Cart   </h1> </center>

      <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

      {Cart.map(cat => (

        <div className={"col-12  d-flex  "} key={cat.id}  > 

        <CartItem cat={cat}  />

        </div>

      ))}   
    </div>
    
    <h3>   Total :   &#128178;{total} </h3> 
   

  <div className="d-grid gap-2">
  <button className="btn btn-info" type="button">Pay now </button> 
   </div>
     
    </div>
  );
};
 
export default Cart;
