import React from "react";

import Slider from "react-slick";

const DetailSlick = (props) => {
  const { images } = props.product;
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="col-12 col-lg-6">
        <div className="detail-slider">
          <div className="row">
            <div className="col-12">
              <div className="detail-slider-item">
                <Slider {...settings}>
                  {images.map((img, index) => (
                    <div className="detail-slider-image" key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSlick;
