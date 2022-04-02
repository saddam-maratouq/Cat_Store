import React from 'react'


import './chouse.css'

//img
import kitten from '../../../Images/kitten5.png'


const Chouse = () => {
  return (
   <section className="chouse">
       <div className="container">
           <div className="kitten">
               <img src={kitten} alt="" />
           </div> 
           <h2 className='c-title' > Why chouse us ? </h2>
           <div className="serv">
               <div className="first">
                


               </div> 

               <div className="sec">

               </div>
           </div>
       </div> 
   </section> 
  )
}

export default Chouse
