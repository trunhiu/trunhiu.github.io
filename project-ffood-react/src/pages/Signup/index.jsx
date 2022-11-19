import "./signup.css";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDataUsers } from "../../redux/signupSlice";
import { checkEmail } from "../../services/checkEmail";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      ROLES: "USER",
      address: "",
      image:
        "https://taytou.com/wp-content/uploads/2022/08/Avatar-mac-dinh-ngau-trang-den-cho-nam.jpg",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("").min(4, "Tên phải dài hơn 4 ký tự"),
      email: Yup.string()
        .required("")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng điền địa chỉ email hợp lệ"
        ),
      password: Yup.string()
        .required("")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải từ 7-9 ký tự có 1 số và 1 ký tự đặc biệt"
        ),
      confirmPassword: Yup.string()
        .required("")
        .oneOf([Yup.ref("password"), null], "Mật không giống nhau"),
      phone: Yup.string()
        .required("")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Số điện thoại không hợp lệ"
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      // resetForm({ values: "" });
      const resEmail = await checkEmail(values.email);
      console.log(!!resEmail.length);
      if (!!resEmail.length) {
        toast.warning("Email đã tồn tại vui lòng điền email khác.");
        return;
      }
      dispatch(postDataUsers(values));
      toast.success("Đăng ký thành công");
      navigate("/login");
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <div className="login-form">
        <form className="infoform" onSubmit={formik.handleSubmit}>
          <div className="signup-title">Đăng ký</div>
          <label className="label-signup"> Tên người dùng </label>
          <input
            className="input-signup"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Nhập tên của bạn..."
          />
          {formik.errors.name && (
            <p className="errorMsg">{formik.errors.name}</p>
          )}

          <label className="label-signup"> Email </label>
          <input
            className="input-signup"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Nhập email của bạn..."
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
            placeholder="Nhập mật khẩu..."
          />

          {formik.errors.password && (
            <p className="errorMsg">{formik.errors.password}</p>
          )}

          <label className="label-signup"> Nhập lại mật khẩu </label>
          <input
            className="input-signup"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Điền lại mật khẩu..."
          />
          {formik.errors.confirmPassword && (
            <p className="errorMsg">{formik.errors.confirmPassword}</p>
          )}
          <label className="label-signup"> Số điện thoại </label>
          <input
            className="input-signup"
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Nhập số điện thoại của bạn..."
          />
          {formik.errors.phone && (
            <p className="errorMsg">{formik.errors.phone}</p>
          )}
          <button type="submit" className="btn-signup">
            Đăng ký
          </button>
          <button type="submit" className="btn-lo">
            <Link to="/login">Quay lại trang đăng nhập</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
