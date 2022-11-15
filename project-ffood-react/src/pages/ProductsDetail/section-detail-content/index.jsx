import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  addToCart,
  decrementCart,
  fetchCartProduct,
} from "../../../redux/cartSlice";
import { formatMoney } from "../../../utils/utils";
import { toast } from "react-toastify";

const DetailContent = (props) => {
  const product = props.product;

  const cart = useSelector((state) => state.cart.carts);
  console.log(cart);

  useEffect(() => {
    dispatch(fetchCartProduct());
  }, []);

  const [counter, setCounter] = useState(1);
  const { name, price, description, sizes } = props.product;
  const dispatch = useDispatch();
  // const counter = useSelector(getCounter);

  const handleInCrement = () => {
    dispatch(addProductToCart(product));
    setCounter((pre) => pre + 1);
  };

  const handleDecrement = () => {
    if (counter === 1) {
      return;
    }

    setCounter((pre) => pre - 1);

    dispatch(decrementCart(product));
  };

  const handleAddToCart = () => {
    const isExist = cart.some((p) => p.id === +product.id);

    if (isExist) {
      toast.warning("Sản phẩm đã có trong giỏ hàng");
      return;
    }
    dispatch(addToCart(product));
    dispatch(addProductToCart(product));
    toast.success(`${product.name} đã được thêm vào giỏ hàng. `, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="detail-content">
        <h3 className="detail-name">{name}</h3>
        <div className="detail-price">{formatMoney(price)}</div>
        <div className="star">
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="detail-line"></div>
        <p className="detail-description">{description}</p>
        <div className="detail-offer">
          <p>Ưu đãi hiện đang có</p>
        </div>
        <div className="special-offer">
          <ul>
            <li>Còn hàng</li>
            <li>Miễn phí vận chuyển</li>
            <li>Giảm 30% khi sử dụng mã: Deal30</li>
          </ul>
        </div>
        <div className="size">
          <p>Kích thước</p>
        </div>
        <div className="detail-buy">
          <div className="detail-amount">
            <div className="number">{counter}</div>
            <div className="icon">
              <span className="btn-plus-count" onClick={handleInCrement}>
                <i className="fa-solid fa-caret-up"></i>
              </span>
              <span className="btn-minus-count" onClick={handleDecrement}>
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
          </div>
          <div className="btn-add" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </div>
        </div>
        <div className="btn-buys">Mua ngay</div>
      </div>
    </div>
  );
};

export default DetailContent;
