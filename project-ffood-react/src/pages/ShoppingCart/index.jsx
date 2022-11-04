import React from "react";
import { Link } from "react-router-dom";
import "./shoppingcart.css";

const ShoppingCart = () => {
  return (
    <>
      <div id="directional">
        <a href="/">Trang chủ</a>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>
        <p>Giỏ hàng</p>
      </div>
      <form>
        <div className="form-container">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Giá</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className="product-list"></tbody>
            </table>
          </div>
          <div className="shopping-cart-button">
            <button className="continue-shopping">
              <Link to="../cua-hang">Tiếp tục vào cửa hàng</Link>
            </button>
          </div>
          <div className="shopping-cart-checkout">
            <div className="shopping-cart-checkout-title">
              <span>Tổng tất cả hoá đơn của bạn</span>
            </div>
            <div className="shopping-cart-checkout-total">
              <span>Tổng</span>
              <span className="total-money">100.000 vnđ</span>
            </div>
          </div>
          <button className="proceed-to-checkout">
            <Link to="../thanh-toan">Đến trang thanh toán</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default ShoppingCart;
