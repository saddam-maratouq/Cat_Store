import React from 'react' 
import './App.css' 
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CatProvider from './context/CatContext';






 
const  App = () =>  (

      <CatProvider>
      <div>
        <Header/>  
        <Footer/> 
      </div> 

      </CatProvider>
           
            
    )

export default App ; 
