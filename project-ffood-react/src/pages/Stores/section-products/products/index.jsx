import React, { useCallback, useEffect, useState } from "react";
import { formatMoney } from "../../../../utils/utils";
import banner from "../../../../image/banner/banner-65.jpg";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsSort,
} from "../../../../redux/productsSlice";

const Product = () => {
  let PageSize = 12;
  const sorts = [
    {
      option: "Mặc định",
      value: "",
    },
    {
      option: "Từ thấp đến cap",
      value: "asc",
    },
    {
      option: "Từ cao đến thấp",
      value: "desc",
    },
  ];
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleChange = (e) => {
    if (!e.target.value) {
      dispatch(fetchProducts());
    } else {
      dispatch(fetchProductsSort(e.target.value));
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentTableData, setCurrentTableData] = useState([]);
  console.log(currentTableData);
  useEffect(() => {
    if (!products.length) {
      return;
    }
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const proTemp = products.slice(firstPageIndex, lastPageIndex);
    setCurrentTableData(proTemp);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [currentPage, products]);

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
          <select
            className="select-sort"
            id="option"
            // value={selectedIndex}
            onChange={handleChange}
          >
            {sorts.map((sort, index) => (
              <option key={index} value={sort.value}>
                {sort.option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row products-list">
        {currentTableData.map((product) => (
          <div className="col-6 col-md-4 col-lg-3" key={product.id}>
            <div className="product-item">
              <div className="product-image">
                <Link to={`/cua-hang/${product.id}`}>
                  <img src={product.images[0]} alt={product.name} />
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
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={products.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
