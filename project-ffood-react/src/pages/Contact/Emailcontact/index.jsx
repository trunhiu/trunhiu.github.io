import React from "react";
import emailContact from "../../../image/products/banner-9.webp";

const EmailContact = () => {
  return (
    <div id="emailcontact">
      <div className="emailcontact-image">
        <img src={emailContact} alt="email contact" />
        <div className="emailcontact-content">
          <div className="emailcontact-content-container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="text">
                  <span>
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </span>
                  <div>
                    <p>THƯ</p>
                    <p>LIÊN HỆ!</p>
                    <p>
                      Chỉ mất một vài giây bạn có thể tìm thấy tin tức mới nhất
                      về chúng tôi
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="emailcontact-input">
                  <input type="text" placeholder="Địa chỉ email của bạn" />
                  <button>Xác nhận</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
