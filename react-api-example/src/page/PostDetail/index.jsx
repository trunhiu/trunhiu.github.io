import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import postApi from "../../api/postApi";

const PostDetail = () => {
  const params = useParams();
  console.log(params);
  const { postId } = params;
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async (id) => {
      let res = await postApi.getPostsById(id);

      setPost(res);
    };
    fetchPost(postId);
  }, []);
  return (
    <div className="container my-5">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetail;
