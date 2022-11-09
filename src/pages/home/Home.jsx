import React from 'react'

import './home.css' 

import Carousel from 'react-bootstrap/Carousel' 

//img 

import cat1 from '../../Images/cat1.jpg' 

import cat2 from '../../Images/cat2.jpg'  

import cat3 from '../../Images/cat3.jpg' 

import About from './About/About'
import Feathers from './Feathers/Feathers'
import Cust from './Customer/Cust' 
import Chouse from './chouse-us/Chouse'
import ProtoFolio from './protofolio/ProtoFolio'
import Pricing from './pricing/Pricing'





   const Home = () => {
    return (
    
       <> 
         <section  className='main'>
    

                <Carousel fade variant="white" 
                
                autoPlay={true}
                interval={3000} 
              
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

      {/* Chouse Section  */}
       
        <Chouse/> 

        {/* Customer Section  */}  

        <Cust/> 


        {/* protofolio Section  */} 

        <ProtoFolio/> 

        {/*  pricing Section  */}

        <Pricing/> 


    </>
    )
}

export default Home



