import {useContext,useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' 
import {catContext} from '../context/CatContext'  


const CartItem = ({cat,changeQty}) => { 

  const {  deleteCat  } =  useContext(catContext) 



  
  
  const clickedId =  cat.id 

  const deleteHandler = () => {
    deleteCat(clickedId);
  }
  

  /////


  const handelQuantity = (e) => {
   const value = Number(e.target.value) /// carful back as string 

   console.log({value});
   if (value < 0) {
     return ; 
   }
   changeQty(clickedId,value) ;  
  
  } 




    return (
        
        <div> 
         <div className="card" >
        <img src={cat.Image}  className="card-img-top" alt='cat'  style={{ width : '150px' , height : '150px' }}/>
        <div className="card-body">
          <h3 className="card-title"> {cat.name}  </h3> 
          <h4> ${cat.price} </h4>  
          <br /> 
          <input type='Number' value={cat.qty} onChange={handelQuantity}/>  
           <br /> 

           {/* <p> total : ${cat.price * countety}  </p> */}
          <button   onClick = {deleteHandler }   className="btn btn-danger">Delete 
          <FontAwesomeIcon icon={faTrashAlt} >  </FontAwesomeIcon> 
          </button> 
          </div>
          </div> 
         
        </div> 

       
       
    )
}

export default CartItem    ;

