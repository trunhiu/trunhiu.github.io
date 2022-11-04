import React from "react";

const Filter = () => {
  return (
    <div className="col-lg-3">
      <div className="fillter-overlay"></div>
      <div className="fillter">
        <div className="fillter-title">
          <div></div>
          <p>Các sản phẩm</p>
        </div>
        <div className="fillter-categorys">
          <div>
            <input
              type="checkbox"
              id="checkbox1"
              value="Đồ ăn nhanh"
              className="checkbox-category"
            />
            <label htmlFor="checkbox1">Đồ ăn nhanh</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox2"
              value="Đồ uống"
              className="checkbox-category"
            />
            <label htmlFor="checkbox2">Đồ uống</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox3"
              value="Sinh tố"
              className="checkbox-category"
            />
            <label htmlFor="checkbox3">Sinh tố</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox4"
              value="Combo"
              className="checkbox-category"
            />
            <label htmlFor="checkbox4">Combo</label>
          </div>
        </div>
        <div className="fillter-title">
          <div></div>
          <p>Giá</p>
        </div>
        <form className="fillter-prices">
          <div>
            <input
              type="checkbox"
              name="price"
              value="100000"
              className="price-radio"
              id="price"
            />
            <label htmlFor="price">10.000đ - 50.000đ</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="price"
              className="price-radio"
              value="250000"
              id="price2"
            />
            <label htmlFor="price2">50.000đ - 100.000đ</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="price"
              className="price-radio"
              value="500.000"
              id="price3"
            />
            <label htmlFor="price3">100.000đ - 150.000đ</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="price"
              className="price-radio"
              value="800000"
              id="price4"
            />
            <label htmlFor="price4">150.000đ - 200.000đ</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="price"
              className="price-radio"
              value="800000"
              id="price5"
            />
            <label htmlFor="price5">200.000đ - 250.000</label>
          </div>
        </form>
        <div className="fillter-title">
          <div></div>
          <p>Các thẻ</p>
        </div>
        <div className="fillter-tags">
          <div>
            <input
              type="checkbox"
              id="checkbox5"
              value="Burger"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox5">Burger</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox6"
              value="Đồ uống"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox6">Đồ uống</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox7"
              value="Combo"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox7">Combo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox8"
              value="Sinh tố"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox8">Sinh tố</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox9"
              value="Pasta"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox9">Pasta</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox0"
              value="Sandwich"
              className="checkbox-tags"
            />
            <label htmlFor="checkbox0">Sandwich</label>
          </div>
        </div>
        <div className="fillter-title">
          <div></div>
          <p>Thương hiệu</p>
        </div>
        <p>FFood - Fast Food & Trunhiiu Restaurant</p>
      </div>
    </div>
  );
};

export default Filter;
