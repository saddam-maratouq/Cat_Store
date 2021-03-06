import React, { useState,useContext } from "react";
import ProductItem from "../../components/prodect/ProductItem";
import {catContext} from '../../context/CatContext'  

import './products.css'


const Producet = () => { 

  const { Cats } = useContext(catContext)  
  // console.log(Cart);

  


  return (
    <div>
     
      <h1 className="title" > Products</h1>
      
      <br /> <br />

      <div className="row">  

      {Cats.map(cat  => (

        <div  className={"col"} key={cat.id} > 

        <ProductItem cat={cat} />

        </div>

      ))}   
    </div>

     
    </div>
  );
};

export default Producet;
