import React from "react";
import "./new.css";
import new1 from "../../../image/instagram/instagram4.webp";
import new2 from "../../../image/blogs/blog-4_1024x1024.webp";

const New = () => {
  return (
    <div id="news">
      <div className="products-title">
        <h2>Tin tức</h2>
        <div></div>
      </div>
      <div className="news-container">
        <div className="news-item">
          <div className="row item1">
            <div className="col-12 col-md-5">
              <div className="news-info">
                <h3>Top 10 địa điểm bán Hamburger ngon nhất tại Sài Gòn</h3>
                <p>
                  Bánh Hamburger là món ăn nhanh được ưa chuộng của người dân
                  phương Tây cách đây khá lâu. Nó được sử dụng cho bữa sáng, kèm
                  với một ly sữa nóng. Hamburger xuất hiện ở Việt Nam từ khi ẩm
                  thực phương Tây tràn vào nước ta, và hiện nay đây vẫn là món
                  bánh được ưa chuộng không chỉ ...
                </p>
                <a href="page/bai-viet-1.html" className="btn-4">
                  XEM THÊM
                </a>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="news-image">
                <a href="page/bai-viet-1.html">
                  <img src={new1} alt="news1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="news-item">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="news-image">
                <a href="page/bai-viet-3.html">
                  <img src={new2} alt="news2" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="news-info">
                <h3>
                  Hãng đồ ăn nhanh đề nghị gắn tên với CLB lừng danh của Nga
                </h3>
                <p>
                  “Đội bóng hàng đầu của Nga, Zenit St Petersburg, được cho là
                  mới nhận được một bức thư đề nghị hợp tác tài trợ từ hãng đồ
                  ăn nhanh của Mỹ. Nếu đồng ý với khoản đầu tư 7,6 triệu đôla,
                  CLB sẽ đổi tên thành Zenit Burger King”, tờ Sun đưa tin hôm
                  2/9...
                </p>
                <a href="page/bai-viet-3.html" className="btn-4">
                  XEM THÊM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
