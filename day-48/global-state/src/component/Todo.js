import React, { useState, useRef, useContext } from "react";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../store/constants";
import Context from "../context/Context";
import { addTodo, deleteTodo, editTodo } from "../store/action.js";

/*
1. Hiện thị danh sách todo ban đầu
2. Thêm todo
3. Xóa todo
4. Sửa todo
*/

// 1. inital state

// 2. action type

// 3. reducer

const Todo = () => {
  const { todos, dispatch } = useContext(Context);
  const [value, setValue] = useState();
  const inputRef = useRef();

  const handleAddTodo = () => {
    if (value == "") {
      alert("Tiêu đề không được để trống");
      return;
    }

    let newTodo = {
      id: todos.length + 1,
      title: value,
      status: false,
    };

    dispatch(addTodo(newTodo));
    setValue("");
    inputRef.current.focus();
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    // Lấy ra công việc hiện tại
    let editedTodo = todos.find((todo) => todo.id === id);

    // Hiển thị popup cập nhật công việc
    let title = window.prompt("Cập nhật công việc", editedTodo.title);
    console.log(title);

    //kiểm tra title
    if (!title == null) {
      return;
    }
    if (title == "") {
      alert("Tieu de khong duoc de trong");
      return;
    }

    let payload = {
      id: id,
      title: title,
    };
    dispatch(editTodo(payload));
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
      <button onClick={handleAddTodo}>Add TodoList</button>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={{ color: todo.status ? "red" : "black" }}>
                {todo.title}
              </span>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        {todos.length === 0 && <p>Không có công việc nào trong danh sách</p>}
      </ul>
    </>
  );
};

export default Todo;
