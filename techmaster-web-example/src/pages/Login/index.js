import React, { useContext, useState } from "react";
import Context from "context/Context";
import { useNavigate } from "react-router-dom";
import { login } from "store/actions";

function Login() {
  const navigate = useNavigate();
  const { users, dispatchAuth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //Kiểm tra user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      alert("Email hoac password khong chinh xac");
      return;
    }

    // Lưu lại thông tin user đã đăng nhập thành công
    dispatchAuth(login(user));
    navigate("/");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center fs-4 mb-5">Login</h1>
        <div className="modal-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="user-email"
              placeholder="Nhập Email ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="user-password"
              placeholder="Nhập Password ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              id="btn-login"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
