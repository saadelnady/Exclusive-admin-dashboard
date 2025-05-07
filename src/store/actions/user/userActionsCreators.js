import { USERS_ACTIONS_TYPES, USER_ACTIONS_TYPES } from "../actionTypes";
// ===========================================================================
// USER
// ===========================================================================

export const getUser = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER,
    payLoad,
  };
};
export const getUserSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_SUCCESS,
    payLoad,
  };
};
export const getUserFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const getUserProfile = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE,
    payLoad,
  };
};
export const getUserProfileSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE_SUCCESS,
    payLoad,
  };
};
export const getUserProfileFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.GET_USER_PROFILE_FAIL,
    payLoad,
  };
};

// ===========================================================================
export const postUserLogin = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN,
    payLoad,
  };
};
export const postUserLoginSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS,
    payLoad,
  };
};
export const postUserLoginFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const postUserLogout = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT,
    payLoad,
  };
};
export const postUserLogoutSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS,
    payLoad,
  };
};
export const postUserLogoutFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL,
    payLoad,
  };
};
// ===========================================================================

export const postUserRegister = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER,
    payLoad,
  };
};
export const postUserRegisterSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER_SUCCESS,
    payLoad,
  };
};
export const postUserRegisterFail = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.POST_USER_REGISTER_FAIL,
    payLoad,
  };
};
// ===========================================================================
export const putUserProfile = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.PUT_USER_PROFILE,
    payLoad,
  };
};
export const putUserProfileSuccess = (payLoad) => {
  return {
    type: USER_ACTIONS_TYPES.PUT_USER_PROFILE_SUCCESS,
    payLoad,
  };
};
export const putUserProfileFail = (payLoad) => {
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
export const getUsers = () => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS,
  };
};
export const getUsersSuccess = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_SUCCESS,
    payLoad,
  };
};
export const getUsersFail = (payLoad) => {
  return {
    type: USERS_ACTIONS_TYPES.GET_USERS_FAIL,
    payLoad,
  };
};
//============================================================================
