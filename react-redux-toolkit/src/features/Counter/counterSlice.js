import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  todos: [
    { id: 1, title: "làm việc nhà", status: true },
    { id: 2, title: "Đi chơi", status: false },
    { id: 3, title: "Uống rượu", status: true },
  ],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    addTwo: {
      reducer: (state, action) => {
        console.log("action:", action);
        state.value += action.payload;
      },
      prepare: (number) => {
        console.log("number:", number);
        return {
          payload: number * 2,
        }; // action.payload
      },
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

// Sử dụng ImmerJS

// name + increment => action type
// increment => "counter/increment"
// increment: action creator

/**
 * const increment = () => {
 *  return {
 *      type: "counter/increment"
 * }
 */

export const getCounter = (store) => store.counter.value;
export const getTodos = (store) => store.counter.todos;
export const getTodosActive = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.status)
);

export const { increment, decrement, addTwo, addTodo } = counterSlice.actions;
export default counterSlice.reducer;
