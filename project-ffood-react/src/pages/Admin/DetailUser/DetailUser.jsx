import React, { useEffect, useState } from "react";
import "./DetailUser.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUsersById } from "../../../redux/signupSlice";
import upLoadImage from "../../../services/upLoadImage";
import { toast } from "react-toastify";

const DetailUser = () => {
  const [image, setImage] = useState("");

  const { userId } = useParams();
  const user = useSelector((state) => state.users.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  console.log(user.image);

  const handleEditUser = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [`http://103.237.147.34:8888${resImageUrl}`];
    let newUser = {
      id: userId,
      image: imageUrl,
      name: name,
      email: email,
      phone: phone,
      password: password,
      address: address,
    };

    if ((name, email, password, address, phone)) {
      dispatch(editUser(newUser));
      toast.success("Thay đổi thành công");
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");
      toast.error("Vui lòng điền đủ các trường");
    }
  };

  console.log(user.image);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersById(userId));
  }, []);

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h3 className="title">Sửa tài khoản</h3>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={image ? URL.createObjectURL(image) : user.image}
              alt="dgdfgd"
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
                  value={name}
                  placeholder={user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  value={phone}
                  placeholder={user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  value={password}
                  placeholder={user.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  value={address}
                  placeholder={user.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <button onClick={handleEditUser}>Sửa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
