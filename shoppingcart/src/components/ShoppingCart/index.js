import React from "react";
import ProductList from "../ProductList";
import BillInfomation from "../BillInfomation";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-4">
              <h2>Shopping Cart</h2>
            </div>
          </div>
        </div>

        <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>
        <div className="row shopping-cart">
          <ProductList />
          <BillInfomation />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
