import React from "react";
import Slider from "react-slick";

const Logo = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    isFinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div id="detail-logo">
      <div className="detail-logo-container">
        <div className="detail-logo-slider">
          <Slider {...settings}>
            <div className="col-3">
              <div className="detail-logo-item">
                <span>
                  <i className="fa-solid fa-truck-fast"></i>
                </span>
                <p>Tốc độ giao hàng nhanh</p>
              </div>
            </div>
            <div className="col-3">
              <div className="detail-logo-item">
                <span>
                  <i className="fa-solid fa-clipboard-check"></i>
                </span>
                <p>Hoàn trả hàng nếu bị sai thông tin</p>
              </div>
            </div>
            <div className="col-3">
              <div className="detail-logo-item">
                <span>
                  <i className="fa-solid fa-medal"></i>
                </span>
                <p>Uy tín làm nên thương hiệu</p>
              </div>
            </div>
            <div className="col-3">
              <div className="detail-logo-item">
                <span>
                  <i className="fa-solid fa-heart-pulse"></i>
                </span>
                <p>Đảm bảo lượng dầu mỡ vừa đủ</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Logo;
