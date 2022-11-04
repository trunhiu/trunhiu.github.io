import { ADD_COUNT, SUBTRACT_COUNT, DELETE_COUNT } from "./constants";

export const addCount = (id) => {
  return {
    type: ADD_COUNT,
    payload: { id },
  };
};

export const subtractCount = (id) => {
  return {
    type: SUBTRACT_COUNT,
    payload: { id },
  };
};

export const deleteCount = (id) => {
  return {
    type: DELETE_COUNT,
    payload: { id },
  };
};
