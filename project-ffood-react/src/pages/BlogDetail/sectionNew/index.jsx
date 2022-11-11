import React from "react";

const BlogNew = (props) => {
  const { blogs } = props;
  return (
    <div id="new">
      <div className="new-container">
        <div className="new-image">
          <img src={blogs.image} alt="news1" />
        </div>
        <div className="new-info">
          <h2>{blogs.name}</h2>
          <div className="new-info-icon">
            <div className="icon-user">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <p>Trung hiếu</p>
            </div>
            <div className="icon-comment">
              <span>
                <i className="fa-solid fa-comment"></i>
              </span>
              <p>0 bình luận</p>
            </div>
          </div>
          <p className="new-info-text-top">
            Bánh Hamburger là món ăn nhanh được ưa chuộng của người dân phương
            Tây cách đây khá lâu. Nó được sử dụng cho bữa sáng, kèm với một ly
            sữa nóng. Hamburger xuất hiện ở Việt Nam từ khi ẩm thực phương Tây
            tràn vào nước ta, và hiện nay đây vẫn là món bánh được ưa chuộng
            không chỉ với các em nhỏ, mà kể cả đối với dân văn phòng hay công
            chức thì đây vẫn là một món ăn phù hợp bởi nó không những ngon miệng
            mà còn tiện lợi. Dưới đây là những cửa hàng bán bánh Hamburger nổi
            tiếng ở Sài Gòn mà bạn nên đến thử một lần cho biết.
          </p>
          <h3>Top 10 địa điểm bán Hamburger ngon nhất tại Sài Gòn</h3>
          <div className="new-text">
            <div className="new-bold">Soul Burger</div>
            <p>
              Soul Burger là một thương hiệu hamburger chuẩn châu Âu rất nổi
              tiếng trong giới sành ăn tại TP.HCM. Với thực đơn phong phú bao
              gồm hàng loạt phiên bản – từ truyền thống, biến tấu cho đến dành
              riêng cho thực khách ăn chay – Soul Burger dường như có thể tự tin
              ‘chiều lòng’ bất kỳ ai.
            </p>
          </div>
          <div className="new-text">
            <div className="new-bold">Sandwich - Hamburger Chía Núi</div>
            <p>
              Sandwich - Hamburger Chía Núi cũng là một thương hiệu có món bánh
              hamburger thơm ngon khó cưỡng rất được lòng tín đồ ẩm thực tại
              TP.HCM. Thương hiệu này có nhiều chi nhánh để phục vụ thực khách.
              Dù chỉ bán mang về nhưng bánh hamburger của địa điểm này luôn nằm
              trong những lựa chọn ưu tiên của khách hàng. Thực đơn đa dạng với
              nhiều loại nhân từ thịt bò, trứng, tôm, thập cẩm,... với mức giá
              phù hợp với chất lượng.
            </p>
          </div>
          <div className="new-text">
            <div className="new-bold">Bmao Hamburger & Hotdog</div>
            <p>
              Bmao Hamburger & Hotdog cũng là một quán ăn phục vụ chủ yếu là các
              loại Hamburger, Hotdog với mức giá khá phải chăng. Điểm đặc biệt
              của quán chính là ngoài cỡ bánh thông thường, Bmao Hamburger &
              Hotdog còn có hamburger 2 tầng, 3 tầng để khách hàng thưởng thức
              thả ga. Hamburger Bò Trứng & Phômai Úc là loại bán rất chạy của
              quán, với lớp phô mai béo ngậy kết hợp với thịt bò lát dày đậm vị,
              trứng ốp la và rau tươi.
            </p>
          </div>
          <div className="new-text">
            <div className="new-bold">KFC</div>
            <p>
              Là chuỗi nhà hàng ăn nhanh lớn thứ hai trên thế giới với gần 20000
              nhà hàng tại 123 quốc gia trên thế giới, KFC luôn mang đến cho
              khách hàng những món ăn ngon theo đúng nghĩa. Chuỗi cửa hàng này
              đã có mặt tại Việt Nam và rải khắp các tỉnh thành trên cả nước.
              KFC tại Sài Gòn luôn có những thay đổi cho phù hợp với yêu cầu của
              khách trẻ. Không chỉ nổi bật với món gà rán, KFC Sài Gòn còn gây
              ấn tượng với món bánh Hamburger ngon và đa dạng về nhân bánh, luôn
              có sự thay đổi các loại bánh Burger khác nhau thỏa sức cho khách
              hàng lựa chọn.
            </p>
          </div>
          <div className="new-text">
            <div className="new-bold">Burger King</div>
            <p>
              Nhắc đến Burger King, có lẽ nhiều người trong chúng ta cảm thấy
              quá đỗi quen thuộc, bởi thương hiệu này có mặt ở hầu hết các trung
              tâm thương mại lớn khắp trong Nam, ngoài Bắc. Đó là nơi tập trung
              đông đảo thực khách mọi lứa tuổi, mọi công việc. Sở dĩ Burger King
              được nhiều người biết đến là do các đồ ăn nhanh ở đây đều được chế
              biến cẩn thận và vô cùng đẹp mắt bởi các đầu bếp chuyên nghiệp.
              Đến với Burger King, quý khách hàng không thể bỏ qua món ăn quen
              thuộc: Bánh Hamburger: Burger Whopper, Burger gà, Burger bò,
              Double Whopper.
            </p>
          </div>
          <div className="new-text">
            <div className="new-bold">McDonal's</div>
            <p>
              McDonal's là một hãng đồ ăn nhanh nổi tiếng thế giới, song hành
              tồn tại cùng Lotteria, KFC và có ảnh hưởng đến đông đảo người dân
              trên toàn thế giới. Các thương hiệu nổi tiếng này luôn cạnh tranh
              nhau về chất lượng sản phẩm và thái độ phục vụ khách hàng. Sau
              nhiều năm hoạt động trên thị trường ẩm thực toàn cầu, McDonal's
              được biết đến như một thương hiệu nổi tiếng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNew;
