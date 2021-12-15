import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' 


const CartItem = ({cat}) => { 


    return (
        
        <div> 
         <div className="card" >
        <img src={cat.Image}  className="card-img-top" alt='cat'  style={{ width : '150px' , height : '150px' }}/>
        <div className="card-body">
          <h3 className="card-title"> {cat.name}  </h3> 
          <h4> ${cat.price} </h4>  
          <br /> 
          <p> Quantety : 1 </p> 
           <br /> 

           <p> total : ${cat.price}  </p>
          <a  href='#'   type="button" className="btn btn-danger">Delete 
          <FontAwesomeIcon icon={faTrashAlt} >  </FontAwesomeIcon> 
          </a>
          </div>
          </div>
        </div> 
      
    )
}

export default CartItem    ;

