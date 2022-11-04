const initTodo = [
  { id: 1, title: "Làm bài tập" },
  { id: 2, title: "Đi chơi" },
];

const todoReducer = (state = initTodo, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
