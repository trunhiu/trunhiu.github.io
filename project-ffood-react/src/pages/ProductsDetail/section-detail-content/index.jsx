import React from "react";
import { formatMoney } from "../../../utils/utils";

const DetailContent = (props) => {
  console.log(props);
  const { name, price, description, sizes } = props.product;
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
        <div className="detail-size">
          {sizes.map((size, index) => (
            <button key={index}>{size}</button>
          ))}
        </div>
        <div className="detail-buy">
          <div className="detail-amount">
            <div className="number">1</div>
            <div className="icon">
              <span className="btn-plus-count">
                <i className="fa-solid fa-caret-up"></i>
              </span>
              <span className="btn-minus-count">
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>
          </div>
          <div className="btn-add">Thêm vào giỏ hàng</div>
        </div>
        <div className="btn-buys">Mua ngay</div>
      </div>
    </div>
  );
};

export default DetailContent;
