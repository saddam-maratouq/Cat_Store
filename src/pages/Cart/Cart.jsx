import React, { useState, useContext, useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { catContext } from "../../context/CatContext";

//css
import "./cart.css";

// react tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Creditcard from "../../components/cartItem/Creditcard";

const Cart = () => {
  const { Cart } = useContext(catContext);

  console.table("this is cart tabel", Cart);

  const [showModal, setshowModal] = useState(false);

  const SucssesHandler = () => {
    toast.success("payed Successful", {
      autoClose: 2000,
      progressStyle: {
        background: "linear-gradient(to right, green 0%, #68d4f3 100%)",
      },
    });
  };

  //open Modal and submited for toast messges
  const submitHandler = (e) => {
    setshowModal(!showModal);
    SucssesHandler();
    e.preventDefault();
  };

  //show modala
  const openHandler = () => {
    setshowModal(!showModal);
  };
  //close modal
  const closeHandler = () => {
    setshowModal(!showModal);
  };

  ////////////////////////////////////////////

  const [total, setTotal] = useState();

  console.log(total);

  useEffect(() => {
    setTotal(Cart.reduce((acc, item) => (acc + item.price) * item.qty, 0)); // some time change to number
  }, [Cart]);

  return (
    <>
      <div>
        <div className="row cart-row ">
          {Cart.map((cat) => (
            <div className={"col-12  d-flex  "} key={cat.id}>
              <CartItem cat={cat} />
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "60px" }}> Total : &#128178;{total} </h3>

        <div className="d-grid  ">
          <button
            onClick={openHandler}
            style={{
              width: "20%",
              marginLeft: "20px",
              border: "none",
              marginTop: "20px",
              padding: "10px",
              fontSize: "1.3rem",
            }}
            className="btn btn-info "
            type="button"
          >
            {" "}
            pay
            <ToastContainer />
          </button>
          {/* credit Card Modal  */}
          <Creditcard
            submitHandler={submitHandler}
            showModal={showModal}
            closeHandler={closeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
