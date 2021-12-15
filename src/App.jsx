import React from 'react' 
import './App.css' 
// import { Routes, Route,  Link } from "react-router-dom";
// import CartIcon from './components/Cart-icon/CartIcon';
import Header from './components/Header';
import CatProvider from './context/CatContext';



//pages 
// import Home from './pages/Home';
// import Producet from './pages/Producet'; 
// import Cart from './pages/Cart';
// import Cat from './pages/Cat';



 
const  App = () =>  (

      <CatProvider>
      <div>
        <Header/>  
        
      </div> 

      </CatProvider>
           
            
    )

export default App ; 
