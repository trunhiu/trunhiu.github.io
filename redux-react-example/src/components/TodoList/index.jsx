import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo());
  };
  return (
    <>
      <h1>Todo List</h1>

      <input type="text" placeholder="Enter todo...." id="todo-input" />
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
