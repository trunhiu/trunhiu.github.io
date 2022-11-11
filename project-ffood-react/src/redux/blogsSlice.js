import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await axios.get("http://localhost:3001/blogs");
  return res.data;
});

export const fetchBlogsById = createAsyncThunk(
  "products/fetchBlogsById",
  async (id) => {
    const res = await axios.get(`http://localhost:3001/blogs/${id}`);
    console.log(res.data);
    return res.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    status: "idle",
    blogs: [],
    blog: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.status = "success";
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogsById.fulfilled, (state, action) => {
      state.status = "success";
      state.blog = action.payload;
    });
  },
});

export default blogsSlice.reducer;
