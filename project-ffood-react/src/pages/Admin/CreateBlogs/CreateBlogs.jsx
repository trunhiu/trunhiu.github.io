import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CreateBlogs.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../../redux/blogsSlice";

const CreateBlogs = () => {
  const dispatch = useDispatch();
  const blogsRow = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
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
            src={params.row.image}
            alt={params.row.name}
            className="cellImage"
          />
        );
      },
    },
    { field: "name", headerName: "Tiêu đề", width: 350 },
    { field: "description", headerName: "Bài viết", width: 400 },
  ];

  return (
    <div className="createProducts">
      <div className="top">
        <h2>Danh sách bài viết</h2>
        <Link to="createB">
          <p>Thêm bài viết mới</p>
        </Link>
      </div>
      <DataGrid
        rows={blogsRow}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default CreateBlogs;
