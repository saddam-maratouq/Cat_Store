import  {useContext} from 'react' 

import {catContext} from '../../context/CatContext'  


import './item.css'

const ProductItem = ({cat}) => { 


  const { addCat , Cart , deleteCat } =  useContext(catContext) 
  // console.log({Cart}); 


  

  const handelAddCat = () => {

    addCat(cat);  
  }  


  const clickedId =  cat.id 

  const deleteHandler = () => {
    deleteCat(clickedId);
  }

 

    return ( 

    
        
        <div className='cards'  >  
         <div className="card" >
        <img src={cat.Image}  className="card-img" alt='cat'  style={{ width : '305px' , height : '305px' }}/> 
      
        <div className="card-body">

          <h5 className="card-title"> {cat.name}  </h5>

          <p> ${cat.price} </p>

          <a  href= {`cat/${cat.id}`}  className="btn btn-light"> Details </a>  

          { 
            Cart.some((p) => p.id === cat.id) ?  // back T or F 

  
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
      
    )
}

export default ProductItem   ; 

