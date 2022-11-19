import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./profile.scss";
import upLoadImage from "../../services/upLoadImage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editProfile } from "../../redux/signupSlice";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));

  const [image, setImage] = useState("");

  const [name, setName] = useState(userLocal.name);
  const [phone, setPhone] = useState(userLocal.phone);
  const [address, setAddress] = useState(userLocal.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [`http://103.237.147.34:8888${resImageUrl}`];

    let newProfile = {
      id: userLocal.id,
      image: imageUrl,
      name: name,
      email: userLocal.email,
      phone: phone,
      address: address,
    };
    if ((name, phone, address)) {
      dispatch(editProfile(newProfile));
      toast.success("Thay đổi thông tin thành công");
      localStorage.setItem("userLocal", JSON.stringify(newProfile));
    } else {
      toast.error("Vui lòng điền đủ các ô");
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>
        <div className="bg-light p-4">
          <KeyboardReturnIcon className="icon" onClick={handleClick} />

          <div className="mb-3">
            <label className="form-label">Avatar</label>
            <div className="avatar-preview mb-3 rounded">
              <img
                src={image ? URL.createObjectURL(image) : userLocal.image}
                alt={userLocal.name}
                id="avatar-preview"
                className="rounded"
              />
              <label htmlFor="file">
                <CreateIcon className="icon-edit" />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              defaultValue={userLocal.email}
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Phone</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Address</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className=" mt-3">
          <button className="btn" id="btn-save" onClick={handleUpdateProfile}>
            Cập nhật thông tin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
