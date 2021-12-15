import React, { useState,useContext } from "react";
import CartItem from "../components/CartItem";
import {catData} from '../Cat-Data/CatData' 
import {catContext} from '../context/CatContext'  



const Cart = () => { 

  const {  Cart } =  useContext(catContext) 
   

  return (
    <div>
      <h1>Cart</h1>

      <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

      {Cart.map(cat => (

        <div className={"col-3"} key={cat.id} > 

        <CartItem cat={cat} />

        </div>

      ))}   
    </div>
    
    <h3> Total : 2000 </h3> 

  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Pay now </button> 
   </div>
     
    </div>
  );
};
 
export default Cart;
