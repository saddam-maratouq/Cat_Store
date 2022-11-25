import React from "react";

//css
import "./pricing.css";

const Pricing = () => (
  <section
    id="pricing"
    data-aos="fade-right"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-easing="ease-in-sine"
  >
    <div className="pricing-container">
      <h2 className="pricing-title">A Plan for Every Cats Needs</h2>
      <p className="pricing-subTitle">
        Simple and affordable price plans for your and your cat.
      </p>
    </div>

    <div className="row  row-pricing ">
      <div className="col-lg-4  ">
        <div className="price-card">
          <div className="card-header">
            <h3 className="card-Title">Grooming</h3>
          </div>
          <div className="card-body">
            <h2 className="mb-4 price-title ">Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button
              type="button"
              className="btn btn-outline-info btn-lg w-100 "
            >
              Sign Up{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4   ">
        <div className="price-card">
          <div className="card-header">
            <h3 className="card-Title">Pro</h3>
          </div>
          <div className="card-body">
            <h2 className="mb-4 price-title ">$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button className=" btn btn-info btn-lg w-100" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 ">
        <div className="price-card">
          <div className="card-header">
            <h3 className="card-Title">Enterprise</h3>
          </div>
          <div className="card-body">
            <h2 className="mb-4 price-title ">$99 / mo</h2>
            <p>Priority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <button className="btn btn-info btn-lg w-100" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
