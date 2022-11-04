import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// todoList/fetchTodos/pending
// todoList/fetchTodos/fulfilled
// todoList/fetchTodos/rejected
export const fetchTodos = createAsyncThunk("todoList/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3001/todos");
  return response.data;
});

export const addNewTodo = createAsyncThunk(
  "todoList/addNewTodo",
  async (data) => {
    const response = await axios.post("http://localhost:3001/todos", data);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todoList/updateTodo",
  async (data) => {
    const response = await axios.put(
      `http://localhost:3001/todos/${data.id}`,
      data
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todoList/deleteTodo",
  async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    state: "idle",
    todos: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      let index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    });
  },
});

export default todoSlice.reducer;
