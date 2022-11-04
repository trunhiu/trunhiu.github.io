import React, { useState, useEffect } from "react";
import postApi from "../../api/postApi";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await postApi.getPosts();

      setPosts(res);
    };
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mb-4">List Post</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 &&
            posts.map((post) => (
              <tr key={post.id}>
                <th>{post.id}</th>
                <td>{post.title}</td>
                <td>
                  <Link to={`/posts/${post.id}`}>Link post</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
