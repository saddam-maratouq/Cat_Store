import React from 'react'

import './Feathers.css'




// card icon 

import catWalk from '../../../Images/S-icon/cat-walk.png' 

import petCare from '../../../Images/S-icon/pet-care.png' 

import dryCat from '../../../Images/S-icon/beauty-saloon.png' 








const Feathers = () => {
  return (
   <section className='Feather-sec'  
  

   >
       <h1 className='title' >  Services </h1>
        <div className="content"  
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-mirror="true"
        >
            <div className="card"  
                 
            >
                <div className="card-icon">
                <img src={catWalk} alt=" cat walk " />
                </div> 
                <div className="card-info">
                    <h2>  Cat Walking </h2> 
                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove right.  </p>
                </div>
            </div> 

            <div className="card">
                <div className="card-icon">
                <img src={petCare} alt=" pet Care " />
                </div> 
                <div className="card-info">
                    <h2>  Pet Daycare  </h2> 
                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove right.  </p>
                </div>
            </div>  

            <div className="card">
                <div className="card-icon">
                <img src={dryCat} alt=" dry Cat" />
                </div> 
                <div className="card-info">
                    <h2>  Pet Grooming  </h2> 
                    <p>  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove right.  </p>
                </div>
            </div> 
        </div>
   </section>
  )
}

export default Feathers
