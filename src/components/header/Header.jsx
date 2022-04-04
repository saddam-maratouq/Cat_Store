import React from 'react' 
import { Routes, Route ,  Link } from "react-router-dom";
import CartIcon from '../Cart-icon/CartIcon';
import './header.css'

import logo from '../../Images/cat.png'
//pages 
import Producet from '../../pages/producet/Producet'; 
import Cart from '../../pages/Cart';
import Cat from '../../pages/Cat';
import Home from '../../pages/home/Home';


const Header = () => {
    return (
        
      <>  
      
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand " to =""> <img src= {logo} width={'150px'} height={'150px'}  alt="logo" />  </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto px-5  mb-2  mb-lg-0"> 
          
          <li className="nav-item">
              <Link className="nav-link" to="/home"> Home  </Link>
            </li> 

            <li className="nav-item">
              <Link className="nav-link" to="/Producets"> Products   </Link>
            </li> 

            <li className="nav-item">
              <Link className="nav-link" to="/cart"> Cart   </Link>  
            </li>

          </ul>
        
        </div> 
     <CartIcon/>    
      </nav>  

    
      
    <Routes>
    <Route path="/" element={<Producet/>} exact />
    <Route path="/home" element={<Home/>} exact />
    <Route path="/producets" element={<Producet />}  exact/>
    <Route path="/cart" element={<Cart />} exact />    
   
    <Route path="/cat/:id" element={<Cat />} exact  /> 
   </Routes> 

   </>

    )
}

export default Header ;
