import React from 'react' 


const ProductItem = ({cat}) => {
    return (
        
        <div> 
         <div className="card" >
        <img src={cat.Image}  className="card-img-top" alt='cat'  style={{ width : '300px' , height : '300px' }}/>
        <div className="card-body">
          <h5 className="card-title"> {cat.name}  </h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p> ${cat.price} </p>
          <a  href= {`cat/${cat.id}`}  className="btn btn-primary"> Details </a>
          </div>
          </div>
        </div> 
      
    )
}

export default ProductItem   

