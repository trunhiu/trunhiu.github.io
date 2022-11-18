import React, { useEffect, useState } from "react";
import payment1 from "../../../image/payment/vnpay_new.svg";
import payment2 from "../../../image/payment/shopeepay_new.svg";
import payment3 from "../../../image/payment/navcard2.png";
import payment4 from "../../../image/payment/ship-cod-la-gi-uu-nhuoc-diem-ra-sao-quy-trinh-mua-chuyen2 copy.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetApiDistrict,
  fetApiWard,
  fetchApiCity,
  getDistrictByCity,
  getWardByDistrict,
} from "../../../redux/apiSlice";
import { clearCart } from "../../../redux/cartSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const callApiCity = useSelector((state) => state.api.apiCity);
  const callApiDistrict = useSelector((state) => state.api.apiDistrict);
  const callApiWard = useSelector((state) => state.api.apiWard);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  // console.log(callApiCity, callApiDistrict, callApiWard);

  useEffect(() => {
    dispatch(fetchApiCity());
    dispatch(fetApiDistrict());
    dispatch(fetApiWard());
  }, []);

  const handleChangeCity = (e) => {
    dispatch(getDistrictByCity(e.target.value));
  };

  const handleChangeDistrict = (e) => {
    dispatch(getWardByDistrict(e.target.value));
  };

  const handlePayment = () => {
    if (!phoneOrEmail) {
      toast.error("Vui lòng điền số điện thoại hoặc email");
      return;
    }
    if (!name) {
      toast.error("Vui lòng điền họ và tên");
      return;
    }
    if (!address) {
      toast.error("Vui lòng điền rõ địa chỉ cụ thể");
      return;
    }
    dispatch(clearCart());
    toast.success("Thanh toán thành công");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit}>
          <div className="checkout-main-content">
            <div className="checkout-main-content-contact">
              <h3>Thông tin liên lạc</h3>
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
              />
            </div>
            <div className="checkout-main-content-shipping">
              <h3>Địa chỉ giao hàng</h3>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Địa chỉ chi tiết"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <div className="col-md-auto chose-location">
                <select
                  className="form-select form-select-sm mb-3"
                  id="city"
                  aria-label=".form-select-sm"
                  onChange={handleChangeCity}
                >
                  <option>Tỉnh / Thành</option>

                  {callApiCity.map((api) => (
                    <option key={api.code} value={api.code}>
                      {api.name}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select form-select-sm mb-3"
                  id="district"
                  aria-label=".form-select-sm"
                  onChange={handleChangeDistrict}
                >
                  <option>Chọn quận huyện</option>
                  {callApiDistrict.map((dis) => (
                    <option key={dis.code} value={dis.code}>
                      {dis.name}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select form-select-sm"
                  id="ward"
                  aria-label=".form-select-sm"
                >
                  <option>Chọn phường xã</option>
                  {callApiWard.map((ward) => (
                    <option key={ward.code}>{ward.name}</option>
                  ))}
                </select>
              </div>
              <textarea
                name="note"
                id="note"
                cols="30"
                rows="10"
                placeholder="Ghi chú"
                value={note}
                onChange={(e) => setNote(e.target.value)}
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
                <input
                  type="radio"
                  name="payment-methods"
                  id="payment-methods"
                />
                <div className="payment-methods-image">
                  <img src={payment1} alt="vnpay" />
                </div>
                <span>
                  Thanh toán online qua (ATM/Visa/MasterCard/JCB/QR Pay trên
                  Mobile Banking)
                </span>
              </div>
              <div className="payment-methods-item">
                <input
                  type="radio"
                  name="payment-methods"
                  id="payment-methods"
                />
                <div className="payment-methods-image">
                  <img src={payment3} alt="Banking" />
                </div>
                <span>Chuyển khoản qua ngân hàng</span>
              </div>
              <div className="payment-methods-item">
                <input
                  type="radio"
                  name="payment-methods"
                  id="payment-methods"
                />
                <div className="payment-methods-image">
                  <img src={payment4} alt="cod" />
                </div>
                <span>Thanh toán khi giao hàng (COD)</span>
              </div>
              <div className="payment-methods-item">
                <input
                  type="radio"
                  name="payment-methods"
                  id="payment-methods"
                />
                <div className="payment-methods-image">
                  <img src={payment2} alt="shopeepay" />
                </div>
                <span>Ví ShopeePay</span>
              </div>
            </div>
            <div className="checkout-main-button">
              <Link to="/cua-hang" className="btn-continue-shopping">
                Tiếp tục mua hàng
              </Link>
              <button
                className="btn-pay-now"
                type="submit"
                onClick={handlePayment}
              >
                Thanh toán ngay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
