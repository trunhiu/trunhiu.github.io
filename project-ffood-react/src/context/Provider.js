import React from "react";
import Context from "./Context";
import { products } from "../data/products";
import { blogs } from "../data/blogs";

function Provider({ children }) {
  const value = { products, blogs };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
