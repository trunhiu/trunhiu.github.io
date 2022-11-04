import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import OrderDetails from "./components/OrderDetails";
import Login from "./components/Login";
import PrivateRoutes from "./components/private/PrivateRoutes";
import Users from "./components/private/Users";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10 p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order">
              <Route index element={<Orders />} />
              <Route path=":orderID" element={<OrderDetails />} />
            </Route>
            <Route path="/customer" element={<Customers />} />
            <Route path="/products" element={<Products />}>
              <Route path="laptop" element={<Laptop />} />
              <Route path="desktop" element={<Desktop />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
