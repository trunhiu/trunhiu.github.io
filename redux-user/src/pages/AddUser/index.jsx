import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/actions/usersAction";
import { useSelector } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    let addUser = {
      id: users.length + 1,
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    dispatch(addUsers(addUser));
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <select className="form-select" id="address"></select>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                type="text"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back">Quay lại</button>
            <button
              className="btn btn-success"
              id="btn-save"
              onClick={handleAddUser}
            >
              Tạo User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
