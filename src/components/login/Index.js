import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { toast } from "react-toastify";

import { initialValues, validate } from "../Validation/loginValidation.js";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/actions/user/userActions.js";
import Loading from "../Shared/Loading.jsx";
import ErrorMessage from "../Shared/ErrorMessage.jsx";

import styles from "./styles/styles.module.scss";
const Index = () => {
  const { isLoading } = useSelector((state) => state.userReducer);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleLogin(values);
    },
    validate,
  });

  const handleLogin = (values) => {
    const payload = { values, toast, navigate };
    dispatch(userLogin(payload));
  };

  return (
    <div className={styles.login}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className="inner">
        <h1 className="fs-1"> أهلا بعودتك </h1>
        <p className="fs-5 fw-normal mt-4">تسجيل الدخول</p>
        <form onSubmit={formik.handleSubmit} className="mt-5">
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            autoComplete="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="E-mail"
            className="form-control mb-4 fs-4 special-input"
          />
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="email"
          />
          <div className="position-relative">
            <input
              type={visible ? "password" : "text"}
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="form-control my-3 fs-4 special-input"
            />
            {visible ? (
              <IoEyeOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            ) : (
              <IoEyeOffOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            )}
          </div>
          <ErrorMessage
            touched={formik.touched}
            errors={formik.errors}
            fieldName="password"
          />

          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn p-2 fs-4 submit d-flex justify-content-between align-items-center"
              type="sbmit"
            >
              {isLoading ? <Loading /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Index;
