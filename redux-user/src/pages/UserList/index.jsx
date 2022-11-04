import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions/usersAction";
import { useState } from "react";

const UserList = () => {
  const [term, setTerm] = useState("");

  const users = useSelector((state) => state.users);
  const [usersView, setUsersview] = useState(users);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsersview(users);
  }, [users]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSearch = (e) => {
    console.log(term);
    let user = users.filter((u) =>
      u.name.toLowerCase().includes(term.toLowerCase())
    );
    setUsersview(user);
  };
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase">Danh sách user</h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
            <Link to="create" className="btn btn-warning">
              Tạo user
            </Link>
            <input
              type="text"
              id="search"
              className="form-control w-50"
              placeholder="Tìm kiếm user"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>

          <div className="bg-light p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {usersView.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <Link to="./detail.html?id=2" className="btn btn-success">
                        Xem chi tiết
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="message d-none"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
