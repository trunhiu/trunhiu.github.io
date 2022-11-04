import React from "react";
import ProductItem from "../ProductItem";
import Context from "../../Context/Contex";
import { useContext } from "react";

const ProductList = (props) => {
  const { lists, dispatch } = useContext(Context);
  return (
    <div className="col-md-8">
      <div className="product-list">
        {lists.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            size={product.size}
            count={product.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
