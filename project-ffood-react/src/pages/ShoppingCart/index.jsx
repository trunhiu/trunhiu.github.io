import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addProductToCart,
  decrementCart,
  getTotal,
  shoppingCartRemove,
} from "../../redux/cartSlice";
import { formatMoney } from "../../utils/utils";
import "./shoppingcart.css";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.total.cartTotalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [shoppingCart]);

  const handleRemove = (cart) => {
    dispatch(shoppingCartRemove(cart));
    toast.error(`${cart.name} đã được xóa`, {
      theme: "colored",
    });
  };

  const handleIncrement = (cart) => {
    dispatch(addProductToCart(cart));
  };

  const handleDecrement = (cart) => {
    if (cart.productValue === 1) {
      toast.warning("Số lượng sản phẩm không thể dưới 1", {
        theme: "colored",
      });
      return;
    }
    dispatch(decrementCart(cart));
  };

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
          {shoppingCart.length === 0 ? (
            <div>
              <p>Giỏ hàng của bạn đang trống</p>
            </div>
          ) : (
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
                <tbody className="product-list">
                  {shoppingCart.map((cart) => (
                    <tr key={cart.id}>
                      <th className="shopping-cart-title">
                        <div className="shopping-cart-image">
                          <img src={cart.images[0]} alt={cart.name} />
                        </div>
                        <p>{cart.name}</p>
                      </th>
                      <th>
                        <div className="shopping-cart-amount">
                          <div className="number">{cart.productValue}</div>
                          <div className="icon">
                            <span>
                              <i
                                className="fa-solid fa-caret-up"
                                onClick={() => handleIncrement(cart)}
                              ></i>
                            </span>
                            <span>
                              <i
                                className="fa-solid fa-caret-down"
                                onClick={() => handleDecrement(cart)}
                              ></i>
                            </span>
                          </div>
                        </div>
                      </th>
                      <th className="text-center">
                        <div className="sub-total-money">
                          {formatMoney(cart.price * cart.productValue)}
                        </div>
                      </th>
                      <th className="text-center">
                        <span>
                          <i
                            className="fa-solid fa-trash-can"
                            onClick={() => handleRemove(cart)}
                          ></i>
                        </span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="shopping-cart-button">
            {/* <button className="continue-shopping"> */}
            <Link to="../cua-hang" className="continue-shopping">
              Tiếp tục vào cửa hàng
            </Link>
            {/* </button> */}
          </div>
          <div className="shopping-cart-checkout">
            <div className="shopping-cart-checkout-title">
              <span>Tổng tất cả hoá đơn của bạn</span>
            </div>
            <div className="shopping-cart-checkout-total">
              <span>Tổng</span>
              <span className="total-money">{formatMoney(total)}</span>
            </div>
          </div>
          {/* <button className="proceed-to-checkout"> */}
          <Link to="../thanh-toan" className="proceed-to-checkout">
            Đến trang thanh toán
          </Link>
          {/* </button> */}
        </div>
      </form>
    </>
  );
};

export default ShoppingCart;
