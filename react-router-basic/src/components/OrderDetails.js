import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderID } = useParams();
  return (
    <>
      <h1>OrderDetails : ID - {orderID}</h1>
    </>
  );
};

export default OrderDetails;
