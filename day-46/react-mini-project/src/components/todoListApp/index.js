import React from "react";
import { useRef } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [listJob, setListJob] = React.useState(["item1", "item2", "item3"]);
  const inputRef = useRef();

  const onClickInput = () => {
    if (!inputValue) {
      alert("Khong duoc de trong");
    } else {
      let jobCopy = [...listJob, inputValue];
      setListJob(jobCopy);
      setInputValue("");
    }
  };

  const onClickChange = () => {
    inputRef.current.focus();
  };

  const onClickRemove = (index) => {
    console.log(index);
    let jobCopy = [...listJob];
    jobCopy.splice(index, 1);
    setListJob(jobCopy);
  };
  return (
    <React.Fragment>
      <h1>Todolist App</h1>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <button onClick={onClickInput}>Add</button>
      {/* <p>Không có công việc nào</p> */}
      <ul>
        {listJob.map((job, index) => (
          <li key={index}>
            {" "}
            {job}
            <button onClick={() => onClickChange(index)}>Edit</button>
            <button onClick={() => onClickRemove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button>All</button>
      <button>Active</button>
      <button>UnActive</button>
      <button>Clear All</button>
    </React.Fragment>
  );
};

export default TodoList;
