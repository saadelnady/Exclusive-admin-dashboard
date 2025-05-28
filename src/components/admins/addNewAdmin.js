import React, { useState } from "react";
import styles from "./styles/styles.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

import IcError from "./assets/images/svgs/ic-error.svg";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postAddAdmin } from "@/store/actions/admin/adminActions";
import UploadImg from "../Shared/uploadImg/Index";
import { postData } from "@/API/API";

const addNewAdmin = () => {
  const [selectedImg, setSelectedImg] = useState({
    file: null,
    preview: null,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locale, formatMessage } = useIntl();
  const onSubmit = async (data) => {
    data.image = selectedImg?.preview ? selectedImg?.preview : null;
    dispatch(postAddAdmin({ data, toast, navigate, locale }));
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("files", file);

    try {
      const uploadImgResponse = await postData("/api/upload", formData);

      setSelectedImg({ file, preview: uploadImgResponse?.files?.[0]?.url });
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleRemoveImg = () => {
    if (selectedImg?.preview || selectedImg?.file) {
      setSelectedImg({ file: null, preview: null });
    }
  };
  return (
    <div className={`page ${styles.addNewAdmin}`}>
      <div className="page-header">
        <div className="text">
          <h4 className="page-title">
            <FormattedMessage id="addNewAdmin" />
          </h4>
          <p className="page-description">
            <FormattedMessage id="addNewAdminDescription" /> :
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <UploadImg
              handleImageChange={handleImageChange}
              selectedImg={selectedImg}
              handleRemoveImg={handleRemoveImg}
              register={register}
              errors={errors}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                {...register("firstName", {
                  required: formatMessage({ id: "required" }),
                  minLength: {
                    value: 3,
                    message: formatMessage({ id: "name-min-length" }),
                  },
                  maxLength: {
                    value: 20,
                    message: formatMessage({ id: "name-max-length" }),
                  },
                })}
                className="special-input"
                placeholder={intl.formatMessage({ id: "firstName" })}
              />
              {errors.firstName && (
                <p className="error">
                  <IcError />
                  {errors.firstName.message}
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                {...register("lastName", {
                  required: formatMessage({ id: "required" }),
                  minLength: {
                    value: 3,
                    message: formatMessage({ id: "name-min-length" }),
                  },
                  maxLength: {
                    value: 20,
                    message: formatMessage({ id: "name-max-length" }),
                  },
                })}
                className="special-input"
                placeholder={intl.formatMessage({ id: "lastName" })}
              />
              {errors.lastName && (
                <p className="error">
                  <IcError />
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                type="email"
                autoComplete="email"
                placeholder={formatMessage({ id: "email" })}
                className="special-input"
                {...register("email", {
                  required: formatMessage({ id: "required" }),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: formatMessage({ id: "invalid-email" }),
                  },
                })}
              />
              {errors.email && (
                <p className="error">
                  <IcError />
                  {errors.email.message}
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                {...register("mobilePhone", {
                  required: formatMessage({ id: "required" }),
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                    message: formatMessage({ id: "invalid-mobilePhone" }),
                  },
                })}
                className="special-input"
                placeholder={intl.formatMessage({ id: "mobilePhone" })}
              />
              {errors.mobilePhone && (
                <p className="error">
                  <IcError />
                  {errors.mobilePhone.message}
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                {...register("password", {
                  required: formatMessage({ id: "required" }),
                  pattern: {
                    value: /^.{9,25}$/,
                    message: formatMessage({
                      id: "password-length",
                    }),
                  },
                })}
                className="special-input"
                type="password"
                placeholder={intl.formatMessage({ id: "password" })}
              />
              {errors.password && (
                <p className="error">
                  <IcError />
                  {errors.password.message}
                </p>
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="input-wrapper">
              <input
                {...register("confirmPassword", {
                  required: formatMessage({ id: "required" }),
                  pattern: {
                    value: /^.{9,25}$/,
                    message: formatMessage({
                      id: "password-length",
                    }),
                  },
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) {
                      return formatMessage({ id: "password-not-match" });
                    }
                  },
                })}
                className="special-input"
                type="password"
                placeholder={intl.formatMessage({ id: "password" })}
              />
              {errors.confirmPassword && (
                <p className="error">
                  <IcError />
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </Col>
        </Row>

        <button type="submit" className="btn submit">
          {intl.formatMessage({ id: "add-admin" })}
        </button>
      </form>
    </div>
  );
};

export default addNewAdmin;
