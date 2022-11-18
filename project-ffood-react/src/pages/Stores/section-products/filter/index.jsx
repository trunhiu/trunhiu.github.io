import React, { useEffect, useState } from "react";
import querystring from "query-string";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../../redux/productsSlice";

const filterByCategory = [
  {
    id: 1,
    name: "Đồ ăn nhanh",
  },
  {
    id: 2,
    name: "Đồ uống",
  },
  {
    id: 3,
    name: "Sinh tố",
  },
  {
    id: 4,
    name: "Combo",
  },
];
const filterByPrice = [
  {
    id: 1,
    price: "50000 - 100000",
    min: 50000,
    max: 100000,
  },
  {
    id: 2,
    price: "100000 - 150000",
    min: 100000,
    max: 150000,
  },
  {
    id: 3,
    price: "150000 - 200000",
    min: 150000,
    max: 200000,
  },
  {
    id: 4,
    price: "200000 - 250000",
    min: 200000,
    max: 250000,
  },
  {
    id: 5,
    price: "250000 - 300000",
    min: 250000,
    max: 300000,
  },
];
const filterByTag = [
  {
    id: 1,
    name: "Burgers",
  },
  {
    id: 2,
    name: "Drink",
  },
  {
    id: 3,
    name: "Combos",
  },
  {
    id: 4,
    name: "Sinh Tố",
  },
  {
    id: 5,
    name: "Pasta",
  },
  {
    id: 6,
    name: "Sandwich",
  },
  {
    id: 7,
    name: "French Fries",
  },
  {
    id: 8,
    name: "Chicken",
  },
  {
    id: 9,
    name: "Pizza",
  },
  {
    id: 10,
    name: "Salat",
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    category: [],
    tag: [],
    price_gte: null,
    price_lte: null,
  });

  useEffect(() => {
    const query = querystring.stringify(filter, {
      skipNull: true,
    });
    dispatch(fetchProducts(query));
  }, [filter]);

  const handleChangeCategory = (value) => {
    let isExist = filter.category.includes(value);
    if (!isExist) {
      setFilter({ ...filter, category: [...filter.category, value] });
    } else {
      setFilter({
        ...filter,
        category: filter.category.filter((c) => c !== value),
      });
    }

    console.log(filter);
  };

  const handleChangePrice = (value) => {
    const priceSelect = filterByPrice.find((p) => p.price === value);
    setFilter({
      ...filter,
      price_gte: priceSelect.min,
      price_lte: priceSelect.max,
    });
  };

  const handleChangeTag = (value) => {
    let isExist = filter.tag.includes(value);
    if (!isExist) {
      setFilter({ ...filter, tag: [...filter.tag, value] });
    } else {
      setFilter({
        ...filter,
        tag: filter.tag.filter((t) => t !== value),
      });
    }
  };

  return (
    <div className="col-lg-3">
      <div className="fillter-overlay"></div>
      <div className="fillter">
        <div className="fillter-title">
          <div></div>
          <p>Các sản phẩm</p>
        </div>
        <div className="fillter-categorys">
          {filterByCategory.map((category) => (
            <div key={category.id}>
              <input
                type="checkbox"
                id={category.name}
                value={category.name}
                className="checkbox-category"
                onChange={(e) => handleChangeCategory(e.target.value)}
                checked={filter.category.includes(category.name)}
              />
              <label htmlFor={category.name}>{category.name}</label>
            </div>
          ))}
        </div>
        <div className="fillter-title">
          <div></div>
          <p>Giá</p>
        </div>
        <form className="fillter-prices">
          {filterByPrice.map((price) => (
            <div key={price.id}>
              <input
                type="radio"
                name="price"
                value={price.price}
                className="price-radio"
                id={price.price}
                onChange={(e) => handleChangePrice(e.target.value)}
              />
              <label htmlFor={price.price}>{price.price}</label>
            </div>
          ))}
        </form>
        <div className="fillter-title">
          <div></div>
          <p>Các thẻ</p>
        </div>
        <div className="fillter-tags">
          {filterByTag.map((Tag) => (
            <div key={Tag.id}>
              <input
                type="checkbox"
                id={Tag.name}
                value={Tag.name}
                className="checkbox-tags"
                onChange={(e) => handleChangeTag(e.target.value)}
                checked={filter.tag.includes(Tag.name)}
              />
              <label htmlFor={Tag.name}>{Tag.name}</label>
            </div>
          ))}
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
