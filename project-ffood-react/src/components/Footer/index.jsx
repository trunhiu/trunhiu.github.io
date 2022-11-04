import React from "react";
import "./footer.css";
import logo from "../../image/Logo_black.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="footer-item">
            <div className="footer-image">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <p>Theo dõi chúng tôi để được giảm giá 30%</p>

            <div className="footer-content">
              <div className="footer-input">
                <div>
                  <input type="text" placeholder="Email của bạn..." />
                </div>
                <button>
                  <span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </span>
                </button>
              </div>
              <div>
                <span>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
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
        </div>
        <div className="col-lg-3 col-sm-6">
          <h3>Trụ sở chính FFOOD</h3>
          <div className="footer-location">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <a href="https://www.google.com/maps/search/hh4c+linh+%C4%91%C3%A0m/@20.963552,105.8238372,17z/data=!3m1!4b1">
              <p>Toà nhà HH4C, Linh Đàm, Hoàng Liệt, Hoàng Mai</p>
            </a>
          </div>
          <div className="footer-location">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <a href="#">
              <p>0845.069.061</p>
            </a>
          </div>
          <div className="footer-location">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <a href="#">
              <p>buihieu3008@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h3>Chính sách của cửa hàng</h3>

          <a href="#">
            <p>Chính sách thanh toán</p>
          </a>
          <a href="#">
            <p>Chính sách đổi trả</p>
          </a>
          <a href="#">
            <p>Chính sách vận chuyển</p>
          </a>
          <a href="#">
            <p>Chính sách bảo mật</p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h3>Mạng xã hội</h3>
          <a href="#">
            <div className="footer-location">
              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <p>Facebook</p>
            </div>
          </a>
          <a href="#">
            <div className="footer-location">
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <p>Instagram</p>
            </div>
          </a>
          <a href="#">
            <div className="footer-location">
              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>
              <p>Youtube</p>
            </div>
          </a>
          <a href="#">
            <div className="footer-location">
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
              <p>Twitter</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
