import React, { useState,useContext } from "react";
import ProductItem from "../components/ProductItem";
import {catContext} from '../context/CatContext'  




const Producet = () => { 

    // const [catdata,setCatDate] = useState(catData) 
  const { Cats } = useContext(catContext)  
  // const { Cart } = useContext(catContext)  
  // console.log(Cart);



  return (
    <div>
      <h1>Products</h1>

      <div className="row">  

      {Cats.map(cat => (

        <div className={"col-4"} key={cat.id} > 

        <ProductItem cat={cat} />

        </div>

      ))}   
    </div>

     
    </div>
  );
};

export default Producet;
