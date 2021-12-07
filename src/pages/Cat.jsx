import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { catData } from "../Cat-Data/CatData";

const Cat = () => { 

  const [product , setProduct ] = useState({}); 
  const [loading, setLoading] = useState(true);



  const { id } = useParams(); // warning id back as string // 
    //   console.log({id});

//   let clikedId = +id
  let clikedId = parseInt(id)   

//   console.log(clikedId); 

  const handelCat = (clikedId) => {

    const singelCat = catData.find((cat) => cat.id === clikedId);

     console.log({singelCat}); 
      

       setLoading(false)  

       setProduct (singelCat);
   
    
    return singelCat;
  };


  ///////////////////////////


  useEffect(() => {
    handelCat(clikedId);  
    
  }, []);

  


//   if (loading){
//    return   ' loading ...' 
// }
  return ( 
   
          <div> 
             <h1> {product.price} </h1>
             <img src={product.Image} alt='cat'  />
                
            </div>


  );
};

export default Cat;
