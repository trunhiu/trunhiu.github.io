import React, { useState } from "react";
import "./DetailBlog.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const DetailUser = () => {
  const [image, setImage] = useState("");

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Sửa bài viết</h3>
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
                <label>Tiêu đề</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Tag</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Mô tả chi tiết</label>
                <input type="text" />
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
