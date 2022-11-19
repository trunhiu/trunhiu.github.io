import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (data) => {
    let res;
    if (data) {
      res = await axios.get(
        "https://ffood-reactjs.herokuapp.com/products?" + data
      );
    } else {
      res = await axios.get("https://ffood-reactjs.herokuapp.com/products");
    }
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
      "https://ffood-reactjs.herokuapp.com/products?tags=LOVE"
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

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    const res = await axios.delete(
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

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (data) => {
    const res = await axios.post(
      "https://ffood-reactjs.herokuapp.com/products",
      data
    );
    console.log(res.data);
    return res.data;
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (data) => {
    const res = await axios.put(
      `https://ffood-reactjs.herokuapp.com/products/${data.id}`,
      data
    );
    return res.data;
  }
);

export const filterBurger = createAsyncThunk(
  "products/filterBurger",
  async () => {
    const res = await axios.get(
      "https://ffood-reactjs.herokuapp.com/products?tag=Burgers"
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
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.products.push(action.payload);
      console.log(action.payload);
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.status = "success";
      let index = state.products.findIndex((i) => i.id === action.payload.id);
      state.products[index] = action.payload;
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.status = "success";
      let index = state.products.findIndex((p) => p.id === action.payload);
      state.products.splice(index, 1);
    });
  },
});

export default productsSlice.reducer;
