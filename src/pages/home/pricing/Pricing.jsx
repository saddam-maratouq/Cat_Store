import React from 'react'

//css
import './pricing.css'



const Pricing = () => (
    
    
    <section id="pricing">

     <div class="pricing-container" >
       <h2 class="pricing-title" >A Plan for Every Cats Needs</h2>
       <p class="pricing-subTitle" >Simple and affordable price plans for your and your cat.</p>
     </div>

    <div class="row  row-pricing " >

      <div class="col-lg-4  " >
          <div class="price-card"  >
           <div class="card-header">
             <h3 class="card-Title" >Grooming</h3>
           </div >
            <div class="card-body">
              <h2 class="mb-4 price-title " >Free</h2>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button type="button" class="btn btn-outline-primary btn-lg w-100 ">Sign Up </button>

            </div>
          </div>
      </div > 
      
       <div  class="col-lg-4   ">
         <div class="price-card" >
          <div  class="card-header" >
            <h3 class="card-Title" >Pro</h3>
          </div >
           <div class="card-body">
             <h2 class="mb-4 price-title " >$49 / mo</h2>
             <p>Unlimited Matches</p>
             <p>Unlimited Messages</p>
             <p>Unlimited App Usage</p>
             <button class="btn btn-primary btn-lg w-100" type="button">Sign Up</button>
            </div>
         </div>
       </div>


       <div  class="col-lg-4 ">
        <div class="price-card"  >
         <div  class="card-header" >
           <h3 class="card-Title">Enterprise</h3>
         </div >
          <div class="card-body">
              <h2 class="mb-4 price-title "  >$99 / mo</h2>
              <p>Priority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <button class="btn btn-primary btn-lg w-100" type="button">Sign Up</button>
          </div>
        </div>
      </div>


       
      
    </div> 
       
         
         
    </section>

)
  
  


export default Pricing
