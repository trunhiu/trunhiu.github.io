import React, { useState } from "react";
import "./New.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch } from "react-redux";
import upLoadImage from "../../../services/upLoadImage";
import { postDataUsers } from "../../../redux/signupSlice";
import { toast } from "react-toastify";

const Create = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleAddUser = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [`http://103.237.147.34:8888${resImageUrl}`];

    let newU = {
      image: imageUrl,
      name: name,
      email: email,
      phone: phone,
      password: password,
      address: address,
    };
    if ((name, email, password, phone, address)) {
      dispatch(postDataUsers(newU));
      toast.success("Tạo tài khoản thành công");
    } else {
      toast.error("Vui lòng điền đủ các ô");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Tạo tài khoản</h3>
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
                <label>Tên</label>
                <input
                  type="text"
                  placeholder="Joe Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="buihieu3008gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  placeholder="2323435345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Ha noi"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button onClick={handleAddUser}>Tạo mới </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
