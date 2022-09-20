import React from "react";
import { useRef, useState, useEffect } from "react";
// import VideoTiktok from "./video.mp4";
const UseRef = () => {
  const [value, setValue] = useState();
  const inputValue = useRef();
  const [time, setTime] = useState(100);
  const timeRef = useRef();
  const [color, setColor] = useState("red");
  const colors = ["red", "green", "blue", "magenta", "cyan"];
  const colorRef = useRef();
  // const videoRef = useRef();

  const randomColor = (currentColor) => {
    let newColor = currentColor;
    while (newColor == currentColor) {
      let index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }
    return newColor;
  };

  useEffect(() => {
    inputValue.current.focus();
  });

  const handleStart = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  };

  const handleColor = () => {
    let newColor = randomColor(colorRef.current);
    colorRef.current = newColor;
    setColor(newColor);
    console.log(newColor);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = 0;
  };
  return (
    <div>
      <div
        style={{ width: 200, height: 200, backgroundColor: color }}
        onClick={handleColor}
      ></div>
      <hr />
      <h1>Đồng hồ bấm giờ: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input
        type="text"
        placeholder="Enter name"
        ref={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <hr />
      {/* <video>
        ref={videoRef}
        src={VideoTiktok}
        width="300px"
      </video> */}
    </div>
  );
};

export default UseRef;
