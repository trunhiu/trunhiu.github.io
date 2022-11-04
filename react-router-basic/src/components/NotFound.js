import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <NavLink to="/" className="btn btn-primary">
        Home Page
      </NavLink>
    </>
  );
};

export default NotFound;
