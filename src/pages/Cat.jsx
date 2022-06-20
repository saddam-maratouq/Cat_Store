import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {catContext} from '../context/CatContext'  

import { catData } from "../Cat-Data/CatData";

const Cat = () => {      /// to select  specfic cat when clicked on it // 

  const [product , setProduct ] = useState({}); 
  const [loading, setLoading] = useState(true);
  // const [countety,setCountety] =  useState(0) 

  // context 
  // const {  } = useContext(catContext)  

  const { addCat , Cart , deleteCat } =  useContext(catContext) 
  console.log(Cart); 

  const { id } = useParams(); // warning id back as string // 
    //   console.log({id});

//   let clikedId = +id
  let clikedId = parseInt(id)   

  //  console.log(clikedId);  


  const handelAddCat = () => {

    addCat(product);   
  } 




  const clickedId =  product.id 

  const deleteHandler = () => {
    deleteCat(clickedId);
  }



  
  const handelCat = (clikedId) => {

    const singelCat = catData.find((cat) => cat.id === clikedId);

     console.log({singelCat}); 
      

     setTimeout(() => {
       
       setLoading(false)  

       setProduct(singelCat);
     },1500 );
   
    
    return singelCat;
  };


  ///////////////////////////


  useEffect(() => {
    handelCat(clikedId);  
    
  }, [clikedId]);

  




  if (loading){
   return   ' loading ...' 
} 



  return ( 
   
    <div>
         <div className={'row'}>
        <div className="col-6">
        <img src={product.Image} width={'80%'}  height={'90%'}/>
         </div>
         <div className="col-6"> 


            <h1>{product.name}</h1>

            <h3>Price : {product.price}$</h3>

            <p>{product.description}</p>

            <br/><br/>

          
            { 
            Cart.some((p) => p.id === product.id) ?  // back T or F 

  
            (  <button onClick={deleteHandler} className="btn btn-danger"> 
                    Remove from Cart 
              </button> ) 

              : 

            ( <button onClick={handelAddCat} className="btn btn-primary"> 
                Add to Cart
            </button> ) 
              
              
            }  

        </div>
    </div>
</div>

  );
};

export default Cat; 
