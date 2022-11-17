import "./login.css";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/signupSlice";
import { isEmpty } from "../../utils/utils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(true);
  const isLogin = useSelector((state) => state.users.isLogin);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checked: isCheck,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng điền địa chỉ email hợp lệ"
        ),
    }),

    onSubmit: (values, { resetForm }) => {
      dispatch(login(values, isCheck));

      if (!!isLogin === true) {
        return navigate("/");
      }
    },
  });

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <>
      <div className="login-form">
        <form className="infoform" onSubmit={formik.handleSubmit}>
          <div className="signup-title">Đăng nhập</div>
          <label className="label-signup"> Email </label>
          <input
            className="input-signup"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Vui lòng điền email..."
          />
          {formik.errors.email && (
            <p className="errorMsg">{formik.errors.email}</p>
          )}

          <label className="label-signup"> Mật khẩu </label>
          <input
            className="input-signup"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Mật khẩu của bạn..."
          />
          {formik.errors.password && (
            <p className="errorMsg">{formik.errors.password}</p>
          )}
          <label>
            <input
              type="checkbox"
              className="input-checkbox"
              value={isCheck}
              onChange={(e) => setIsCheck(!isCheck)}
            />
            Ghi nhớ mật khẩu.
          </label>
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
          <button type="submit" className="btn-su">
            <Link to="/signup">Chưa có tài khoản đăng ký ngay</Link>
          </button>
          <button type="submit" className="btn-home">
            <Link to="/">Quay lại trang chủ</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
