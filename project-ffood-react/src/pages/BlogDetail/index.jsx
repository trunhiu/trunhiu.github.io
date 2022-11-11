import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogsById } from "../../redux/blogsSlice";
import BlogAnother from "./AnotherNew";
import BlogBreadcrumb from "./sectionBreadcrumb";
import BlogNew from "./sectionNew";
import BlogTags from "./sectionTag";
import { isEmpty } from "../../utils/utils";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { blogsId } = useParams();
  const { blog } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(fetchBlogsById(blogsId));
  }, [blogsId]);
  return (
    <>
      {!isEmpty(blog) && (
        <>
          <BlogBreadcrumb />
          <BlogNew blogs={blog} />
          <BlogTags />
          <BlogAnother blogs={blog} />
        </>
      )}
    </>
  );
};

export default BlogDetail;
