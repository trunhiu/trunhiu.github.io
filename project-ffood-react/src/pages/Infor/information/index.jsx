import React from "react";
import photo1 from "../../../image/instagram/instagram4.webp";
import photo2 from "../../../image/blogs/blog-2_1024x1024.webp";

const Information = () => {
  return (
    <div id="info">
      <div className="info-container">
        <div className="info-main">
          <h2>Giới thiệu</h2>
          <ul>
            <li>
              Chào các bạn chúng tôi xin được giới thiệu 1 chút về cửa hàng.
              FFOOD chúng tôi là một chuỗi cửa hàng ở khắp các tỉnh thành trên
              Việt Nam.
            </li>
            <li>
              Nhịp sống đô thị càng ngày càng phát triển kèm theo đó con người
              càng ngày càng bận rộn vì thấu hiểu được điều đó nên chúng tôi mở
              ra chuỗi cửa hàng FFOOD để phục vụ mọi người.
            </li>
            <li>
              Từ lúc thành lập đến nay công ty chúng tôi đã hoạt động được 25
              năm và bắt đầu kinh doanh online được 5 năm gần đây.
            </li>
            <li>
              Đội ngũ nhân viên, giao hàng của mỗi chi nhánh trung bình khoảng
              100 người và chúng tôi chắc chắn đội ngũ giao hàng của chúng tôi
              là nhanh nhất.
            </li>
            <li>
              Trụ sở chính: HH4C, Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội.
            </li>
            <li>Số điện thoại: 012345678.</li>
            <li>
              Trang fanpage của FFOOD:
              https://www.facebook.com/playboj.hoangmike/
            </li>
            <li>Instagram: https://www.instagram.com/trunhiu_bbb/</li>
          </ul>
          <div className="info-image-first">
            <img src={photo1} alt="burger" />
          </div>
          <ul>
            <li>
              Chào các bạn chúng tôi xin được giới thiệu 1 chút về cửa hàng.
              FFOOD chúng tôi là một chuỗi cửa hàng ở khắp các tỉnh thành trên
              Việt Nam.
            </li>
            <li>
              Nhịp sống đô thị càng ngày càng phát triển kèm theo đó con người
              càng ngày càng bận rộn vì thấu hiểu được điều đó nên chúng tôi mở
              ra chuỗi cửa hàng FFOOD để phục vụ mọi người.
            </li>
            <li>
              Từ lúc thành lập đến nay công ty chúng tôi đã hoạt động được 25
              năm và bắt đầu kinh doanh online được 5 năm gần đây.
            </li>
            <li>
              Đội ngũ nhân viên, giao hàng của mỗi chi nhánh trung bình khoảng
              100 người và chúng tôi chắc chắn đội ngũ giao hàng của chúng tôi
              là nhanh nhất.
            </li>
            <li>
              Trụ sở chính: HH4C, Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội.
            </li>
            <li>Số điện thoại: 012345678.</li>
            <li>
              Trang fanpage của FFOOD:
              https://www.facebook.com/playboj.hoangmike/
            </li>
            <li>Instagram: https://www.instagram.com/trunhiu_bbb/</li>
          </ul>
          <div className="info-image-second">
            <img src={photo2} alt="fried" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
