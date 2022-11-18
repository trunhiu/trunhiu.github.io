import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiCity = createAsyncThunk("api/fetchApiCity", async () => {
  const res = await axios.get("https://provinces.open-api.vn/api/?depth=3");
  return res.data;
});

export const fetApiDistrict = createAsyncThunk(
  "api/fetApiDistrict",
  async () => {
    const res = await axios.get("https://provinces.open-api.vn/api/d");
    return res.data;
  }
);
export const fetApiWard = createAsyncThunk("api/fetApiWard", async () => {
  const res = await axios.get("https://provinces.open-api.vn/api/w");
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
  reducers: {
    getDistrictByCity(state, action) {
      const newDis = state.apiDistrict.filter(
        (dis) => dis.province_code == action.payload
      );
      state.apiDistrict = newDis;
    },
    getWardByDistrict(state, action) {
      const newWard = state.apiWard.filter(
        (ward) => ward.district_code == action.payload
      );
      state.apiWard = newWard;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiCity.fulfilled, (state, action) => {
      state.status = "success";
      state.apiCity = action.payload;
    });
    builder.addCase(fetApiDistrict.fulfilled, (state, action) => {
      state.status = "success";
      state.apiDistrict = action.payload;
    });
    builder.addCase(fetApiWard.fulfilled, (state, action) => {
      state.status = "success";
      state.apiWard = action.payload;
    });
  },
});

export const { getDistrictByCity, getWardByDistrict } = apiSlice.actions;

export default apiSlice.reducer;
