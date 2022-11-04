import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import banner from "../../../image/banner-2.webp";
import user1 from "../../../image/feedback/t-icon-1.webp";
import user2 from "../../../image/feedback/t-icon-2.webp";
import user3 from "../../../image/feedback/t-icon-3.webp";
import user4 from "../../../image/feedback/t-icon-4.webp";

const Feedback = () => {
  const settings = {
    isFinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div id="feedback">
      <Slider {...settings}>
        <div className="feedback-item">
          <div className="feedback-image">
            <img src={banner} alt="feedback" />
            <div className="feedback-info">
              <h2>PHẢN HỒI</h2>
              <div className="feedback-line"></div>
              <p>
                Saved our business! We have no regrets! Thanks for the great
                service. FFOOD is worth much much more than I paid Saved our
                business! We have no regrets! Thanks for the great service. F
                Food is worth much more!
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <div className="image-user">
                <img src={user1} alt="user1" />
              </div>
              <h4>SƠN TÙNG MTP</h4>
              <p>Ca sĩ</p>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="feedback-image">
            <img src={banner} alt="feedback" />
            <div className="feedback-info">
              <h2>PHẢN HỒI</h2>
              <div className="feedback-line"></div>
              <p>
                Saved our business! We have no regrets! Thanks for the great
                service. FFOOD is worth much much more than I paid Saved our
                business! We have no regrets! Thanks for the great service. F
                Food is worth much more!
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <div className="image-user">
                <img src={user2} alt="user1" />
              </div>
              <h4>SƠN TÙNG MTP</h4>
              <p>Ca sĩ</p>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="feedback-image">
            <img src={banner} alt="feedback" />
            <div className="feedback-info">
              <h2>PHẢN HỒI</h2>
              <div className="feedback-line"></div>
              <p>
                Saved our business! We have no regrets! Thanks for the great
                service. FFOOD is worth much much more than I paid Saved our
                business! We have no regrets! Thanks for the great service. F
                Food is worth much more!
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <div className="image-user">
                <img src={user3} alt="user1" />
              </div>
              <h4>SƠN TÙNG MTP</h4>
              <p>Ca sĩ</p>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="feedback-image">
            <img src={banner} alt="feedback" />
            <div className="feedback-info">
              <h2>PHẢN HỒI</h2>
              <div className="feedback-line"></div>
              <p>
                Saved our business! We have no regrets! Thanks for the great
                service. FFOOD is worth much much more than I paid Saved our
                business! We have no regrets! Thanks for the great service. F
                Food is worth much more!
              </p>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <div className="image-user">
                <img src={user4} alt="user1" />
              </div>
              <h4>SƠN TÙNG MTP</h4>
              <p>Ca sĩ</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Feedback;
