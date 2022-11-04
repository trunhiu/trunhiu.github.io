import {
  ADD_COUNT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  LOGIN,
  LOGOUT,
  SUBTRACT_COUNT,
  SYNC_AUTH,
  ADD_ORDER,
  UPDATE_PROFILE,
  CLEAR_CART,
} from "./constants";

// ShoppingCart
export const addCount = (id) => {
  return {
    type: ADD_COUNT,
    payload: { id },
  };
};

export const subtractCount = (id) => {
  return {
    type: SUBTRACT_COUNT,
    payload: { id },
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: { id },
  };
};

export const addProduct = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

// Auth

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data, // thông tin của user login thành công
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// User

export const updateProfile = (data) => {
  return {
    type: UPDATE_PROFILE,
    payload: data, // thông tin của user cần cập nhật
  };
};

export const syncAuth = (data) => {
  return {
    type: SYNC_AUTH,
    payload: data,
  };
};

export const addOrder = (data) => {
  return {
    type: ADD_ORDER,
    payload: data, // thông tin của user cần cập nhật
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
