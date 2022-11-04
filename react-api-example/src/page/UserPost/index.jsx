import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userApi from "../../api/userApi";
import { Link } from "react-router-dom";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsOfUser = async (id) => {
      let res = await userApi.getPostsOfUser(id);

      setPosts(res);
    };
    fetchPostsOfUser(userId);
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mb-4">List Post Of UserId {userId}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 &&
            posts.map((post) => (
              <tr key={post.id}>
                <th>{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
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

export default UserPost;
