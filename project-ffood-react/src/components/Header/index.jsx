import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../image/Logo_black.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsSearch } from "../../redux/productsSlice";
import useDebounce from "../../Hook/useDebounce";
import { formatMoney } from "../../utils/utils";
import { fetchDataUsers, logout } from "../../redux/signupSlice";

const Header = () => {
  const user = useSelector((state) => state.users.user);
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));

  // console.log(userLocal);

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { productsSearch } = useSelector((state) => state.products);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const ref = useRef();
  const navigate = useNavigate();
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    dispatch(fetchDataUsers());
  }, []);

  const debounce = useDebounce(input, 700);

  useEffect(() => {
    if (debounce.trim() === "") {
      return;
    }
    dispatch(fetchproductsSearch(debounce));
  }, [debounce]);

  const handleProductsSearch = (id) => {
    navigate(`/cua-hang/${id}`);
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleUserClick = () => {
    setShowTable(!showTable);
  };

  const handleAdminClick = () => {
    navigate("/admin");
  };

  const handleLogout = () => {
    // dispatch(logout(user.id));
    localStorage.removeItem("userLocal");
    navigate("/");
  };

  const handleProfile = () => {
    navigate("ho-so");
  };

  const handleSecurityAccount = () => {
    navigate("security-account");
  };
  // console.log(userLocal.image);

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

        {!userLocal ? (
          <div className="header-item header-login">
            <Link to="/login">
              <span>
                <i className="fa-solid fa-user-tie"></i>
              </span>
            </Link>
          </div>
        ) : (
          <div className="image-user" onClick={handleUserClick}>
            <img
              src={
                userLocal.image
                  ? userLocal.image
                  : "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg"
              }
              alt={userLocal.name}
            />
            {showTable && (
              <div className="table-user">
                {userLocal.ROLES === "ADMIN" && (
                  <div className="table-user-admin" onClick={handleAdminClick}>
                    Admin
                  </div>
                )}
                <div className="table-user-profile" onClick={handleProfile}>
                  Profile
                </div>
                <div
                  className="table-user-security-account"
                  onClick={handleSecurityAccount}
                >
                  SecurityAccount
                </div>
                <div className="table-user-logout" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
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
