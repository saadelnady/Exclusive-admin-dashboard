import { CART_ACTIONS_TYPES } from "../actionTypes";

export const addToCart = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.ADD_TO_CART,
    payLoad,
  };
};
export const addToCartSuccess = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.ADD_TO_CART_SUCCESS,
    payLoad,
  };
};
export const addToCartFail = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.ADD_TO_CART_FAIL,
    payLoad,
  };
};

// =================================================================
export const getCart = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.GET_CART,
    payLoad,
  };
};
export const getCartSuccess = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.GET_CART_SUCCESS,
    payLoad,
  };
};
export const getCartFail = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.GET_CART_FAIL,
    payLoad,
  };
};
// =================================================================
export const deleteProductFromCart = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART,
    payLoad,
  };
};
export const deleteProductFromCartSuccess = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_SUCCESS,
    payLoad,
  };
};
export const deleteProductFromCartFail = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_FAIL,
    payLoad,
  };
};
// ==================================================================================

export const editCart = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.PUT_CART,
    payLoad,
  };
};
export const editCartSuccess = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.PUT_CART_SUCCESS,
    payLoad,
  };
};
export const editCartFail = (payLoad) => {
  return {
    type: CART_ACTIONS_TYPES.PUT_CART_FAIL,
    payLoad,
  };
};
