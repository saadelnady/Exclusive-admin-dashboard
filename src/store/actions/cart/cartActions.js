import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./cartActionsCreators";

export const addToCart = (data, toast) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.addToCart());
      const response = await postData(`/api/cart`, data);
      if (response.status === "success") {
        dispatch(actionsCreators.addToCartSuccess(response));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(actionsCreators.addToCartFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =================================================================

export const getCart = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.getCart());
      const response = await getData(`/api/cart?userId=${userId}`);

      if (response.status === "success") {
        dispatch(actionsCreators.getCartSuccess(response?.data?.cart));
      }
    } catch (error) {
      dispatch(actionsCreators.getCartFail(error?.response?.data?.message));
    }
  };
};
// =================================================================

export const deleteProductFromCart = ({ productId, cartId, toast }) => {
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.deleteProductFromCart());
      const response = await deleteData(
        `/api/cart?cartId=${cartId}&productId=${productId}`
      );
      if (response.status === "success") {
        dispatch(
          actionsCreators.deleteProductFromCartSuccess(response?.data?.cart)
        );
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(
        actionsCreators.deleteProductFromCartFail(
          error?.response?.data?.message
        )
      );
    }
  };
};
// =================================================================

export const editCart = ({ cartId, productId, newSelectedCount, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editCart(productId));
    try {
      const response = await putData(`/api/cart/${cartId}`, {
        productId,
        newSelectedCount,
      });

      if (response.status === "success") {
        dispatch(actionsCreators.editCartSuccess(response?.data?.cart));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      console.log("error ===>", error);

      dispatch(actionsCreators.editCartFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
