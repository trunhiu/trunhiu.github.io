import React, { useContext, useState } from "react";
import Context from "../../Context/Contex";
import { plusItem, minusItem, deleteItem } from "../../Store/Action";

const ProductItem = (props) => {
  const { lists, dispatch } = useContext(Context);
  // const [count, setCount] = useState(0);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleMinus = (id, size) => {
    dispatch(minusItem(id, size));
  };

  const handlePlus = (id) => {
    let newList = {
      id: id,
      name: props.name,
      size: props.size,
      price: props.price,
    };

    dispatch(plusItem(newList));
  };
  return (
    <div className="product-item d-flex border mb-4">
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark fs-5 fw-normal">
              {props.name} ({props.size})
            </h2>
            <h2 className="text-danger fs-5 fw-normal">{props.price}</h2>
          </div>
          <div className="text-black-50">
            <div className="d-inline-block me-3">
              <button
                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                onClick={handleMinus}
              >
                -
              </button>
              <span className="py-2 px-3 d-inline-block fw-bold">
                {props.count}
              </span>
              <button
                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                onClick={() => handlePlus(props.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="text-primary border-0 bg-transparent fw-light"
            onClick={handleDelete}
          >
            <span>
              <i className="fa-solid fa-trash-can"></i>
            </span>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
