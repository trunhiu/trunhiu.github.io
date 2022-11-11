import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataUsers = createAsyncThunk(
  "signup/fetchDataUsers",
  async () => {
    const res = await axios.get("http://localhost:3001/users");
    return res.data;
  }
);

export const postDataUsers = createAsyncThunk(
  "signup/postDataUsers",
  async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3001/users", data);

    return res.data;
  }
);

export const checkLogin = createAsyncThunk(
  "signup/checkLogin",
  async (email, password) => {
    const res = await axios.get(
      `http://localhost:3001/users?email=${email}&password=${password}`
    );

    return res.data;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    status: "idle",
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(postDataUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users.push(action.payload);
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
  },
});

export default signupSlice.reducer;
