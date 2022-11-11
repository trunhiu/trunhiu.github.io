import React, { useEffect } from "react";
import payment1 from "../../../image/payment/vnpay_new.svg";
import payment2 from "../../../image/payment/shopeepay_new.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiCity } from "../../../redux/apiSlice";

const Contact = () => {
  const callApiCity = useSelector((state) => state.api.apiCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiCity());
  }, []);
  return (
    <div className="col-12 col-lg-6">
      <div className="checkout-main">
        <div className="checkout-main-header">
          <Link to="/">FFood - Fast Food & Trunhiiu Restaurant</Link>
          <div className="breadcrumb">
            <Link to="../cua-hang">Cửa hàng</Link>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <Link to="../gio-hang">Giỏ hàng</Link>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span>Thanh toán</span>
          </div>
        </div>
        <div className="checkout-main-content">
          <div className="checkout-main-content-contact">
            <h3>Thông tin liên lạc</h3>
            <input type="text" placeholder="Email hoặc số điện thoại" />
          </div>
          <div className="checkout-main-content-shipping">
            <h3>Địa chỉ giao hàng</h3>
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Địa chỉ chi tiết" />
            <div className="col-md-auto chose-location">
              <select
                className="form-select form-select-sm mb-3"
                id="city"
                aria-label=".form-select-sm"
              >
                {callApiCity.map((api) => (
                  <option key={api.code}>{api.name}</option>
                ))}
              </select>

              <select
                className="form-select form-select-sm mb-3"
                id="district"
                aria-label=".form-select-sm"
              >
                <option>Chọn quận huyện</option>
              </select>

              <select
                className="form-select form-select-sm"
                id="ward"
                aria-label=".form-select-sm"
              >
                <option>Chọn phường xã</option>
              </select>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Ghi chú"
            ></textarea>
          </div>
          <div className="shipping-rate">
            <h3>Phương thức vận chuyển</h3>
            <div>
              <input type="radio" />
              <span>Giao hàng tận nơi</span>
            </div>
          </div>
          <div className="payment-methods">
            <h3>Phương thức thanh toán</h3>
            <div className="payment-methods-item">
              <input type="radio" name="payment-methods" id="payment-methods" />
              <div className="payment-methods-image">
                <img src={payment1} alt="vnpay" />
              </div>
              <span>
                Thanh toán online qua (ATM/Visa/MasterCard/JCB/QR Pay trên
                Mobile Banking)
              </span>
            </div>
            <div className="payment-methods-item">
              <input type="radio" name="payment-methods" id="payment-methods" />
              <div className="payment-methods-image">
                <img src="../img/other.svg" alt="Banking" />
              </div>
              <span>Chuyển khoản qua ngân hàng</span>
            </div>
            <div className="payment-methods-item">
              <input type="radio" name="payment-methods" id="payment-methods" />
              <div className="payment-methods-image">
                <img src="../img/cod.svg" alt="cod" />
              </div>
              <span>Thanh toán khi giao hàng (COD)</span>
            </div>
            <div className="payment-methods-item">
              <input type="radio" name="payment-methods" id="payment-methods" />
              <div className="payment-methods-image">
                <img src={payment2} alt="shopeepay" />
              </div>
              <span>Ví ShopeePay</span>
            </div>
          </div>
          <div className="checkout-main-button">
            <a href="./store.html" className="btn-continue-shopping">
              Tiếp tục mua hàng
            </a>
            <button className="btn-pay-now">Thanh toán ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
