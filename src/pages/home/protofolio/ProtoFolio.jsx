import React from 'react'

import './protofolio.css'

//images 

import protoImg1 from '../../../Images/protfolio-img/gallery-1.jpg'
import protoImg2 from '../../../Images/protfolio-img/gallery2.jpg'
import protoImg3 from '../../../Images/protfolio-img/gallery3.jpg'
import protoImg4 from '../../../Images/protfolio-img/gallery-4.jpg'
import protoImg5 from '../../../Images/protfolio-img/home02.jpg'
import protoImg6 from '../../../Images/cat1.jpg' 



const ProtoFolio = () => {
  return (

    <section className="proto" 
           data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-easing="linear"

    > 
    <h1 className='proto-Title' >  Gallery </h1>
        <div className="container">
            <div className="proto-content"> 

                <div >
                     <img className='proto-cat'  src={protoImg5} alt='cat' />
                </div> 

                <div >
                     <img className='proto-cat'  src={protoImg6} alt='cat' />
                </div>
                <div >
                     <img  className='proto-cat' src={protoImg1} alt='cat' />
                </div> 
                

                <div >
                     <img className='proto-cat'  src={protoImg2} alt='cat' />
                </div>

                <div >
                     <img  className='proto-cat' src={protoImg3} alt='cat' />
                </div>

                <div >
                     <img className='proto-cat'  src={protoImg4} alt='cat' />
                </div>


            </div>
        </div>
    </section>
  )
}

export default ProtoFolio
