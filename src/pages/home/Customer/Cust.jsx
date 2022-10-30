import React from 'react'

import './Cust.css'

const Cust = () => {
  return (
    <section className='Coustem'>
    <div className="container">
        <div className="coustem-content">

            {/* Start Cust */} 

            <div className="cust">
            {/* <i className="fa-solid fa-user-secret"></i> */}
            <i class="fa-sharp fa-solid fa-users"></i>
            <p> 70 </p> 
            <h5> Happy Customer </h5> 
            </div>

            <div className="cust">
            {/* <i className="fa-brands fa-github"></i>  */}
            <i class="fa-sharp fa-solid fa-user-tie"></i>
             <p> 50 </p>
             <h5> professional  </h5> 
            </div> 

            <div className="cust">
            <i className="fa-solid fa-house"></i> 
            <p> 20 </p>
            <h5> product </h5> 
            </div> 

            <div className="cust"> 
            <i className="fa fa-trophy"></i> 
            <p> 12  </p>
            <h5> Awards Winner </h5> 
            </div> 



            {/* End Cust  */}
        </div>
    </div>
    </section>
  )
}

export default Cust 
