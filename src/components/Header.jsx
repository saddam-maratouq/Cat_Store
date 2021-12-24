import React from 'react' 
import { Routes, Route ,  Link } from "react-router-dom";
import CartIcon from '../components/Cart-icon/CartIcon';



//pages 
import Home from '../pages/Home';
import Producet from '../pages/Producet'; 
import Cart from '../pages/Cart';
import Cat from '../pages/Cat';


const Header = () => {
    return (
        <div className='continer'>  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand" to ="">Cat Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
          
          <li className="nav-item">
              <Link className="nav-link" to="/home"> Home  </Link>
            </li> 

            <li className="nav-item">
              <Link className="nav-link" to="/Producet"> Products   </Link>
            </li> 

            <li className="nav-item">
              <Link className="nav-link" to="/cart"> Cart   </Link> 
            </li>

          </ul>
        
        </div>
      </nav> 
    
     <CartIcon/>  
    <Routes>
    <Route path="/home" element={<Home />} exact />
    <Route path="/producet" element={<Producet />}  exact/>
    <Route path="/cart" element={<Cart />} exact />    
   
    <Route path="/cat/:id" element={<Cat />} exact  /> 
   </Routes> 

    </div> 

    )
}

export default Header ;
