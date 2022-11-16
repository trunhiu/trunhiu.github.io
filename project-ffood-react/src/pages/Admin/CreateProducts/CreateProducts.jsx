import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CreateProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsRow = useSelector((state) => state.products.products);

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleDelete = (id) => {};

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "img",
      headerName: "Ảnh sản phẩm",
      width: 200,
      renderCell: (params) => {
        return (
          <img
            src={params.row.images[0]}
            alt={params.row.name}
            className="cellImage"
          />
        );
      },
    },
    { field: "name", headerName: "Tên sản phẩm", width: 250 },
    { field: "price", headerName: "Giá sản phẩm", width: 200 },
    { field: "description", headerName: "Mô tả chi tiết sản phẩm", width: 300 },
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
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xoá
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="createProducts">
      <div className="top">
        <h2>Danh sách sản phẩm</h2>
        <Link to="createP">
          <p>Thêm sản phẩm</p>
        </Link>
      </div>
      <DataGrid
        rows={productsRow}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default CreateUser;
