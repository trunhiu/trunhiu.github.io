import React from "react";
import "./banner.css";
import banner from "../../../image/banner/banner-10.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="banner">
      <div className="banner-item">
        <div className="banner-image">
          <img src={banner} alt="banner1" />
          <div className="header-text">
            <h1>Cửa hàng</h1>
            <div>
              <Link to="/">
                <p>Trang chủ</p>
              </Link>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <p>Cửa hàng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
