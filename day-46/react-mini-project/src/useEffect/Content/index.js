import React from "react";
import { useState, useEffect } from "react";

/*
    Cú pháp: useEffect(callback, [dependencies]);

    1. useEffect(callback)
    - Chạy lại mỗi khi component bị re-render.

    2. useEffect(callback, []) - Giống componentDidMount
    - Chạy 1 lần duy nhất khi component mount.
    3. useEffect(callback, [deps])
    - Mỗi khi dependencies thay đổi về mặt giá trị thì được render lại

    Điểm chung: đều được gọi sau lần mount đầu tiên

    Clean up : 
    - Được chạy 1 lần duy nhất trước khi component bị unmount
    - Chạy sau mỗi khi component bị re-render và trước khi hàm callback
  */

const Content = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  //1. useEffect(callback);
  //   useEffect(() => {
  //     console.log("useEffect");
  //   });

  //2. useEffect(callback, [])
  //   useEffect(() => {
  //     console.log("useEffect");
  //   }, []);

  //3. useEffect(callback, [deps])

  useEffect(() => {
    console.log("useEffect [deps]");
  }, [count]);

  return (
    <>
      <h1>Couter: {count} </h1>
      <button onClick={handleClick}>Add</button>

      <h1>Couter1: {count1} </h1>

      <button onClick={handleClick1}>Add1</button>

      {console.log("render")}
    </>
  );
};

export default Content;
