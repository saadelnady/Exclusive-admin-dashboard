import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "./reducers/userReducer/userReducer.js";
import { productReducer } from "./reducers/productReducer/productReducer.js";
import { sellerReducer } from "./reducers/sellerReducer/sellerReducer.js";
import { categoryReducer } from "./reducers/categoryReducer/categoryReducer.js";
import { subCategoryReducer } from "./reducers/subCategory/subCategoryReducer.js";
import { couponCodeReducer } from "./reducers/couponCodeRdeucer/couponCodeReducer.js";
import { cartReducer } from "./reducers/cartReducer/cartReducer.js";
import { wishListReducer } from "./reducers/wishListReducer/wishListReducer.js";
import { thunk } from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const appReducers = combineReducers({
  userReducer,
  productReducer,
  sellerReducer,
  categoryReducer,
  subCategoryReducer,
  couponCodeReducer,
  cartReducer,
  wishListReducer,
});
export const store = createStore(appReducers, enhancer);
