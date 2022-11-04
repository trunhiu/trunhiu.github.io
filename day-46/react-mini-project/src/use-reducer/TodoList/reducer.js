import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export const initalState = [
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
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case EDIT_TODO: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
