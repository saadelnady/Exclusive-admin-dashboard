import { deleteData, getData, postData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./wishListActionsCreators";

export const addToWishList = (payLoad) => {
  const { data, toast } = payLoad;
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.addToWishList(payLoad));
      const response = await postData(`/api/wishList`, data);
      if (response.status === "success") {
        dispatch(actionsCreators.addToWishListSuccess(response));
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(
        actionsCreators.addToWishListFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =================================================================

export const getWishList = (userId) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getWishList(userId));
    try {
      const response = await getData(`/api/wishList?userId=${userId}`);

      if (response.status === "success") {
        dispatch(actionsCreators.getWishListSuccess(response?.data?.wishList));
      }
    } catch (error) {
      dispatch(actionsCreators.getWishListFail(error?.response?.data?.message));
    }
  };
};
// =================================================================

export const deleteProductFromWishList = (payLoad) => {
  const { productId, wishListId, toast } = payLoad;
  return async (dispatch) => {
    try {
      dispatch(actionsCreators.deleteProductFromWishList(payLoad));
      const response = await deleteData(
        `/api/wishList?wishListId=${wishListId}&productId=${productId}`
      );
      if (response.status === "success") {
        dispatch(
          actionsCreators.deleteProductFromWishListSuccess(
            response?.data?.wishList
          )
        );
        showToast(toast, response?.message, "success");
      }
    } catch (error) {
      dispatch(
        actionsCreators.deleteProductFromWishListFail(
          error?.response?.data?.message
        )
      );
    }
  };
};
