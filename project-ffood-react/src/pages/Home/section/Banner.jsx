import React from "react";
import "./banner.css";
import banner1 from "../../../image/banner-1.webp";
import banner2 from "../../../image/banner-2.webp";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    speed: 500,
    fade: true,
    cssEase: "linear",
    isFinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div id="banner">
      <Slider {...settings}>
        <div className="banner-item">
          <div className="banner-image">
            <Link to="cua-hang">
              <img src={banner1} alt="banner1" />
            </Link>
            <div className="header-texts">
              <p>Hãy tự thưởng cho bản thân một bữa ăn tuyệt vời</p>
              <h1>BURGUR CỠ BỰ</h1>
              <p>
                Bạn tự hỏi bạn có gì cho bữa ăn? Hãy đến với chúng tôi và thưởng
                thức một chiếc bánh mì kẹp thịt cỡ bự để lấp đầy và thoả mãn dạ
                dày của bạn
              </p>
              <Link to="cua-hang">Sản phẩm</Link>
            </div>
          </div>
        </div>
        <div className="banner-item">
          <div className="banner-image">
            <Link to="cua-hang">
              <img src={banner2} alt="" />
            </Link>
            <div className="header-texts">
              <p>Hãy tự thưởng cho bản thân một bữa ăn tuyệt vời</p>
              <h1>PIZZA CỠ BỰ</h1>
              <p>
                Bạn tự hỏi bạn có gì cho bữa ăn? Hãy đến với chúng tôi và thưởng
                thức một chiếc pizza nấm thịt cỡ bự để lấp đầy và thoả mãn dạ
                dày của bạn
              </p>
              <Link to="cua-hang">Sản phẩm</Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
