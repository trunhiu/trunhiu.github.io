//https://jsonplaceholder.typicode.com

import axiosClient from "./axiosClient";

//https://jsonplaceholder.typicode.com/users
const postApi = {
  getPosts() {
    const url = "/posts";
    return axiosClient.get(url);
  },
  getPostsById(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },
};

export default postApi;
