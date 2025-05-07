import { CART_ACTIONS_TYPES } from "../../actions/actionTypes";
const initialValues = {
  isLoading: false,
  cart: { products: [] },
  error: null,
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,

        cart: { ...action?.payLoad?.data?.cart },
        error: null,
      };
    case CART_ACTIONS_TYPES.ADD_TO_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case CART_ACTIONS_TYPES.GET_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action?.payLoad,
        error: null,
      };
    case CART_ACTIONS_TYPES.GET_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: { ...action?.payLoad },
        error: null,
      };
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================

    case CART_ACTIONS_TYPES.PUT_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.PUT_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: { ...action?.payLoad },
        error: null,
      };
    case CART_ACTIONS_TYPES.PUT_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };

    default:
      return state;
  }
};

export { cartReducer };
