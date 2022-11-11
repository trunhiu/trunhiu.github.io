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
];

export default router;
