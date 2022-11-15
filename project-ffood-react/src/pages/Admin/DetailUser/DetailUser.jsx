import React, { useState } from "react";
import "./DetailUser.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const DetailUser = () => {
  const [image, setImage] = useState("");

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Sửa tài khoản</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <UploadFileIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="formInput">
                <label>Tên</label>
                <input type="text" placeholder="Joe Doe" />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="buihieu3008gmail.com" />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input type="text" placeholder="2323435345" />
              </div>
              <div className="formInput">
                <label>password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input type="text" placeholder="Ha noi" />
              </div>

              <button>Sửa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
