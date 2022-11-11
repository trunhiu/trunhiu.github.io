import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./products.css";
import DetailBreadcrumb from "./section-breadcrumb";
import DetailContent from "./section-detail-content";
import Info from "./section-info";
import Logo from "./section-logo";
import DetailSlick from "./section-slick";
import { fetchProductsById } from "../../redux/productsSlice";
import { isEmpty } from "../../utils/utils";
import RelatedProducts from "./section-related";

const ProductDetail = () => {
  const { productId } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsById(productId));
  }, []);

  return (
    <>
      <DetailBreadcrumb />

      <div className="row">
        {!isEmpty(product) && (
          <>
            <DetailSlick product={product} />
            <DetailContent product={product} />
          </>
        )}
      </div>
      <Logo />
      <Info />
      <RelatedProducts product={product} />
    </>
  );
};

export default ProductDetail;
