import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, addTodo } from "../Counter/counterSlice";

const TodoList = () => {
  const todos = useSelector(getTodos);
  console.log(todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: todos.length + 1,
        title: todo,
        status: false,
      })
    );
    setTodo("");
  };
  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter todo...."
        id="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={(e) => handleAddTodo(e.target.value)}>Add Todo</button>
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
