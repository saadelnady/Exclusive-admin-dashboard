import { USERS_ACTIONS_TYPES, USER_ACTIONS_TYPES } from "../actionTypes";
// ===========================================================================
// USER
// ===========================================================================

export const getAdmin = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER,
    payLoad,
  };
};
export const getAdminSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_SUCCESS,
    payLoad,
  };
};
export const getAdminFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const getAdminProfile = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE,
    payLoad,
  };
};
export const getAdminProfileSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE_SUCCESS,
    payLoad,
  };
};
export const getAdminProfileFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE_FAIL,
    payLoad,
  };
};

// ===========================================================================
export const postAdminLogin = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN,
    payLoad,
  };
};
export const postAdminLoginSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS,
    payLoad,
  };
};
export const postAdminLoginFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const postAdminLogout = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT,
    payLoad,
  };
};
export const postAdminLogoutSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS,
    payLoad,
  };
};
export const postAdminLogoutFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const postAdminRegister = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER,
    payLoad,
  };
};
export const postAdminRegisterSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER_SUCCESS,
    payLoad,
  };
};
export const postAdminRegisterFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER_FAIL,
    payLoad,
  };
};
// ===========================================================================
export const putAdminProfile = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.PUT_USER_PROFILE,
    payLoad,
  };
};
export const putAdminProfileSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.PUT_USER_PROFILE_SUCCESS,
    payLoad,
  };
};
export const putAdminProfileFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.PUT_USER_PROFILE_FAIL,
    payLoad,
  };
};
//============================================================================
// ===========================================================================
// USERS
// ===========================================================================
// ===========================================================================
export const getAdmins = () => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS,
  };
};
export const getAdminsSuccess = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
    payLoad,
  };
};
export const getAdminsFail = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_FAIL,
    payLoad,
  };
};
//============================================================================
