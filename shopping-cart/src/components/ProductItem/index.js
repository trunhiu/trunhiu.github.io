import React, { useContext } from "react";
import { formatMoney } from "../../utils/utils";
import Context from "../../context/Context";
import { addCount, subtractCount, deleteCount } from "../../store/actions";

function ProductItem(props) {
  const { id, name, image, size, count, price } = props.product;
  const { products, dispatch } = useContext(Context);

  // Tăng số lượng
  const handleAddCount = (id) => {
    dispatch(addCount(id));
  };

  //Giảm số lượng
  const handleSubtractCount = (id) => {
    let product = products.find((p) => p.id === id);
    if (product.count <= 1) {
      return;
    }

    dispatch(subtractCount(id));
  };

  // Xóa sản phẩm
  const handleDeleteCount = (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirm) {
      dispatch(deleteCount(id));
    }
  };

  return (
    <div className="product-item d-flex border mb-4">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-dark fs-5 fw-normal">
              {name} ({size})
            </h2>
            <h2 className="text-danger fs-5 fw-normal">{formatMoney(price)}</h2>
          </div>
          <div className="text-black-50">
            <div className="d-inline-block me-3">
              <button
                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                onClick={() => handleSubtractCount(id)}
              >
                -
              </button>
              <span className="py-2 px-3 d-inline-block fw-bold">{count}</span>
              <button
                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                onClick={() => handleAddCount(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="text-primary border-0 bg-transparent fw-light"
            onClick={() => handleDeleteCount(id)}
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
}

export default ProductItem;
