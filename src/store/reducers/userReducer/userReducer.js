import {
  USERS_ACTIONS_TYPES,
  USER_ACTIONS_TYPES,
} from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  user: {},
  users: [],
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPES.GET_USER:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payLoad,
        error: null,
      };

    case USER_ACTIONS_TYPES.GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payLoad,
      };
    // ====================================================================================================

    case USER_ACTIONS_TYPES.GET_USER_PROFILE:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action?.payLoad,
        error: null,
      };

    case USER_ACTIONS_TYPES.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payLoad,
      };

    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action?.payLoad,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: {},
        users: [],
        error: null,
      };
    case USER_ACTIONS_TYPES.POST_USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: action?.payLoad,
      };

    // ====================================================================================================
    case USER_ACTIONS_TYPES.POST_USER_REGISTER:
      return {
        ...state,
      };
    case USER_ACTIONS_TYPES.POST_USER_REGISTER_SUCCESS:
      return {
        ...state,

        message: action?.payLoad?.message,
        error: null,
      };

    case USER_ACTIONS_TYPES.POST_USER_REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case USERS_ACTIONS_TYPES.GET_USERS:
      return { ...state, isLoading: true };

    case USERS_ACTIONS_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payLoad,
        error: null,
      };

    case USERS_ACTIONS_TYPES.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    // ====================================================================================================
    case USER_ACTIONS_TYPES.PUT_USER_PROFILE:
      return { ...state, isLoading: true };

    case USER_ACTIONS_TYPES.PUT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action?.payLoad?.data?.user,
        message: action?.payLoad?.message,
        error: null,
      };

    case USER_ACTIONS_TYPES.PUT_USER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
        message: action.payLoad,
      };
    // ====================================================================================================

    default:
      return state;
  }
};

export { userReducer };
