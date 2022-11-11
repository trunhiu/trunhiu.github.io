import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../../redux/blogsSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <div id="news">
      <div className="new-container">
        {blogs.map((blog) => (
          <div className="news-item" key={blog.id}>
            <div className="news-item-image">
              <Link to={`${blog.id}`}>
                <img src={blog.image} alt={blog.name} />
              </Link>
            </div>
            <div className="title">
              <div className="news-item-date">
                <span>{blog.day}</span>
                <div></div>
                <span>{blog.month}</span>
              </div>
              <div className="news-item-title">
                <p>{blog.tag}</p>
                <a href="bai-viet-1.html">
                  <h3>{blog.name}</h3>
                </a>
              </div>
            </div>
            <p className="text">{blog.description}</p>
            <div className="news-item-icon">
              <div className="icon-user">
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                <p>Trung hiếu</p>
              </div>
              <div className="icon-comment">
                <span>
                  <i className="fa-solid fa-comment"></i>
                </span>
                <p>0 bình luận</p>
              </div>
            </div>
            <div className="news-item-readmore">
              <a href="bai-viet-1.html">Đọc thêm</a>
              <div className="news-item-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
