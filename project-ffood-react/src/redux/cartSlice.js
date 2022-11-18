import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const addToCart = createAsyncThunk("carts/addToCart", async (data) => {
  const res = await axios.post(
    "https://ffood-reactjs.herokuapp.com/cart",
    data,
    {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
});

export const fetchCartProduct = createAsyncThunk(
  "carts/fetchCartProduct",
  async () => {
    const res = await axios.get("https://ffood-reactjs.herokuapp.com/cart");
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    productValue: 1,
    cartTotalAmount: 0,
  },
  reducers: {
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addProductToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productValue += 1;
      } else {
        const temProducts = { ...action.payload, productValue: 1 };
        state.cartItems.push(temProducts);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    shoppingCartRemove(state, action) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementCart(state, action) {
      const decrementC = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[decrementC].productValue > 1) {
        state.cartItems[decrementC].productValue -= 1;
      } else if (state.cartItems[decrementC].productValue === 1) {
        const nextCartItem = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItem;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state, action) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const itemTotal = cartItem.price * cartItem.productValue;

          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          total: 0,
        }
      );
      state.cartTotalAmount = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const indexCart = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexCart >= 0) {
        console.log(indexCart);
        state.carts.count += 1;
      } else {
        state.status = "success";
        state.carts.push(action.payload);
      }
    });
    builder.addCase(fetchCartProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.carts = action.payload;
    });
  },
});

export const total = (store) => store.total.cartTotalAmount;
export const {
  addProductToCart,
  shoppingCartRemove,
  decrementCart,
  getTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
