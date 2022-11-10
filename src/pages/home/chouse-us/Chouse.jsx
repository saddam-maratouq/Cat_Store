import React from 'react' 

// css  
import './chouse.css' 

//img 

import ChouseImg from '../../../Images/Chouseimg/CoupelCat.jpg' 

const Chouse = () => {
  return (
    <section className='Featchers' 
        
    >
    <h1 className="T-Featchers"> Why chouse us ? </h1>
    <div className="container">
        <div className="feather-content"
       
        >

        {/* start col  */} 
         <div className="col"> 

             {/* start feat */}
             <div className="feat">
             <i className="fa fa-scissors"></i> 
             <div className="Feat-text">
                 <h4>Pet Grooming</h4> 
                 <p>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.
                 </p>
             </div>
             </div> 

             <div className="feat">
             <i className="fa-solid fa-shield-halved"></i>
             <div className="Feat-text">
                 <h4> Vaccination</h4> 
                 <p>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.
                </p>              
              </div> 
             </div>  

             {/* End feat */}

         </div> 
        
          
       
         <div className="col">
             {/* start feat */}

             <div className="feat">
             <i className="fa fa-home"></i>
             <div className="Feat-text">
                 <h4>Pet Hotel</h4> 
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.
             </p>             
         </div>
        </div>  

             <div className="feat">
             <i className="fa fa-medkit"></i> 
             <div className="Feat-text">
                 <h4>Pet Care</h4> 
                 <p> 
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.
                 </p> 
             </div>
          </div>  
             {/* End feat */}

         </div>  
         
          <div className="col"  
          data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-mirror="true"
            
          >
              <div className='Feat-image'>
             <img  src={ChouseImg} alt=" two  Cat " /> 
              </div>
         </div> 
         {/* End Col*/}   
        </div>
    </div>
</section>

  )
}

export default Chouse
