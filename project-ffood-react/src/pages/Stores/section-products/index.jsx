import React from "react";
import Filter from "./filter";
import Product from "./products";
import "./products.css";

const Products = () => {
  return (
    <div id="products">
      <div className="products-container">
        <div className="row">
          <Filter />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
