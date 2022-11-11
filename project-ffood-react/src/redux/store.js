import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import blogsReducer from "./blogsSlice";
import cartSlice from "./cartSlice";
import apiSlice from "./apiSlice";
import signupSlice from "./signupSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    blogs: blogsReducer,
    total: cartSlice,
    cart: cartSlice,
    api: apiSlice,
    users: signupSlice,
  },
});

export default store;
