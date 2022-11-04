import React, { useReducer, useState, useRef } from "react";
import reducer, { initalState } from "./reducer";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

/*
1. Hiện thị danh sách todo ban đầu
2. Thêm todo
3. Xóa todo
4. Sửa todo
*/

// 1. inital state

// 2. action type

// 3. reducer

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initalState);
  const [value, setValue] = useState();
  const inputRef = useRef();

  const addTodo = () => {
    if (value == "") {
      alert("Tiêu đề không được để trống");
      return;
    }

    dispatch({
      type: ADD_TODO,
      payload: {
        id: todos.length + 1,
        title: value,
        status: false,
      },
    });
    setValue("");
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <h1>TodoList</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add TodoList</button>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={{ color: todo.status ? "red" : "black" }}>
                {todo.title}
              </span>
              <button>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        {todos.length === 0 && <p>Không có công việc nào trong danh sách</p>}
      </ul>
    </>
  );
};

export default TodoList;
