import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Outlet />
        <h1 className="admin-title">Welcome To Admin</h1>
      </div>
    </div>
  );
};

export default HomePage;
