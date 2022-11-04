import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import PostItem from "./PostItem";

const Post = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Ao Thun", price: 100000 },
    { id: 2, name: "Quan Dai", price: 200000 },
    { id: 3, name: "Quan Au", price: 300000 },
  ]);

  // function: object : reference
  //   const handleClick = () => {
  //     console.log("handleClick");
  //   };

  // useCallback : Tránh tạo lại func không có sự thay đổi về deps
  //useCallback: const func = useCallback(callbackFunction, [deps])

  const handleClick = useCallback(() => {
    console.log("handleClick");
  }, [count]);

  // useMemo : Tránh tính toán lại func không có sự thay đổi về deps
  //useMemo: const value = useMemo(callbackFunction(), [deps])

  const total = useMemo(() => {
    let rs = products.reduce((total, product) => total + product.price, 0);
    console.log(rs);

    return rs;
  }, [products]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: "New Product" + Math.random(),
        price: 500000,
      },
    ]);
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>Counter1 : {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Add1</button>
      <hr />
      <PostItem handleClick={handleClick} />

      <button onClick={addProduct}>Add Products</button>

      {/* {console.log("render")} */}
    </>
  );
};

export default Post;
