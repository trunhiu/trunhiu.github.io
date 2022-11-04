import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../../context/Context";
import "./products.css";
import DetailBreadcrumb from "./section-breadcrumb";
import DetailContent from "./section-detail-content";
import Info from "./section-info";
import Logo from "./section-logo";
import RelatedProducts from "./section-related";
import DetailSlick from "./section-slick";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useContext(Context);

  const product = products.find((p) => p.id === +productId);

  return (
    <>
      <DetailBreadcrumb />

      <div className="row">
        <DetailSlick product={product} />
        <DetailContent product={product} />
      </div>
      <Logo />
      <Info />
      <RelatedProducts />
    </>
  );
};

export default ProductDetail;
