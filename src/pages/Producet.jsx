import React, { useState,useContext } from "react";
import ProductItem from "../components/prodect/ProductItem";
import {catContext} from '../context/CatContext'  

import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' 



const Producet = () => { 

  const { Cats } = useContext(catContext)  
  // console.log(Cart);

  


  return (
    <div>
      <center>
      <h1>Products</h1>
      </center>
      <br /> <br />

      <div className="row">  

      {Cats.map(cat  => (

        <div className={"col-3"} key={cat.id} > 

        <ProductItem cat={cat} />

        </div>

      ))}   
    </div>

     
    </div>
  );
};

export default Producet;
