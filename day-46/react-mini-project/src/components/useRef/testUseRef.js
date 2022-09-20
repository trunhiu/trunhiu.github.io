import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function TestUseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    // countRef.current = countRef.current + 1;
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current = countRef.current + 1;
  //     console.log(countRef.current);
  //   }, 1000);
  // }, []);

  // console.log({ count, countRef });
  useEffect(() => {
    // countRef.current.focus();
    // countRef.current.placeholder = "hello";
    // console.log(countRef);
    // setInterval(() => {
    //   setCount(count + 1);
    //   console.log(count);
    // }, 1000);
  }, [count]);

  return (
    <>
      {/* <input type="text" ref={countRef} /> */}
      <p>{countRef.current}</p>
      <p>{count}</p>
      <button onClick={handleClick}>ClickHere</button>
    </>
  );
}

export default TestUseRef;
