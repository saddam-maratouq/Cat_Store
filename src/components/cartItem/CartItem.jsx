import {useContext,useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' 
import {catContext} from '../../context/CatContext'  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

//css 

import './CartItem.css'



const CartItem = ({cat}) => { 

  const {  deleteCat , changeQty  } =  useContext(catContext) 



  
  
  const clickedId =  cat.id 

  const deleteHandler = () => {
    deleteCat(clickedId);
    toast.error("Item Deleted" ,{
      autoClose: 1000,
      progressStyle: { background: 'linear-gradient(to right, red 0%, #fda085 100%)' },
    })
  }
  

  /////


  const handelQuantity = (e) => {
   
    const value = Number(e.target.value) /// carful back as string 


   console.log({value});
   if (value < 0) {
     return  value  
   }
   changeQty(clickedId,value) ;   
  
  } 




    return (
    <> 
      <table class="table m-5   ">
      <tbody  className=' carts ' >
    <tr className='  flex-column' >
      <td> <img src={cat.Image} alt=" cats"  style={{ width : '13rem' }} /> </td>
      <td> <h4> {cat.name}   </h4> </td> 
      <td> <h5> ${cat.price} </h5> </td>
      
      <button  className='btn btn-danger bg-danger' onClick={deleteHandler} > 
      <td>  
       <i class="fa-solid fa-x false "></i> 
       <ToastContainer 
       />
        </td> 
      </button>
    </tr>  
      <input   className=' qty' type='Number' value={cat.qty} onChange={handelQuantity}/> 
  </tbody> 
      </table>

      </> 
      
      )
    }
    
    export default CartItem    ;
    
    
    