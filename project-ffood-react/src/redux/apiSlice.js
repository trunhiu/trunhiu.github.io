import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiCity = createAsyncThunk("api/fetchApiCity", async () => {
  const res = await axios.get("https://provinces.open-api.vn/api/");
  return res.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    status: "idle",
    apiCity: [],
    apiWard: [],
    apiDistrict: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiCity.fulfilled, (state, action) => {
      state.status = "success";
      state.apiCity = action.payload;
    });
  },
});

export default apiSlice.reducer;
