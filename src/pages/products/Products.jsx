import React, { useState,useContext } from "react";
import ProductItem from "../../components/prodect/ProductItem";
import {catContext} from '../../context/CatContext'  

import './products.css'


const Products = () => { 

  const { Cats } = useContext(catContext)  
  // console.log(Cart);

  


  return (
    
   <div className="prodect-sec">
     <div className="container" >
      <center>
      <h1 className="producet-title" > Products</h1>
      </center>
      <br /> <br />

      <div className="row">  

      {Cats.map(cat  => (

        <div  className={"col"} key={cat.id} > 

        <ProductItem cat={cat} />

        </div> 

      ))}   
    </div>

     
    </div>
   </div>
  );
};

export default Products;