import { getData, postData, putData } from "../../../API/API";

import { showToast } from "../../../helpers/toast_helper";

import * as actionCreators from "./adminActionsCreators";
// ========================================================================================

export const fetchAdminProfile = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getAdminProfile());
    try {
      const response = await getData(`/api/admin/getProfile`);
      dispatch(actionCreators.getAdminProfileSuccess(response?.data?.admin));
    } catch (error) {
      dispatch(actionCreators.getAdminProfileFail(error));
    }
  };
};
// ========================================================================================

export const adminLogin = ({ values, toast, navigate, locale }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postAdminLogin(values));
    try {
      const response = await postData(`/api/admin/login`, values);

      localStorage.setItem("TOKEN", response?.data?.token);
      dispatch(actionCreators.postAdminLoginSuccess(response?.data));
      showToast(toast, response?.message?.[locale], "success");
      dispatch(fetchAdminProfile());
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postAdminLoginFail(error));
      showToast(toast, error?.response?.data?.message?.[locale], "error");
    }
  };
};
// ========================================================================================

export const adminLogout = ({ toast, navigate, role }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postAdminLogout());

    try {
      dispatch(actionCreators.postAdminLogoutSuccess());
      localStorage.removeItem("TOKEN");
      showToast(toast, "You have logged out successfully", "success");

      setTimeout(() => {
        if (role === "ADMIN") {
          navigate("/login");
        }
        if (role === "USER") {
          navigate("/");
        }
      }, 2500);
    } catch (error) {
      dispatch(actionCreators.postAdminLogoutFail());
      showToast(toast, "Something wrong when logout", "error");
    }
  };
};
// ========================================================================================
export const adminRegister = ({ values, toast, navigate }) => {
  return async (dispatch) => {
    dispatch(actionCreators.postAdminRegister(values));

    try {
      const response = await postData("/api/admins/register", values);

      // localStorage.setItem("TOKEN", response?.data?.token);
      dispatch(actionCreators.postAdminRegisterSuccess(response));
      showToast(toast, response?.message, "success");
      navigate("/login");

      // setTimeout(() => {
      //   if (localStorage.getItem("TOKEN")) {
      //   }
      // });
    } catch (error) {
      dispatch(actionCreators.postAdminRegisterFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================
export const editAdminProfile = ({ adminId, values, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.putAdminProfile());
    try {
      const response = await putData(`/api/admin/${adminId}`, values);
      dispatch(actionCreators.putAdminProfileSuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionCreators.putAdminProfileFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// ========================================================================================

export const fetchAdmins = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getAdmins());
    try {
      const data = await getData(`/api/admin/all-admins`);

      dispatch(actionCreators.getAdminsSuccess(data.data.admins));
    } catch (error) {
      dispatch(actionCreators.getAdminsFail(error));
    }
  };
};
