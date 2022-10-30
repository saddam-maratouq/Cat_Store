import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { catContext } from "../../context/CatContext";

import { catData } from "../../Cat-Data/CatData";

import "./Catdeatiles.css";

const Catdeatels = () => {
  /// to select  specfic cat when clicked on it //

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { addCat, Cart, deleteCat } = useContext(catContext);
  console.log(Cart);

  const { id } = useParams(); // warning id back as string //
  //   console.log({id});

  //   let clikedId = +id
  let clikedId = parseInt(id);

  const handelAddCat = () => {
    addCat(product);
  };

  const clickedId = product.id;

  const deleteHandler = () => {
    deleteCat(clickedId);
  };

  const handelCat = (clikedId) => {
    const singelCat = catData.find((cat) => cat.id === clikedId);

    console.log({ singelCat });

    setTimeout(() => {
      setLoading(false);

      setProduct(singelCat);
    }, 1500);

    return singelCat;
  };

  ///////////////////////////

  useEffect(() => {
    handelCat(clikedId);
  }, [clikedId]);

  if (loading) {
    return " loading ...";
  }

  return (
    <div className="deatel-sec">
      <div className="container">
        <div className=" deatels-content">
        
          <img src={product.Image} className="C-DeatelsImg" />

          <div className="deatel-box">
            <h1>{product.name}</h1>

            <h2 className="price">Price: {product.price}$</h2>

            <p>{product.description}</p>

            <br />
            <br />

            {Cart.some((p) => p.id === product.id) ? ( // back T or F
              <button onClick={deleteHandler} className="btn btn-danger">
                Remove from Cart
              </button>
            ) : (
              <button onClick={handelAddCat} className="btn btn-info">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catdeatels;
