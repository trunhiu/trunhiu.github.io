import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./profile.scss";

const Profile = () => {
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));

  const [image, setImage] = useState("");

  const [name, setName] = useState(userLocal.name);
  const [phone, setPhone] = useState(userLocal.phone);
  const [address, setAddress] = useState(userLocal.address);

  console.log(name);

  console.log(userLocal);

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-light p-4">
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
                    <CreateIcon />
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
            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                id="btn-save"
                //   onClick={handleUpdateProfile}
              >
                Cập nhật thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
