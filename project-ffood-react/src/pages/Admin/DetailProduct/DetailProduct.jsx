import React, { useEffect, useState } from "react";
import "./DetailProduct.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, fetchProductsById } from "../../../redux/productsSlice";
import upLoadImage from "../../../services/upLoadImage";
import { isEmpty } from "../../../utils/utils";
import { toast } from "react-toastify";

const DetailProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchProductsById(productId));
  }, []);

  const handleEditProduct = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
    ];
    let newProduct = {
      images: imageUrl,
      id: productId,
      name: name,
      price: Number(price),
      category: category,
      tag: tag,
      description: description,
    };
    toast.success("Thay đổi thành công");
    dispatch(editProduct(newProduct));
  };

  if (isEmpty(product)) {
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Tạo tài khoản</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={image ? URL.createObjectURL(image) : product.images[0]}
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
                <label>Tên Sản phẩm</label>
                <input
                  type="text"
                  placeholder={product.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Giá sản phẩm</label>
                <input
                  type="text"
                  placeholder={product.price}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Category</label>
                <input
                  type="text"
                  placeholder={product.category}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tag</label>
                <input
                  type="text"
                  placeholder={product.tag}
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Mô tả chi tiết</label>
                <input
                  type="text"
                  placeholder={product.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button onClick={handleEditProduct}>Sửa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
