import React from 'react'


import './About.css'

//img 
import Aboutcat from '../../../Images/AboutCat.jpg' 





const About = () => {
  return (
   <section className='About-sc' >  
       <div className="container">

        <div className=" About   ">  
        <div className=' img-c'>
            <img   className='About-img' src={Aboutcat} alt="gray cat" />
        </div>
        <div className=" A-info">  
       
            <h2  > ABOUT US</h2> 
            <p> CatShop offers you beautifully crafted, environmentally friendly
             hand picked selection of toys, products & accessories for cats.  </p>
            <p> 
            It is our mission to keep cats of all walks of life happy, healthy,
             stimulated & engaged in their environment. That's why all of our products are 
             carefully selected after extensive research, by cat owners just like yourself. 
             This ensures that our high quality inventory is
              kept constantly afresh with only the very best for you and your cat.
            </p>

            <p>   
            Our beautifully crafted, carefully curated collection of cat toys, 
            products and accessories aim to bring you joy, 
            pleasure and lots of purrs into you and your pets life.       
          </p> 


            <p>  
            Our cat toys and products are known for winning over the most finickiest of felines~ 
            </p>

            <p>
            If you love cats as much as we do, then our Cat Shop is your one-stop cat
             store for you and your favorite feline friends!
            </p>

        </div>


        </div>    

       </div>
   </section>
  )
}

export default About 
