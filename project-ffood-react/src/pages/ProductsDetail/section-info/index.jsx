import React from "react";
import info from "../../../image/products/fried-chicken-with-french-fries-nuggets-meal_1339-78221.webp";

const Info = () => {
  return (
    <div id="detail-info">
      <div className="detail-info-container">
        <div className="detail-info-heading">
          <h3>MÔ TẢ</h3>
          <div className="detail-info-line"></div>
        </div>
        <p className="text-top">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum..
        </p>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="detail-info-image">
              <img
                src={info}
                alt="fried-chicken-with-french-fries-nuggets-meal"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <h4>Thương hiệu</h4>
            <div></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="deatail-info-icon">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-pinterest"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
