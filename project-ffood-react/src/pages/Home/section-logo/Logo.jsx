import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../../image/anhlogobody/advice-black.webp";
import logo2 from "../../../image/anhlogobody/shipping2-black.webp";
import logo3 from "../../../image/anhlogobody/returning-black.webp";
import logo4 from "../../../image/anhlogobody/secure2-black.webp";

import "./logo.css";

const Logo = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    isFinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div id="logo">
      <div className="logo-container">
        <div className="logo-slider">
          <Slider {...settings}>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="logo-item">
                <div className="logo-image">
                  <img src={logo1} alt="logo1" />
                </div>
                <h3>HỖ TRỢ NHIỆT TÌNH 24/7</h3>
                <p>
                  Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 7 ngày trong
                  tuần
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              <div className="logo-item">
                <div className="logo-image">
                  <img src={logo2} alt="logo2" />
                </div>
                <h3>MIỄN PHÍ GIAO HÀNG</h3>
                <p>Miễn phí giao hàng với các đơn trong phạm vi 5km</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              <div className="logo-item">
                <div className="logo-image">
                  <img src={logo3} alt="logo3" />
                </div>
                <h3>HOÀN TRẢ</h3>
                <p>
                  Nếu sản phẩm của chúng tôi không giống với mô tả có thể đổi
                  1:1
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              <div className="logo-item">
                <div className="logo-image">
                  <img src={logo4} alt="logo4" />
                </div>
                <h3>ĐẢM BẢO CHẤT LƯỢNG</h3>
                <p>Chúng tôi cam kết sản phẩm của chúng tôi là tốt nhất</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Logo;
