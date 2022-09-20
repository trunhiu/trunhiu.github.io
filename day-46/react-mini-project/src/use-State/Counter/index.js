import React from "react";
import { useState } from "react";

let numbers = [1, 2, 3, 4, 5];

const Counter = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(() => {
    //Xử lý phức tạp cần nhiều thời gian để tính toán
    const rs = numbers.reduce((a, b) => a + b, 0);
    console.log(rs);
  });

  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Ao Thun", price: 100000 },
    { id: 2, name: "Quan Dai", price: 200000 },
    { id: 3, name: "Quan Au", price: 300000 },
  ]);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickMutil = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const changeName = () => {
    //REPLACING
    // setUser({ name: "abc@gmail.com" });
    setUser({ ...user, name: "abc@gmail.com" });
  };

  const changePrice = () => {
    let id = 1;
    let newPrice = 500000;

    let newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, price: newPrice };
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <>
      <h1>total: {total}</h1>
      <hr />

      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClickMutil}>Add Mutil</button>
      <hr />

      <h1>User: {JSON.stringify(user)}</h1>
      <button onClick={changeName}>ChangeName</button>

      <hr />

      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <button onClick={changePrice}>Change Price</button>

      {console.log("render")}
    </>
  );
};

export default Counter;
