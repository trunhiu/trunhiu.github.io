import "./hotproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import { formatMoney } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";

const HotProducts = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  let combo = products.filter((product) => product.category === "Combo");
  let hotCombo = combo.filter((product) => product.tags === "HOT");
  return (
    <div id="hotproduct">
      <div className="products-title">
        <h2>Combo bán chạy</h2>
        <div></div>
      </div>
      <div className="products-container1">
        <div className="hotproduct-slider">
          <Slider {...settings}>
            {hotCombo.map((product) => (
              <div className="products-item" key={product.id}>
                <div className="product-item1">
                  <div className="product-image1">
                    <img src={product.images} alt={product.name} />
                    <div className="product-icon1">
                      <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                      </div>
                      <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </div>
                  </div>
                  <div className="product-content1">
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HotProducts;
