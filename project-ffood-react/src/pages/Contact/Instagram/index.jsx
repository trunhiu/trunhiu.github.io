import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instagram1 from "../../../image/instagram/instagram3.webp";
import instagram2 from "../../../image/instagram/instagram4.webp";
import instagram3 from "../../../image/instagram/instagram5.webp";
import instagram4 from "../../../image/instagram/instagram6.webp";
import instagram5 from "../../../image/instagram/instagram7.webp";
import instagram6 from "../../../image/instagram/instagram1.webp";
import instagram7 from "../../../image/instagram/instagram2.webp";
import logo from "../../../image/instagram/938790b17acb5b3b8236d65ce8c4fc45.jpg";

const Instagram = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div id="instagram">
      <div className="instagram-slider">
        <Slider {...settings}>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram1} alt="instagram 1" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram2} alt="instagram 2" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram3} alt="instagram 3" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram4} alt="instagram 4" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram5} alt="instagram 5" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram6} alt="instagram 6" />
            </a>
          </div>
          <div className="instagram-image">
            <a href="https://www.instagram.com/">
              <img src={instagram7} alt="instagram 7" />
            </a>
          </div>
        </Slider>
      </div>
      <div className="instagram-flus">
        <div className="instagram-flus-image">
          <img src={logo} alt="" />
        </div>
        <p>Follow Us On Instagram</p>
      </div>
    </div>
  );
};

export default Instagram;
