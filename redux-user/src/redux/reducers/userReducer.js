const initUsers = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    phone: 11111111,
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jame",
    email: "james@gmail.com",
    phone: 2222222,
    address: "123 Main St",
  },
  {
    id: 3,
    name: "Rose",
    email: "rose@gmail.com",
    phone: 33333333,
    address: "123 Main St",
  },
  {
    id: 4,
    name: "Jimmy",
    email: "jimmy@gmail.com",
    phone: 4444444,
    address: "123 Main St",
  },
  {
    id: 5,
    name: "Jack",
    email: "jack@gmail.com",
    phone: 5555552,
    address: "123 Main St",
  },
];

const usersReducer = (state = initUsers, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "addUser": {
      return [...state, action.payload.newUser];
    }

    case "findUser": {
      return state;
    }

    case "updateUser": {
      return state;
    }
    case "deleteUser": {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
