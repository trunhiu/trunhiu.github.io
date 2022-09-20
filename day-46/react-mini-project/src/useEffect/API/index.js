import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const options = ["posts", "comments", "albums"];
  const [type, setType] = useState("posts");

  useEffect(() => {
    console.log("fetch API");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => setType(option)}>
          {option}
        </button>
      ))}

      <h1>Type: {type}</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {console.log("render")}
    </div>
  );
};

export default Api;
