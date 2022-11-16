import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CreateUser.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataUsers } from "../../../redux/signupSlice";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const usersRow = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchDataUsers());
  }, []);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "img",
      headerName: "Avatar",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <img src={params.row.image} alt="avata" className="cellAvatar" />
        );
      },
    },
    { field: "name", headerName: "Tên", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Số điện thoại", width: 150 },
    { field: "password", headerName: "Mật khẩu", width: 150 },
    {
      field: "action",
      headerName: "Xem/Sửa",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleEdit(params.row.id)}
            >
              Xem
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="createUser">
      <div className="top">
        <h2>Danh sách tài khoản</h2>
        <Link to="createU">
          <p>Thêm tài khoản</p>
        </Link>
      </div>
      <DataGrid
        rows={usersRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default CreateUser;
