import { WISHLIST_ACTIONS_TYPES } from "../../actions/actionTypes";
const initialValues = {
  isLoading: false,
  wishList: { products: [] },
  error: null,
};

const wishListReducer = (state = initialValues, action) => {
  switch (action.type) {
    case WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST:
      return { ...state, isLoading: true };
    case WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishList: { ...action?.payLoad?.data?.wishList },
        error: null,
      };
    case WISHLIST_ACTIONS_TYPES.ADD_PRODUCT_TO_WISHLIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case WISHLIST_ACTIONS_TYPES.GET_WISHLIST:
      return { ...state, isLoading: true };
    case WISHLIST_ACTIONS_TYPES.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishList: action?.payLoad,
        error: null,
      };
    case WISHLIST_ACTIONS_TYPES.GET_WISHLIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST:
      return { ...state, isLoading: true };
    case WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishList: { ...action?.payLoad },
        error: null,
      };
    case WISHLIST_ACTIONS_TYPES.DELETE_PRODUCT_FROM_WISHLIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================

    default:
      return state;
  }
};

export { wishListReducer };
