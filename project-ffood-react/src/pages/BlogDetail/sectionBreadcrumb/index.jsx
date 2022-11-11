import React from "react";
import { Link } from "react-router-dom";

const BlogBreadcrumb = () => {
  return (
    <div id="directional">
      <Link to="/">Trang chủ</Link>
      <span>
        <i className="fa-solid fa-angle-right"></i>
      </span>
      <a href="tin-tuc.html">Tin tức</a>
      <span>
        <i className="fa-solid fa-angle-right"></i>
      </span>
      <div>Top 10 địa điểm bán Hamburger ngon nhất tại Sài Gòn</div>
    </div>
  );
};

export default BlogBreadcrumb;
