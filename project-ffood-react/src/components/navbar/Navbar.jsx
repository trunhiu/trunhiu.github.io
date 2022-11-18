import React, { useEffect } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataUsers } from "../../redux/signupSlice";

const Navbar = () => {
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataUsers());
  }, []);
  return (
    <div className="nav-bar">
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
      <div className="avatar">
        <img
          src={
            userLocal.image
              ? userLocal.image
              : "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg"
          }
          className="avt"
        />
      </div>
    </div>
  );
};

export default Navbar;
