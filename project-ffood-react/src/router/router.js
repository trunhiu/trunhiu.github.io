import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import BlogDetail from "../pages/BlogDetail";
import Blogs from "../pages/Blogs";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Info from "../pages/Infor";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductsDetail";
import ShoppingCart from "../pages/ShoppingCart";
import Stores from "../pages/Stores";
import SignUp from "../pages/Signup";
import Admin from "../pages/Admin/Admin";
import HomePage from "../pages/Admin/HomePage/HomePage";
import CreateUser from "../pages/Admin/CreateUser/CreateUser";
import CreateProducts from "../pages/Admin/CreateProducts/CreateProducts";
import CreateBlogs from "../pages/Admin/CreateBlogs/CreateBlogs";
import DetailUser from "../pages/Admin/DetailUser/DetailUser";
import DetailProduct from "../pages/Admin/DetailProduct/DetailProduct";
import DetailBlog from "../pages/Admin/DetailBlog/DetailBlog";
import Create from "../pages/Admin/New/Create";
import CreateP from "../pages/Admin/CreateP/CreateP";
import CreateB from "../pages/Admin/CreateB/CreateB";
import Profile from "../pages/Profile/Profile";
import SecurityAcount from "../components/SecurityAccount/SecurityAcount";

const router = () => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "cua-hang",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Stores />,
          },
          {
            path: ":productId",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "gioi-thieu",
        element: <Info />,
      },
      {
        path: "/tin-tuc",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Blogs />,
          },
          {
            path: ":blogsId",
            element: <BlogDetail />,
          },
        ],
      },
      {
        path: "lien-he",
        element: <Contact />,
      },
      {
        path: "gio-hang",
        element: <ShoppingCart />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "thanh-toan",
    element: <Checkout />,
  },
  {
    path: "ho-so",
    element: <Profile />,
  },
  {
    path: "security-account",
    element: <SecurityAcount />,
  },
  {
    path: "admin",
    element: <HomePage />,
    children: [
      {
        path: "users",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <CreateUser />,
          },
          {
            path: "createU",
            element: <Create />,
          },
          {
            path: ":userId",
            element: <DetailUser />,
          },
        ],
      },
      {
        path: "products",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <CreateProducts />,
          },
          {
            path: "createP",
            element: <CreateP />,
          },
          {
            path: ":productId",
            element: <DetailProduct />,
          },
        ],
      },
      {
        path: "blogs",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <CreateBlogs />,
          },
          {
            path: "createB",
            element: <CreateB />,
          },
          {
            path: ":blogId",
            element: <DetailBlog />,
          },
        ],
      },
    ],
  },
];

export default router;
