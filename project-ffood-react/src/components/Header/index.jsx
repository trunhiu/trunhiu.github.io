import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../image/Logo_black.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductsSearch } from "../../redux/productsSlice";
import useDebounce from "../../Hook/useDebounce";
import { formatMoney } from "../../utils/utils";
import { fetchDataUsers, logout } from "../../redux/signupSlice";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const user = useSelector((state) => state.users.user);
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));

  // console.log(userLocal);

  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { productsSearch } = useSelector((state) => state.products);
  const [isShow, setIsShow] = useState(false);
  const [showMenuSidebar, setShowMenuSidebar] = useState(false);
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

  const handleShowSidebar = () => {
    setShowMenuSidebar(!showMenuSidebar);
  };

  const handleClose = () => {
    setShowMenuSidebar(!showMenuSidebar);
  };

  return (
    <>
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
            <i className="fa-solid fa-bars" onClick={handleShowSidebar}></i>
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
                  <div className="table-user-image">
                    <img
                      src={
                        userLocal.image
                          ? userLocal.image
                          : "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg"
                      }
                      alt={userLocal.name}
                    />
                    <div className="table-user-name">{userLocal.name}</div>
                  </div>
                  {userLocal.ROLES === "ADMIN" && (
                    <div
                      className="table-user-admin"
                      onClick={handleAdminClick}
                    >
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
      {showMenuSidebar && (
        <div className="menu-sidebar">
          <div className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="menu-sidebar-top">
            <div className="menu-sidebar-top-list">
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
              <p className="menu-sidebar-list">Danh sách</p>
            </div>
            <div className="menu-sidebar-top-login">
              <span>
                <i className="fa-solid fa-user-tie"></i>
              </span>
              <p className="menu-sidebar-login">Đăng nhập</p>
            </div>
          </div>
          <div className="menu-sidebar-mid">
            <div>
              <a href="#">Trang chủ</a>
            </div>
            <div>
              <a href="page/store.html">Cửa hàng</a>
            </div>
            <div>
              <a href="page/gioi-thieu.html">Giới thiệu</a>
            </div>
            <div>
              <a href="page/tin-tuc.html">Tin tức</a>
            </div>
            <div>
              <a href="page/lien-he.html">Liên hệ</a>
            </div>
          </div>
          <div className="login-sidebar-mid">
            <input type="text" placeholder="Địa chỉ email của bạn" />
            <input type="password" placeholder="Mật khẩu của bạn" />
            <p className="login-sidebar-mid-forgot">Bạn quên mật khẩu?</p>
            <button className="btn-login-sidebar-mid">Đăng nhập</button>
            <div className="login-sidebar-mid-line">
              <div>Hoặc</div>
            </div>
            <div className="login-sidebar-mid-register">Đăng ký ngay</div>
          </div>
          <div className="register-sidebar-mid">
            <h3>Đăng ký</h3>
            <input type="text" placeholder="Địa chỉ email của bạn" />
            <input type="password" placeholder="Mật khẩu của bạn" />
            <button className="btn-register-sidebar-mid">Đăng nhập</button>
            <div className="register-sidebar-mid-line">
              <div>Hoặc</div>
            </div>
            <div className="register-sidebar-mid-register">Quay trở lại</div>
          </div>
          <div className="forgotpw-sidebar-mid">
            <h3>Lấy lại mật khẩu</h3>
            <input type="text" placeholder="Địa chỉ email của bạn" />
            <button className="btn-forgotpw-sidebar-mid">Gửi</button>
            <div className="forgotpw-sidebar-mid-register">Hủy</div>
          </div>
          <div className="menu-sidebar-bottom">
            <button className="btn-menu-cancel">Đóng</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
