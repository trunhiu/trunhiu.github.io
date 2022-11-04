import React from "react";
import "./header.css";
import logo from "../../image/Logo_black.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/" end>
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="cua-hang">Cửa hàng</NavLink>
        </li>
        <li>
          <NavLink to="gioi-thieu">Giới thiệu</NavLink>
        </li>
        <li>
          <NavLink to="tin-tuc">Tin tức</NavLink>
        </li>
        <li>
          <NavLink to="lien-he">Liên hệ</NavLink>
        </li>
      </ul>
      <div className="logo-menu">
        <span>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <div className="header-icon">
        <div className="header-item header-search">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <div className="header-item header-login">
          <span>
            <i className="fa-solid fa-user-tie"></i>
          </span>
        </div>
        <div className="header-item header-shoppingcart">
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="cart-count bg-white px-1 rounded-2 border">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
