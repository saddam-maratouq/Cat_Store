import React from 'react' 
import './App.css' 
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
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
        <Footer/> 
      </div> 

      </CatProvider>
           
            
    )

export default App ; 


