import React from "react";
import { Link } from "react-router-dom";

const DetailBreadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Link to="../cua-hang">Cửa hàng</Link>
      <span>
        <i className="fa-solid fa-angle-right"></i>
      </span>
      <span className="breadcrumbs">Thanh toán</span>
    </div>
  );
};

export default DetailBreadcrumb;
