import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CartIcon from "../Cart-icon/CartIcon";

import { useAuth0 } from "@auth0/auth0-react";
//css
import "./header.css";

import logo from "../../Images/cat-logo.png";

//pages
import Products from "../../pages/products/Products";
import Cart from "../../pages/Cart/Cart";
import Cat from "../../pages/products/Catdeatels";
import Home from "../../pages/home/Home";

const Header = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const [open, setOpen] = useState(true);

  let hideShowMenuHandler = () => {
    console.log("clicked on linked to show fire ");
    setOpen(!open);
  };

  return (
    <div className="Main-style">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand " to="">
            {" "}
            <img src={logo} width={"100px"} height={"100px"} alt="logo" />{" "}
          </a>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <div
            onClick={hideShowMenuHandler}
            className={` collapse navbar-collapse   ${
              open ? "active" : "inActive"
            } `}
            type="button"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ms-auto px-5  mb-2  mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  {" "}
                  Products{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  {" "}
                  Cart{" "}
                </Link>
              </li>

              <li className="nav-item">
                <CartIcon />
              </li>

              <li>
                <Link className="nav-link" aria-current="page" to="/Home">
                  {!isAuthenticated && (
                    <button
                      className="  btn-login "
                      onClick={() => loginWithRedirect()}
                    >
                      Log in
                    </button>
                  )}
                </Link>
              </li>

              <li>
                <Link className="nav-link" aria-current="page" to="/Home">
                  {isAuthenticated && (
                    <button
                      className="  btn-logout btn-danger "
                      onClick={() => logout()}
                    >
                      Log out
                    </button>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* check !!  */}
      {/* Also check the err in terminal browser list  */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/products" element={<Products />} exact />
        <Route path="/cart" element={<Cart />} exact />

        <Route path="/cat/:id" element={<Cat />} exact />
      </Routes>
    </div>
  );
};

export default Header;
