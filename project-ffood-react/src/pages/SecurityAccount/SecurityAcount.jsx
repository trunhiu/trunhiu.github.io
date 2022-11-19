import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { editProfile } from "../../redux/signupSlice";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const SecurityAcount = () => {
  const userLocal = JSON.parse(localStorage.getItem("userLocal"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = () => {
    if (password !== userLocal.password) {
      toast.warning("Mật khẩu cũ khônng trùng khớp");
      return;
    }
    if (newPassword === password) {
      toast.warning("Mật khẩu mới và cũ không được trùng nhau");
      return;
    }
    if (confirmPassword !== newPassword) {
      toast.warning("Mật khẩu mới và comfirm không giống nhau");
      return;
    }
    let newP = {
      id: userLocal.id,
      password: newPassword,
    };
    if ((password, newPassword, confirmPassword)) {
      toast.success("Đổi mật khẩu thành công!");
      dispatch(editProfile(newP));
      localStorage.removeItem("userLocal");
      navigate("/login");
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.error("Vui lòng điền các trường");
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Bảo mật tài khoản</h1>
        <div className="row">
          <div className="">
            <div className="bg-light p-4">
              <KeyboardReturnIcon className="icon" onClick={handleClick} />
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu cũ</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu mới</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">
                  Xác nhận lại mật khẩu mới
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                id="btn-save"
                onClick={handleUpdatePassword}
              >
                Cập nhật mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAcount;
