import React, { useState } from "react";
import "./CreateB.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/productsSlice";

const CreateB = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [inputProduct, setInputProduct] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  const handleAddproduct = () => {
    let newP = {
      images: [image.name],
      name: inputProduct,
      price: inputPrice,
      tag: inputTag,
      category: inputCategory,
      count: 1,
      description: inputDes,
    };
    dispatch(addNewProduct(newP));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Tạo bài viết </h3>
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
            <form onSubmit={handleSubmit}>
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
                <label>Tiêu đề bài viết</label>
                <input
                  type="text"
                  value={inputProduct}
                  onChange={(e) => setInputProduct(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tag</label>
                <input
                  type="text"
                  value={inputDes}
                  onChange={(e) => setInputDes(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Mô tả chi tiết</label>
                <input
                  type="text"
                  value={inputTag}
                  onChange={(e) => setInputTag(e.target.value)}
                />
              </div>

              <button onClick={handleAddproduct}>Thêm bài viết</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateB;
