import React, { useReducer } from "react";
import Context from "./Context";
import reducer, { initialState } from "../store/reducer";

const Provider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  const value = {
    products,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
