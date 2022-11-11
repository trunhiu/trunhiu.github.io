import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://ffood-reactjs.herokuapp.com/products");
    return res.data;
  }
);

export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async () => {
    const res = await axios.get(
      "https://ffood-reactjs.herokuapp.com/products?tags=NEW"
    );
    return res.data;
  }
);

export const fetchHotProducts = createAsyncThunk(
  "products/fetchHotProducts",
  async () => {
    const res = await axios.get(
      "https://ffood-reactjs.herokuapp.com/products?tags=HOT"
    );
    return res.data;
  }
);

export const fetchLoveProducts = createAsyncThunk(
  "products/fetchLoveProducts",
  async () => {
    const res = await axios.get(
      "https://ffood-reactjs.herokuapp.com/products?tags=NEW"
    );
    return res.data;
  }
);

export const fetchProductsById = createAsyncThunk(
  "products/fetchProductsById",
  async (id) => {
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/products/${id}`
    );
    return res.data;
  }
);

export const fetchProductsSort = createAsyncThunk(
  "products/fetchProductsSort",
  async (type) => {
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/products?_sort=price&_order=${type}`
    );
    return res.data;
  }
);

export const fetchProductsHotCombo = createAsyncThunk(
  "products/fetchProductsHotCombo",
  async () => {
    const res = await axios.get(
      "https://ffood-reactjs.herokuapp.com/products?tag=Combo&tags=HOT"
    );
    return res.data;
  }
);

export const fetchproductsSearch = createAsyncThunk(
  "products/fetchproductsSearch",
  async (value) => {
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/products?q=${value}`
    );
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    productsSearch: [],
    product: {},
    products: [],
    newProducts: [],
    hotProducts: [],
    loveProducts: [],
    hotComboProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(fetchNewProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.newProducts = action.payload;
    });
    builder.addCase(fetchHotProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.hotProducts = action.payload;
    });
    builder.addCase(fetchLoveProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.loveProducts = action.payload;
    });
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.status = "success";
      state.product = action.payload;
    });

    builder.addCase(fetchProductsSort.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(fetchProductsHotCombo.fulfilled, (state, action) => {
      state.status = "success";
      state.hotComboProducts = action.payload;
    });
    builder.addCase(fetchproductsSearch.pending, (state, action) => {
      state.productsSearch = [];
    });
    builder.addCase(fetchproductsSearch.fulfilled, (state, action) => {
      state.status = "success";
      state.productsSearch = action.payload;
    });
  },
});

export default productsSlice.reducer;
