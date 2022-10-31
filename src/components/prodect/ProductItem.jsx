import  {useContext} from 'react' 

import {catContext} from '../../context/CatContext'  


import './item.css'

const ProductItem = ({cat}) => { 


  const { addCat , Cart , deleteCat } =  useContext(catContext) 
  // console.log({Cart}); 


  

  const handelAddCat = (e) => {
    e.preventDefault();
    addCat(cat);  
  }  


  const clickedId =  cat.id 

  const deleteHandler = (e) => {
    e.preventDefault();

    deleteCat(clickedId);
  }

 

    return ( 

    
      
      <div class="cards">
 
  

  <div   >
    <div href="" class="card  ">
      <img src={cat.Image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
          <div class="card__header-text">
          <h4 className="card-title"> {cat.name}  </h4>
          <h5  className='cat-price' > ${cat.price} </h5>
          </div>          
        </div>
        <div class="card__description">  

        <a  href= {`cat/${cat.id}`}  className="btn"> Details </a> 
        { 
            Cart.some((p) => p.id === cat.id) ?  // back T or F 

  
            (  <button onClick={deleteHandler} className="btn btn-danger"> 
                    Remove from Cart
              </button> ) 

              : 

              ( <button onClick={handelAddCat} className="btn btn-info"> 
                Add to Cart
            </button> ) 
              
              
                }
         </div> 
      </div>
    </div>
  </div>    
</div>

        // {/* <div className='cards'  >  
        //  <div className="Cardo" >
        // <img src={cat.Image}  className="card-img" alt='cat'  /> 
      
        // <div className="card-body">

        //   <h5 className="card-title"> {cat.name}  </h5>

        //   <p> ${cat.price} </p>

        //   <a  href= {`cat/${cat.id}`}  className="btn"> Details </a>  

        //   { 
        //     Cart.some((p) => p.id === cat.id) ?  // back T or F 

  
        //     (  <button onClick={deleteHandler} className="btn btn-danger"> 
        //             Remove from Cart
        //       </button> ) 

        //       : 

        //       ( <button onClick={handelAddCat} className="btn btn-info"> 
        //         Add to Cart
        //     </button> ) 
              
              
        //         }
              
        //   </div>
        //   </div>
        // </div>  */}  
      
    )
}

export default ProductItem   ; 

