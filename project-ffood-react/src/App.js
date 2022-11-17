import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Info from "./pages/Infor";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import OrderHistory from "./pages/private/OrderHistory";
import PrivateRoutes from "./pages/private/PrivateRoutes";
import Profile from "./pages/private/Profile";
import SecurityAccount from "./pages/private/SecurityAccount";
import ProductDetail from "./pages/ProductsDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Stores from "./pages/Stores";
import { useEffect, useState } from "react";
import axios from "axios";
import router from "./router";
import { useSelector } from "react-redux";

function App() {
  const routes = useRoutes(router());

  return routes;
  // return (
  //   <>
  //     <Routes>
  //       <Route Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="cua-hang">
  //           <Route index element={<Stores />} />
  //           <Route path=":productId" element={<ProductDetail />} />
  //         </Route>
  //         <Route path="gioi-thieu" element={<Info />} />
  //         <Route path="tin-tuc" element={<Blogs />} />
  //         <Route path="lien-he" element={<Contact />} />
  //         <Route path="gio-hang" element={<ShoppingCart />} />

  //         <Route path="login" element={<Login />} />

  //         <Route element={<PrivateRoutes />}>
  //           <Route path="ho-so-ca-nhan" element={<Profile />} />
  //           <Route path="lich-su-mua-hang" element={<OrderHistory />} />
  //           <Route path="bao-mat-tai-khoan" element={<SecurityAccount />} />
  //         </Route>
  //         <Route path="*" element={<NotFound />} />
  //       </Route>
  //       <Route path="thanh-toan" element={<Checkout />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
