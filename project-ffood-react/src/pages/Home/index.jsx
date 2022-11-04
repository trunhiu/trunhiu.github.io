import React from "react";
import Logo from "./section-logo/Logo";
import Banner from "./section/Banner";
import Products from "./section-products";
import FilterProducts from "./section-filterproducts";
import Feedback from "./section-feedback";
import HotProducts from "./section-hotproducts";
import New from "./section-new";

const Home = () => {
  return (
    <>
      <Banner />
      <Logo />
      <Products />
      <FilterProducts />
      <Feedback />
      <HotProducts />
      <New />
    </>
  );
};

export default Home;
