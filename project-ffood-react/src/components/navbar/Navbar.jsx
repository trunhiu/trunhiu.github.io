import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
      <div className="avatar">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="avata"
          className="avt"
        />
      </div>
    </div>
  );
};

export default Navbar;
