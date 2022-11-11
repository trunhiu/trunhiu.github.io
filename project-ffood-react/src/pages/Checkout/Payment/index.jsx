import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getTotal } from "../../../redux/cartSlice";
import { formatMoney } from "../../../utils/utils";

const Payment = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();
  const [inputDiscount, setInputDiscount] = useState("");
  const [isShowDiscountCode, setIsShowDiscountCode] = useState(false);
  const discountCode = {
    FFOOD10: 10,
    FFOOD20: 20,
    FFOOD30: 30,
    FFOOD40: 40,
  };

  const checkDiscountCode = () => {
    if (discountCode[inputDiscount]) {
      return discountCode[inputDiscount];
    }
    return 0;
  };
  const data = checkDiscountCode();

  const discountMoney = () => {
    if (data) {
      return (total * data) / 100;
    }
  };
  const discount = discountMoney();

  const checkSubTotal = () => {
    if (!discountCode[inputDiscount]) {
      return total;
    }
    return total - discount;
  };

  const subTotal = checkSubTotal();

  const handleShowDiscountCode = () => {
    setIsShowDiscountCode(!isShowDiscountCode);
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [products]);
  return (
    <div className="col-12 col-lg-6">
      <div className="checkout-sidebar">
        <div className="checkout-sidebar-container">
          <div className="checkout-sidebar-content">
            {products.map((product) => (
              <div
                className="checkout-sidebar-content-products"
                key={product.id}
              >
                <div className="checkout-sidebar-content-products-content">
                  <div className="checkout-sidebar-content-image">
                    <img src={product.images[0]} alt={product.name} />
                    <div className="checkout-sidebar-content-image-count">
                      <span>{product.productValue}</span>
                    </div>
                  </div>
                  <span>{product.name}</span>
                </div>
                <span className="checkout-sidebar-content-products-price">
                  {formatMoney(product.price)}
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-sidebar-code">
            <div className="discount-codes">
              <input
                type="text"
                placeholder="Áp dụng mã giảm giá"
                id="discount-form-input"
                value={inputDiscount}
                onChange={(e) => setInputDiscount(e.target.value)}
              />
              <div className="discount-icon">
                <span>
                  <i className="fa-solid fa-circle-question"></i>
                </span>
              </div>
              {isShowDiscountCode && (
                <>
                  <div className="discount-overlay"></div>
                  <div className="discount-list">
                    <div>FFOOD10: Giảm 10%</div>
                    <div>FFOOD20: Giảm 20%</div>
                    <div>FFOOD30: Giảm 30%</div>
                    <div>FFOOD40: Giảm 40%</div>
                  </div>
                </>
              )}
            </div>
            <button id="btn-apply" onClick={handleShowDiscountCode}>
              Lấy mã
            </button>
          </div>
          <div className="checkout-sidebar-price">
            <div className="checkout-sidebar-price-shipping">
              <div>Giảm giá</div>
              <div id="discount-money">
                {data ? formatMoney(discount) : "Chưa áp dụng mã giảm giá"}
              </div>
            </div>
            <div className="checkout-sidebar-price-shipping">
              <div>Phí vận chuyển</div>
              <div>Miễn phí</div>
            </div>
            <div className="checkout-sidebar-price-subtotal">
              <div>Tạm tính</div>
              <div id="sub-total-money">{formatMoney(subTotal)}</div>
            </div>
          </div>
          <div className="checkout-sidebar-total">
            <div>Tổng cộng</div>
            <div id="total-money">{formatMoney(total)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
