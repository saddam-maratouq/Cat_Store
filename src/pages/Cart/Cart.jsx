import React, { useState,useContext,useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import {catContext} from '../../context/CatContext'  

// react tostify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Cart = () => { 

  const {  Cart  } =  useContext(catContext)  

 

 const SucssesHandler = () => {
  
  toast.success("payed Successful" ,{
    autoClose: 2000,
    progressStyle: { background: 'linear-gradient(to right, green 0%, #68d4f3 100%)' },
  })
 }


const [total,setTotal] = useState() 

console.log(total); 

useEffect(() => {
 setTotal (Cart.reduce((acc,item) => (acc + item.price) * item.qty , 0 ) ) // some time change to number 

}, [Cart]) 

  

  return ( 
    <div >

      <div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

      {Cart.map(cat => (

        <div className={"col-12  d-flex  "} key={cat.id}  > 

        <CartItem cat={cat}  />

        </div>

      ))}   
    </div>
    
    <h3>   Total :   &#128178;{total} </h3> 
   

  <div className="d-grid gap-2">
  <button onClick={SucssesHandler} className="btn btn-info" type="button">Pay now
  <ToastContainer 
  />
   </button> 
   </div>
     
    </div>
  );
};
 
export default Cart;
