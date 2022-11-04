import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("customer");
  };
  return (
    <>
      <h1>Dashboard</h1>

      <button onClick={handleChangePage} className="btn btn-success">
        Go to Customers
      </button>

      <button className="btn btn-danger me-2" onClick={() => navigate(-1)}>
        Quay lại 1 page
      </button>
      <button className="btn btn-danger me-2" onClick={() => navigate(-2)}>
        Quay lại 2 page
      </button>
      <button className="btn btn-danger me-2" onClick={() => navigate(1)}>
        Đi tới 1 page
      </button>
      <button className="btn btn-danger me-2" onClick={() => navigate(2)}>
        Đi tới 2 page
      </button>
    </>
  );
}

export default Dashboard;
