import React from "react";
import "./checkout.css";
import Contact from "./Contact";
import Payment from "./Payment";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="row">
          <Contact />
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
