import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "./todo.service";
import { faker } from "@faker-js/faker";

const TodoList = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const { isLoading } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    const newTodo = {
      title,
      status: false,
    };
    // dispatch(addNewTodo(newTodo));
    createTodo(newTodo);
    setTitle("");
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleEdit = (id) => {
    const updatedTodo = {
      id,
      title: faker.animal.cat(),
      status: Math.random() > 0.5,
    };
    // dispatch(updateTodo(updatedTodo));
    updateTodo(updatedTodo);
  };
  if (isLoading) {
    return <>Loading .....</>;
  }
  return (
    <>
      <div style={{ padding: 50 }}>
        <h1>TodoList</h1>

        <input
          type="text"
          placeholder="Enter todo ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span style={{ color: todo.status ? "red" : "black" }}>
                {todo.title}
              </span>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
