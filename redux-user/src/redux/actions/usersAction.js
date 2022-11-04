export const deleteUser = (id) => {
  return {
    type: "deleteUser",
    payload: { id },
  };
};

export const addUsers = (newUser) => {
  return {
    type: "addUser",
    payload: { newUser },
  };
};
