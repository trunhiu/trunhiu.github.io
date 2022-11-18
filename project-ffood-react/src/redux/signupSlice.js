import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchDataUsers = createAsyncThunk(
  "signup/fetchDataUsers",
  async () => {
    const res = await axios.get("https://ffood-reactjs.herokuapp.com/users");
    return res.data;
  }
);

export const fetchLogin = createAsyncThunk("signup/fetchLogin", async () => {
  const res = await axios.get("https://ffood-reactjs.herokuapp.com/users");
  return res.data;
});

export const postDataUsers = createAsyncThunk(
  "signup/postDataUsers",
  async (data) => {
    console.log(data);
    const res = await axios.post(
      "https://ffood-reactjs.herokuapp.com/users",
      data
    );

    return res.data;
  }
);

export const fetchUsersById = createAsyncThunk(
  "signup/fetchUsersById",
  async (id) => {
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/users/${id}`
    );
    return res.data;
  }
);

export const logout = createAsyncThunk("signup/logout", async (id) => {
  const res = await axios.delete(
    `https://ffood-reactjs.herokuapp.com/users/${id}`
  );
  return res.data;
});

export const editUser = createAsyncThunk("signup/editUser", async (data) => {
  const res = await axios.put(
    `https://ffood-reactjs.herokuapp.com/users/${data.id}`,
    data
  );
  return res.data;
});

export const editProfile = createAsyncThunk(
  "signup/editProfile",
  async (data) => {
    const res = await axios.patch(
      `https://ffood-reactjs.herokuapp.com/users/${data.id}`,
      data
    );
    return res.data;
  }
);

export const checkLogin = createAsyncThunk(
  "signup/checkLogin",
  async (email, password) => {
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/users?email=${email}&password=${password}`
    );

    return res.data;
  }
);

export const login = createAsyncThunk(
  "signup/login",
  async (data, thunkAPI) => {
    const { email, password, checked } = data;
    console.log(data, checked);
    const res = await axios.get(
      `https://ffood-reactjs.herokuapp.com/users?email=${email}&password=${password}`
    );

    if (res.data.length === 0) {
      return thunkAPI.rejectWithValue("Tài khoản hoặc mật khẩu chưa chính xác");
    } else {
      if (checked) {
        window.localStorage.setItem("userLocal", JSON.stringify(res.data[0]));
      }

      return thunkAPI.fulfillWithValue(res.data[0]);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    userLocal: localStorage.getItem("userLocal")
      ? JSON.parse(localStorage.getItem("userLocal"))
      : [],
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
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(postDataUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users.push(action.payload);
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(fetchUsersById.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.status = "success";
      let index = state.users.findIndex((i) => i.id === action.payload.id);
      state.users[index] = action.payload;
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.status = "success";
      let index = state.users.findIndex((i) => i.id === action.payload.id);
      state.users[index] = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      toast.success("Đăng nhập thành công", {
        autoClose: 1500,
      });
      state.status = "success";
      state.isLogin = true;
      state.userLocal = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      toast.error(action.payload, {
        autoClose: 1500,
      });
      state.status = "fail";
      state.isLogin = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.status = "success";
      state.user = {};
    });
  },
});

export default signupSlice.reducer;
