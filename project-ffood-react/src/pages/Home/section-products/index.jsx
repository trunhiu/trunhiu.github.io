import React, { useEffect, useState } from "react";
import { formatMoney } from "../../../utils/utils";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHotProducts,
  fetchLoveProducts,
  fetchNewProducts,
} from "../../../redux/productsSlice";

const Products = () => {
  const { newProducts, hotProducts, loveProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const [tags, setTags] = useState("NEW");

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchHotProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchLoveProducts());
  }, []);

  const handleNew = () => {
    setTags("NEW");
  };

  const handleHot = () => {
    setTags("HOT");
  };

  const handleLove = () => {
    setTags("LOVE");
  };

  return (
    <>
      <div className="products-title">
        <h2>Một số sản phẩm của cửa hàng</h2>
        <div></div>
        <button
          className={
            "btn-products btn-products-new " +
            `${tags === "NEW" ? "active" : ""}`
          }
          onClick={(e) => handleNew()}
        >
          MÓN MỚI
        </button>
        <button
          className={
            "btn-products btn-products-hots " +
            `${tags === "HOT" ? "active" : ""}`
          }
          onClick={(e) => handleHot()}
        >
          BÁN CHẠY
        </button>
        <button
          className={
            "btn-products btn-products-luv " +
            `${tags === "LOVE" ? "active" : ""}`
          }
          onClick={(e) => handleLove()}
        >
          YÊU THÍCH
        </button>
      </div>
      <div className="products-container">
        {tags == "NEW" && (
          <div className="products-new">
            <div className="row products-list-new">
              {newProducts.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <div className="product-item">
                    <div className="product-image">
                      <a href="page/chi-tiet-sp.html">
                        <img src={product.images} alt={product.name} />
                      </a>
                      <span className="news-product">{product.tags}</span>
                      <div className="product-icon">
                        <div>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="product-icon-quickview">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
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
                      <a href="page/chi-tiet-sp.html">
                        <h3>{product.name}</h3>
                      </a>
                      <p>{formatMoney(product.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tags == "HOT" && (
          <div className="products-hots">
            <div className="row products-list-hot">
              {hotProducts.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product.images} alt={product.name} />
                      <span className="hots-product">{product.tags}</span>
                      <div className="product-icon">
                        <div>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="product-icon-quickview">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
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
                      <h3>{product.name}</h3>
                      <p>{formatMoney(product.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tags == "LOVE" && (
          <div className="products-luv">
            <div className="row products-list-love">
              {loveProducts.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product.images} alt={product.name} />
                      <span className="luv-product">
                        <i className="fa-solid fa-heart"></i>
                      </span>
                      <div className="product-icon">
                        <div>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="product-icon-quickview">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
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
                      <h3>{product.name}</h3>
                      <p>{formatMoney(product.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
