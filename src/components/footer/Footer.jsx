import React from 'react' 

import './footer.css'

//icon 




const Footer = () => {
  return (
    <>  

 {/* Footer  */}
<footer className=" bg-success text-center text-white ">
   {/* Grid container  */}
  <div className="container p-4">
     {/* Section: Social media  */}
  
     {/* Section: Social media  */}

     {/* Section: Form  */}
    <section className="">
      <form action="">
        {/* Grid row */}
        <div className="row d-flex justify-content-center">
          {/* Grid column */}
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-5 col-12">
             {/* Email input  */}
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-auto">
             {/* Submit button  */}
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </form>
    </section>
     {/* Section: Form  */}

     {/* Section: Text  */}
    <section className="mb-4">
      <p>
       
      </p>
    </section>
     {/* Section: Text  */}

     {/* Section: Links  */}
    <section className="">
      {/* Grid row */}
      <div className="row">
        {/* Grid column */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase f-title mb-4 ">Quick Links</h5>

          <ul className="list-unstyled mb-0 ">
            <li className='m-3'>
              <a href="#!" className="text-white">Home </a>
            </li>
            <li className='m-3' >
              <a href="#!" className="text-white"> About </a>
            </li>
            <li className='m-3' >  
              <a href="#!" className="text-white"> Services </a>
            </li>
            <li className='m-3' >
              <a href="#!" className="text-white"> cats</a>
            </li>
          </ul>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="f-title mb-4">  My Account  </h5>

          <ul className="list-unstyled mb-0">
            <li className='m-3'  > 
              <a href="#!" className="text-white"> Sign in </a>
            </li>
            <li className='m-3'> 
              <a href="#!" className="text-white"> View Cart</a>
            </li>
            <li className='m-3'>
              <a href="#!" className="text-white"> My wishlist </a>
            </li>
            <li className='m-3' >
              <a href="#!" className="text-white"> Track my order </a>
            </li>
          </ul>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase f-title mb-4"> Categories </h5>

          <ul className="list-unstyled mb-0">
            <li  className='m-3' >
              <a href="#!" className="text-white">Cat toys</a>
            </li>
            <li className='m-3' >
              <a href="#!" className="text-white"> Cat grooming </a>
            </li>
            <li className='m-3' >
              <a href="#!" className="text-white"> Cat health</a>
            </li>
            <li className='m-3'> 
              <a href="#!" className="text-white"> Cat Essentlals </a>
            </li>
          </ul>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase f-title mb-4 "> Help </h5>

          <ul className="list-unstyled mb-0">
            <li className='m-4' > 
              <a href="#!" className="text-white"> 203 Fake St. Mountain View, San Francisco, California, USA </a>
            </li>
            <li className='m-4'>
              <a href="#!" className="text-white tele "> +23923929212 </a>
            </li>
            <li className='m-4'>
              <a href="#!" className="text-white"> Email: info@gmail.com</a>
            </li>
           
          </ul>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </section>
     {/* Section: Links  */}
  </div>
   {/* Grid container  */}

   {/* Copyright  */}
  <div className="text-center p-3 mb-0">
    © 2020 Copyright:
    <a className="text-white" href="#">SQCat.com</a>
  </div>
   {/* Copyright  */}
</footer>
 {/* Footer  */}
   </>
   ) 
}

export default Footer
      