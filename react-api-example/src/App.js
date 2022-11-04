import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./page/UserList";
import PostDetail from "./page/PostDetail";
import PostList from "./page/PostList";
import UserPost from "./page/UserPost";
import Header from "./components/Header";

//Users
//user/1/posts
//posts
//posts/1
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Users">
          <Route index element={<UserList />} />
          <Route path=":userId/posts" element={<UserPost />} />
        </Route>
        <Route path="/posts">
          <Route index element={<PostList />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
