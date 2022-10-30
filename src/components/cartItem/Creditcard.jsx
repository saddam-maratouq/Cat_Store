import React,{useState} from 'react'
import './credit.css'

import { Button,Modal } from 'react-bootstrap';

//icon


const Creditcard = ({submitHandler,showModal,closeHandler}) => {

  
 
  
  return (
    <> 
   
    <div className="creditContainer">
    <div className="card-Content" >  
   
    <Modal show={showModal}  >  
    <div className='closeButton' > 
    <Button variant='danger' onClick={closeHandler}> 
    <i className="fa-solid fa-x false "></i> 
    </Button>
    </div>
      <form className='credit-form' onSubmit={submitHandler} > 
        <label>
          Card Number  {' '} <br/> 
          <input type="text" className="C-Number" required />
        </label> 

        <label>
        Card Holder (Name on Card)  {' '} <br/> 
          <input type="text"  className="C-holderNumber" required /> 
        </label> 
        <div  className="Expire-content" >   
        <label  className='' >
         <p> Expiration </p>   

         {/* <br/>  */}
       
        
          <input type="text"  className="MM" placeholder="dd" required /> 
          <input type="text"  className="yy" placeholder="mm" required /> 
          <input type="text"  className="dd" placeholder="yy" required /> 
         
        </label> 
        </div> 
        <label> 
          CVV  {' '} <br/>  
          <input type='text'  className="cvv"  required /> 
        </label>

        <input type="submit" value="Submit" className="submit" /> 
      </form  >
      </Modal> 
      </div> 
    </div>
    </>
  )
}

export default Creditcard