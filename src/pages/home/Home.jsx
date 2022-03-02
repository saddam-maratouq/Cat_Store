import React from 'react'

import './home.css' 

import Carousel from 'react-bootstrap/Carousel' 

//img 

import cat1 from '../../Images/herocat.jpg' 

import cat2 from '../../Images/cat2.jpg' 

import cat3 from '../../Images/cat3.jpg' 


   const Home = () => {
    return (
    
       
    <section>

                <Carousel fade variant="white" 
                
                autoPlay={true}
                interval={4000}
              
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cat1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src={cat2} 
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cat3}  
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

    </section>


       
    )
}

export default Home



