import { WISHLIST_ACTIONS_TYPES } from "../actionTypes";

export const addToWishList = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST,
    payLoad,
  };
};
export const addToWishListSuccess = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST_SUCCESS,
    payLoad,
  };
};
export const addToWishListFail = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST_FAIL,
    payLoad,
  };
};

// =================================================================
export const getWishList = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.GET_WISHLIST,
    payLoad,
  };
};
export const getWishListSuccess = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.GET_WISHLIST_SUCCESS,
    payLoad,
  };
};
export const getWishListFail = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.GET_WISHLIST_FAIL,
    payLoad,
  };
};
// =================================================================
export const deleteProductFromWishList = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST,
    payLoad,
  };
};
export const deleteProductFromWishListSuccess = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
    payLoad,
  };
};
export const deleteProductFromWishListFail = (payLoad) => {
  return {
    type: WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST_FAIL,
    payLoad,
  };
};
 
