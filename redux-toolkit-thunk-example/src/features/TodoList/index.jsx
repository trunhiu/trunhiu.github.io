import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addNewTodo, deleteTodo, updateTodo } from "../todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleAddTodo = () => {
    let newTodo = {
      title,
      status: false,
    };
    dispatch(addNewTodo(newTodo));
    setTitle("");
  };
  const handleEdit = (id) => {
    let updatedTodo = {
      id,
      title: Math.random() + "title",
      status: Math.random() > 0.5,
    };
    dispatch(updateTodo(updatedTodo));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter todo...."
        id="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={(e) => handleAddTodo(e.target.value)}>Add Todo</button>

      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
