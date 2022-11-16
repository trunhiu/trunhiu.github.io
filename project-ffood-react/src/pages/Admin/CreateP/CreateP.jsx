import React, { useState } from "react";
import "./CreateP.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/productsSlice";
import upLoadImage from "../../../services/upLoadImage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [inputProduct, setInputProduct] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputCategory, setInputCategory] = useState("");

  const handleAddproduct = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
    ];
    console.log(resImageUrl);
    let newP = {
      images: imageUrl,
      name: inputProduct,
      price: inputPrice,
      tag: inputTag,
      category: inputCategory,
      count: 1,
      description: inputDes,
    };
    if ((inputProduct, inputPrice, inputTag, inputCategory, inputDes)) {
      dispatch(addNewProduct(newP));
      toast.success("Tạo sản phẩm thành công");
    } else {
      toast.error("Vui lòng nhập đủ các ô");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Tạo sản phẩm </h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg"
              }
              alt="img"
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
                <label>Tên Sản phẩm</label>
                <input
                  type="text"
                  value={inputProduct}
                  onChange={(e) => setInputProduct(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Giá sản phẩm</label>
                <input
                  type="text"
                  value={inputPrice}
                  onChange={(e) => setInputPrice(e.target.value)}
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
                <label>Category</label>
                <input
                  type="text"
                  value={inputCategory}
                  onChange={(e) => setInputCategory(e.target.value)}
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

              <button onClick={handleAddproduct}>Thêm sản phẩm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateP;
