import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CreateProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const productsRow = useSelector((state) => state.products.products);
  console.log(productsRow);

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
