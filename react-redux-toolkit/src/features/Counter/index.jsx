import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addTwo,
  getCounter,
  getTodosActive,
} from "./counterSlice";

const Counter = () => {
  const counter = useSelector(getCounter);

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increment());
  };
  const handleSubtract = () => {
    dispatch(decrement());
  };

  const handleAddTwo = () => {
    dispatch(addTwo(10));
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleAddTwo}>AddTwo</button>
    </>
  );
};

export default Counter;
