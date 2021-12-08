import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { catData } from "../Cat-Data/CatData";

const Cat = () => { 

  const [product , setProduct ] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [countety,setCountety] =  useState(0)


  const { id } = useParams(); // warning id back as string // 
    //   console.log({id});

//   let clikedId = +id
  let clikedId = parseInt(id)   

  //  console.log(clikedId); 




  const handelCat = (clikedId) => {

    const singelCat = catData.find((cat) => cat.id === clikedId);

     console.log({singelCat}); 
      

     setTimeout(() => {
       
       setLoading(false)  

       setProduct(singelCat);
     }, 1500);
   
    
    return singelCat;
  };


  ///////////////////////////


  useEffect(() => {
    handelCat(clikedId);  
    
  }, [clikedId]);

  

  const handelCountety = (e) => {
  const   value = e.target.value 
  if(value < 0) 
  return ; 

  setCountety(value) 
  }


  if (loading){
   return   ' loading ...' 
} 



  return ( 
   
    <div>
         <div className={'row'}>
        <div className="col-6">
        <img src={product.Image} width={'100%'}/>
         </div>
         <div className="col-6"> 


            <h1>{product.name}</h1>

            <h3>Price : {product.price}$</h3>

            <p>{product.description}</p>

            <br/><br/>

            <input type="number" value={countety}  onChange={handelCountety} /> 
            
            <br /><br />  

            <p> Total : {product.price * countety }$   </p>

            <button className="btn btn-primary">
                Add to Cart
            </button>

        </div>
    </div>
</div>

  );
};

export default Cat;
