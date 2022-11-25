import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { catContext } from "../../context/CatContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//css
import "./CartItem.css";

const CartItem = ({ cat }) => {
  const { deleteCat, changeQty } = useContext(catContext);

  const clickedId = cat.id;

  const deleteHandler = () => {
    deleteCat(clickedId);
    // toast message

    toast.success("Cat Deleted", {
      autoClose: 1000,
      progressStyle: {
        background: "linear-gradient(to right, green 0%, #68d4f3 100%)",
      },
    });
  };

  /////

  //  handleQuantity

  const handleQuantity = (e) => {
    const value = Number(e.target.value); /// carful back as string

    console.log({ value });

    if (value < 0) {
      return value;
    }
    changeQty(clickedId, value);
  };

  return (
    <>
      <table class="table mt-5      ">
        <tbody className=" carts ">
          <tr className="  flex-column">
            <td>
              {" "}
              <img
                src={cat.Image}
                alt=" cats"
                style={{ width: "10rem", borderRadius: "10px" }}
              />{" "}
            </td>
            <td>
              {" "}
              <h4> {cat.name} </h4>{" "}
            </td>
            <td>
              {" "}
              <h5> ${cat.price} </h5>{" "}
            </td>
            <td>
              <button
                className="btn btn-danger deleteBtn "
                onClick={deleteHandler}
              >
                <i className="fa-solid fa-x false "></i>
                <ToastContainer />
              </button>
            </td>
          </tr>
          <input
            className=" qty"
            type="number"
            value={cat.qty}
            onChange={handleQuantity}
          />
        </tbody>
      </table>
    </>
  );
};

export default CartItem;
