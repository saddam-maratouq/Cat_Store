import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import {catData} from '../Cat-Data/CatData' 



const Producet = () => { 

    const [catdata,setCatDate] = useState(catData) 

  return (
    <div>
      <h1>Products</h1>

      <div className="row">  

      {catdata.map(cat => (

        <div className={"col-4"} key={cat.id} > 

        <ProductItem cat={cat} />

        </div>

      ))}   
    </div>

     
    </div>
  );
};

export default Producet;
