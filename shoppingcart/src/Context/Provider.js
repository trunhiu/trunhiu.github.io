import React, { useReducer } from "react";
import reducer, { initialState } from "../Store/Reducer";
import Context from "./Contex";

const Provider = ({ children }) => {
  const [lists, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ lists, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
