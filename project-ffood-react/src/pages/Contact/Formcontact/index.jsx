import React from "react";
import map from "../../../image/map1.webp";

const FormContact = () => {
  return (
    <div id="formcontact">
      <div className="formcontact-container">
        <div className="formcontact-info">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="formcontact-info-content">
                <h5>Thông tin liên hệ</h5>
                <div className="line"></div>
                <p>Các cơ sở của chúng tôi:</p>
                <ul>
                  <li>
                    <a href="https://www.google.com/maps/search/hh4c+linh+%C4%91%C3%A0m/@20.963552,105.8238372,17z/data=!3m1!4b1">
                      HH4C, Linh đàm, Hoàng liệt, Hoàng Mai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/128+P.+%C4%90%E1%BA%A1i+La,+%C4%90%E1%BB%93ng+T%C3%A2m,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9972091,105.8421855,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ac71cd31d38b:0xd57b08a4e72b28ea!8m2!3d20.9972091!4d105.8443742">
                      128 Đại la, Hai Bà Trưng
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/48+P.+T%E1%BB%91+H%E1%BB%AFu,+Trung+V%C4%83n,+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9981588,105.7898267,17z/data=!3m1!4b1!4m5!3m4!1s0x3135acba7ddb0f43:0xe7d7c05f85f830a!8m2!3d20.9981589!4d105.7943114">
                      48 Tố Hữu, Lê Văn Lương kéo dài
                    </a>
                  </li>
                </ul>
                <div className="line"></div>
                <p>Hoặc có thể liên hệ với chúng tôi qua:</p>
                <ul>
                  <li>
                    <a href="#">Gmail: buihieu3008@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">Sđt: 012345678</a>
                  </li>
                </ul>
                <div className="line"></div>
                <p>Theo dõi chúng tôi tại:</p>
                <div className="icon">
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="formcontact-info-image">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </div>
        <div className="formcontact-form">
          <h3>Liên hệ</h3>
          <div className="line"></div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <label>Họ và tên:</label>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <label>Địa chỉ Email:</label>
              <div className="input">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 note">
              <label>Ghi chú:</label>
              <div className="input">
                <textarea
                  name="ghichu"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          <button>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
