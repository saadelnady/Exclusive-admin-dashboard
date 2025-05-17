import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { toast } from "react-toastify";

import { initialValues, validate } from "../Validation/loginValidation.js";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../store/actions/admin/adminActions.js";
import Loading from "../Shared/Loading.jsx";

import styles from "./styles/styles.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { useForm } from "react-hook-form";
const Index = () => {
  const { isLoading } = useSelector((state) => state.adminReducer);
  const { locale } = useSelector((state) => state.localeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = useState(false);

  const handleLogin = (values) => {
    const payload = { values, toast, navigate, locale };
    dispatch(adminLogin(payload));
  };

  return (
    <div className={styles.login}>
      <div className="inner">
        <h1 className="title">
          <FormattedMessage id="wellcome" />
        </h1>
        <p className="sub-title">
          <FormattedMessage id="login-text" />
        </p>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-5">
          {/* Email Field */}
          <input
            type="email"
            autoComplete="email"
            placeholder={formatMessage({ id: "email" })}
            className="form-control mb-4 fs-4 special-input"
            {...register("email", {
              required: formatMessage({ id: "required" }),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: formatMessage({ id: "invalid-email" }),
              },
            })}
          />
          {errors.email && (
            <p className="text-danger fs-5">{errors.email.message}</p>
          )}

          {/* Password Field */}
          <div className="position-relative">
            <input
              type={visible ? "text" : "password"}
              autoComplete="current-password"
              placeholder={formatMessage({ id: "password" })}
              className="form-control my-3 fs-4 special-input"
              {...register("password", {
                required: formatMessage({ id: "required" }),
              })}
            />
            {visible ? (
              <IoEyeOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => setVisible(!visible)}
              />
            ) : (
              <IoEyeOffOutline
                className="eyeIcon position-absolute fs-3 top-50 pointer translate-middle-y"
                onClick={() => setVisible(!visible)}
              />
            )}
          </div>
          {errors.password && (
            <p className="text-danger fs-5">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn p-2 fs-4 submit d-flex justify-content-between align-items-center"
              type="submit"
            >
              {isLoading ? <Loading /> : <FormattedMessage id="enter" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Index;
