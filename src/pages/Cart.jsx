import React, { useState,useContext,useEffect } from "react";
import CartItem from "../components/CartItem";
import {catContext} from '../context/CatContext'  



const Cart = () => { 

  const {  Cart  } =  useContext(catContext)  

  const { changeQty } =  useContext(catContext) 


  
// calc total from price 


// const  quantity = Cart.map(c => c.qty ) //[...]
// console.log({quantity});

// const amount = Cart.map(c => c.price ) //[100,150,250,300....]

// const reducer = (acc,item) => (acc + item) 


// const quntityTotal = quantity.reduce(reducer, 0 )  
// console.log({quntityTotal}); 


  // const Total = amount.reduce(reducer , 0) 
  // // console.log(Total); 


const [total,setTotal] = useState() 

console.log(total);
useEffect(() => {
 setTotal (Cart.reduce((acc,item) => acc + Number(item.price) * item.qty , 0 ) ) 

}, [Cart]) 



  return ( 
    <div>
      <h1>Cart</h1>

      <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

      {Cart.map(cat => (

        <div className={"col-3"} key={cat.id}  > 

        <CartItem cat={cat}  changeQty={changeQty} />

        </div>

      ))}   
    </div>
    
    <h3> Total :  ${total } </h3> 
   

  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Pay now </button> 
   </div>
     
    </div>
  );
};
 
export default Cart;
