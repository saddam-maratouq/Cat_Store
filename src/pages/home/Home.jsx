import React from 'react'

import './home.css' 

import Carousel from 'react-bootstrap/Carousel' 

//img 

import cat1 from '../../Images/cat1.jpg' 

import cat2 from '../../Images/cat2.jpg'  

import cat3 from '../../Images/cat3.jpg' 

import About from './About/About'
import Feathers from './Feathers/Feathers'

import Chouse from './chouse-us/Chouse'

import Cust from '../Customer/Cust'

import Protfolio from './protoflio/Protfolio'





   const Home = () => {
    return (
    
       <> 
         <section  className='main'>
    

                <Carousel fade variant="white" 
                
                autoPlay={true}
                interval={4000} 
              
                > 

                 

                  <Carousel.Item> 

                  <img
                      className="d-block  cat-img "
                      src={cat1}
                      alt="First slide"
                    /> 

                  <Carousel.Caption className='f-label'  >
                   
                   <div className='info'>
                     <p>your one stop </p>
                     <p > cats shop</p>
                   </div>
                  
                   </Carousel.Caption> 
                 
                
                  </Carousel.Item> 

                   <Carousel.Item>
                    <img 
                      className="d-block   cat-img"
                      src={cat2} 
                      alt="Second slide"
                    />
                     <Carousel.Caption className='f-label'  >
                   
                   <div className='info'>
                     <p>your one stop </p>
                     <p > cats shop</p>
                   </div>
                  
                   </Carousel.Caption> 
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block cat-img"
                      src={cat3}  
                      alt="Third slide"
                    />
                     <Carousel.Caption className='f-label'  >
                   
                   <div className='info'>
                     <p>your one stop </p>
                     <p > cats shop</p>
                   </div>
                  
                   </Carousel.Caption> 
                  </Carousel.Item>
                </Carousel> 

    </section>
 

        {/* About section  */}
      
        <About/>  

        {/* feathers section  */} 

        <Feathers/> 


        {/* chouse section  */} 

        <Chouse/> 

        {/* Customer section  */} 

        <Cust/> 

      {/* Protfolio Section  */}

        <Protfolio/>
    </>
    )
}

export default Home



