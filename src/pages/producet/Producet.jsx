import React, { useState,useContext } from "react";
import ProductItem from "../../components/prodect/ProductItem";
import {catContext} from '../../context/CatContext'  

import './products.css'


const Producet = () => { 

  const { Cats } = useContext(catContext)  
  // console.log(Cart);

  


  return (
    <div className="card-container" >
      <center>
      <h1 > Products</h1>
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
  );
};

export default Producet;
