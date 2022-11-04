import { PLUS_ITEM, MINUS_ITEM, DELETE_ITEM } from "./Constants";

export const plusItem = (newList) => {
  return {
    type: PLUS_ITEM,
    paypload: newList,
  };
};

export const minusItem = (newList) => {
  return {
    type: MINUS_ITEM,
    paypload: newList,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    paypload: {
      id,
    },
  };
};
