//1. initial state
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../store/constants";

export const initialState = [
  { id: 1, title: "Di choi", status: false },
  { id: 2, title: "Lam bai tap", status: true },
  { id: 3, title: "Da bong", status: false },
];

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }
    case EDIT_TODO: {
      const { id, title } = action.payload;
      const newState = state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }
        return todo;
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
