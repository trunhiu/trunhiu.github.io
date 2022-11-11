import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { fetchBlogs } from "../../../redux/blogsSlice";

const BlogAnother = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div id="another-new">
      <div className="another-new-container">
        <div className="another-new-top">
          <h3>Bài viết khác</h3>
          <div className="another-new-top-line"></div>
        </div>
        <div className="another-new-bottom">
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div className="another-new-item" key={blog.id}>
                {console.log(blog)}
                <div className="another-new-image">
                  <Link to={`../${blog.id}`}>
                    <img src={blog.image} alt="bai-viet-2" />
                  </Link>
                </div>
                <div className="another-new-content">
                  <div className="another-new-content-container">
                    <p className="another-new-content-top">{blog.tag}</p>
                    <Link to={blog.id}>
                      <h4>{blog.name}</h4>
                    </Link>
                    <div className="another-new-content-line"></div>
                    <div className="another-new-content-readmore">
                      <Link to={blog.id}>Xem thêm</Link>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogAnother;
