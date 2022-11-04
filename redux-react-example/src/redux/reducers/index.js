import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export default rootReducer;
