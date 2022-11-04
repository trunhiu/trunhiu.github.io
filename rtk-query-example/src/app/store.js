import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoList/todo.slice";
import { todoApi } from "../features/TodoList/todo.service";

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todoList: todoReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
