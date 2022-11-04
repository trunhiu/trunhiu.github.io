import React from "react";

const Payment = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="checkout-sidebar">
        <div className="checkout-sidebar-container">
          <div className="checkout-sidebar-content"></div>
          <div className="checkout-sidebar-code">
            <div className="discount-codes">
              <input
                type="text"
                placeholder="Áp dụng mã giảm giá"
                id="discount-form-input"
              />
              <div className="discount-icon">
                <span>
                  <i className="fa-solid fa-circle-question"></i>
                </span>
              </div>
              <div className="discount-overlay"></div>
              <div className="discount-list">
                <div>FFOOD10: Giảm 10%</div>
                <div>FFOOD20: Giảm 20%</div>
                <div>FFOOD30: Giảm 30%</div>
                <div>FFOOD40: Giảm 40%</div>
              </div>
            </div>
            <button id="btn-apply">Sử dụng</button>
          </div>
          <div className="checkout-sidebar-price">
            <div className="checkout-sidebar-price-shipping">
              <div>Giảm giá</div>
              <div id="discount-money">0 VND</div>
            </div>
            <div className="checkout-sidebar-price-shipping">
              <div>Phí vận chuyển</div>
              <div>Miễn phí</div>
            </div>
            <div className="checkout-sidebar-price-subtotal">
              <div>Tạm tính</div>
              <div id="sub-total-money">180.000 vnđ</div>
            </div>
          </div>
          <div className="checkout-sidebar-total">
            <div>Tổng cộng</div>
            <div id="total-money">180.000 vnđ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
