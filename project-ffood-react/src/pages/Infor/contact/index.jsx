import React from "react";

const InforContact = () => {
  return (
    <div id="info-contact">
      <div className="info-contact-container">
        <div className="info-contact-main">
          <div className="col-lg-3 col-12">
            <div className="info-contact-email">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p>Đăng ký nhận tin</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="info-contact-form">
              <div>
                <input type="text" placeholder="Nhập email của bạn" />
              </div>
              <button>Đăng ký</button>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="info-contact-phone">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <p>Hỗ trợ mua hàng: 012345678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforContact;
