import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLocal");
    navigate("/");
  };
  return (
    <div className="side-bar">
      <div className="top">
        <Link to="">
          <span className="logo">FFOOD Admin</span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <li>
            <PersonIcon className="icon" />
            <Link to="users">Users</Link>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <Link to="products">Products</Link>
          </li>
          <li>
            <FiberNewIcon className="icon" />
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
