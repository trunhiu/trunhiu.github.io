import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    { id: 1, name: "San pham 1" },
    { id: 2, name: "San pham 2" },
    { id: 3, name: "San pham 3" },
  ];
  return (
    <>
      <h1>Orders</h1>

      {orders.map((order) => (
        <Link to={`/order/${order.id}`} key={order.id} className="d-block">
          {order.name}
        </Link>
      ))}
    </>
  );
};

export default Orders;
