import React from "react";
import { products } from "../../../../data/products";
import { formatMoney } from "../../../../utils/utils";
import banner from "../../../../image/banner/banner-65.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="col-lg-9">
      <div className="products-image">
        <img src={banner} alt="products image" />
      </div>
      <div className="fillter-product-top">
        <div className="fillter-product-sidebar">
          <span>
            <i className="fa-solid fa-filter"></i>
          </span>
        </div>
        <div className="products-sort">
          <label htmlFor="option">Sắp xếp giá:</label>
          <select className="select-sort" id="option">
            <option value="0">Mặc định</option>
            <option value="1">Từ thấp đến cao</option>
            <option value="2">Từ cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className="row products-list">
        {products.map((product) => (
          <div className="col-6 col-md-4 col-lg-3" key={product.id}>
            <div className="product-item">
              <div className="product-image">
                <Link to={`/cua-hang/${product.id}`}>
                  <img src={product.images} alt={product.name} />
                </Link>
                <div className="product-icon">
                  <div className="product-icon-addtocart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="product-icon-quickview">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <a href="chi-tiet-sp.html?id=${p.id}">
                  <h3>{product.name}</h3>
                </a>
                <p>{formatMoney(product.price)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-panigation row">
        <div className="col-lg-12">
          <div className="shop-paginate">
            <ul className="pagination">
              <li className="pagination-item btn-prev">
                <i className="fa-solid fa-angle-left"></i>
              </li>
              <li className="pagination-item btn-next">
                <i className="fa-solid fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
