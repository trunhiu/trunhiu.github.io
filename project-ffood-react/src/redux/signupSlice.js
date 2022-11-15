import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import useLocalStorage from "../Hook/useLocalStorage";

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

export const login = createAsyncThunk(
  "signup/login",
  async (data, thunkAPI) => {
    const { email, password, checked = false } = data;
    const res = await axios.get(
      `http://localhost:3001/users?email=${email}&password=${password}`
    );

    if (res.data.length === 0) {
      return thunkAPI.rejectWithValue("dang nhap that bai");
    } else {
      if (checked) {
        window.localStorage.setItem("user", JSON.stringify(res.data[0]));
      }
      return thunkAPI.fulfillWithValue(res.data[0]);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    status: "idle",
    users: [],
    user: {},
    isLogin: false,
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
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.status = "success";
      state.isLogin = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      state.status = "fail";
      state.isLogin = false;
    });
  },
});

export default signupSlice.reducer;
