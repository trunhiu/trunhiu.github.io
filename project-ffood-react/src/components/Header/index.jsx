import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../image/Logo_black.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsSearch } from "../../redux/productsSlice";
import useDebounce from "../../Hook/useDebounce";
import { formatMoney } from "../../utils/utils";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { productsSearch } = useSelector((state) => state.products);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const ref = useRef();
  const navigate = useNavigate();

  const debounce = useDebounce(input, 700);

  useEffect(() => {
    if (debounce.trim() === "") {
      return;
    }
    dispatch(fetchproductsSearch(debounce));
  }, [debounce]);

  const handleProductsSearch = (id) => {
    console.log(id);
    navigate(`/cua-hang/${id}`);
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };
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
      {isShow && (
        <div className="header-input">
          <input
            type="text"
            ref={ref}
            value={input}
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            onFocus={(e) => {
              e.target.select();
              e.target.setSelectionRange(0, 99999);
            }}
            onBlur={() => {
              setIsShow(false);
            }}
          />
          <div className="input-dropdown">
            {productsSearch.map((product) => (
              <div key={product.id} className="dropdown">
                <div
                  className="input-dropdown-image"
                  onClick={() => handleProductsSearch(product.id)}
                >
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div>
                  <div className="input-dropdown-name">{product.name}</div>
                  <div className="input-dropdown-price">
                    {formatMoney(product.price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="header-icon">
        <div className="header-item header-search" onClick={handleClick}>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div className="header-item header-login">
          <Link to="/login">
            <span>
              <i className="fa-solid fa-user-tie"></i>
            </span>
          </Link>
        </div>
        <div className="header-item header-shoppingcart">
          <Link to="gio-hang">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>

          <span className="cart-count bg-white px-1 rounded-2 border">
            {cart.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
