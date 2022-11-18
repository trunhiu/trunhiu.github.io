import "./filterproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import banner1 from "../../../image/products/banner-4.webp";
import banner2 from "../../../image/products/banner-5.webp";
import banner3 from "../../../image/products/banner-3.webp";
import banner4 from "../../../image/products/banner-7.webp";
import banner5 from "../../../image/products/banner-6.webp";
import banner6 from "../../../image/products/banner-8.webp";

const FilterProducts = () => {
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
    <div className="shortcut-container">
      <div className="shortcut-slider">
        <Slider {...settings}>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner1} alt="pizza" />
                <div className="shortcut-text">
                  <h3>Pizza</h3>
                  <div className="short">
                    <a href="page/store.html#Pizza">
                      <p>Xem thêm</p>
                    </a>
                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner2} alt="ga ran" />
                <div className="shortcut-overlay"></div>
                <div className="shortcut-text">
                  <h3>Gà rán</h3>
                  <div className="short">
                    <a href="page/store.html#Chicken">
                      <p>Xem thêm</p>
                    </a>
                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner3} alt="burger" />
                <div className="shortcut-overlay"></div>
                <div className="shortcut-text">
                  <h3>Burger</h3>
                  <div className="short">
                    <div className="Burger-filter">
                      <p>Xem thêm</p>
                    </div>

                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner4} alt="khoai tay chien" />
                <div className="shortcut-overlay"></div>
                <div className="shortcut-text">
                  <h3>Đồ chiên</h3>
                  <div className="short">
                    <a href="page/store.html#French-friesh">
                      <p>Xem thêm</p>
                    </a>
                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner5} alt="mi y" />
                <div className="shortcut-overlay"></div>
                <div className="shortcut-text">
                  <h3>Mì xào</h3>
                  <div className="short">
                    <a href="page/store.html#Pasta">
                      <p>Xem thêm</p>
                    </a>
                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shortcut-item">
              <div className="shortcut-image">
                <img src={banner6} alt="khai vi" />
                <div className="shortcut-overlay"></div>
                <div className="shortcut-text">
                  <h3>Khai vị</h3>
                  <div className="short">
                    <a href="page/store.html#Salat">
                      <p>Xem thêm</p>
                    </a>
                    <span>
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FilterProducts;
