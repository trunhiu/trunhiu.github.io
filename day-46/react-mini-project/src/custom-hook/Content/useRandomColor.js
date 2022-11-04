import { useState, useRef } from "react";

const colors = ["red", "green", "blue", "magenta", "cyan"];

// Hàm ramdom colors

const randomColor = (currentColor) => {
  let newColor = currentColor;
  while (newColor === currentColor) {
    let index = Math.floor(Math.random() * colors.length);
    newColor = colors[index];
  }
  return newColor;
};

const useRandomColor = () => {
  const [color, setColor] = useState("red");
  const colorRef = useRef();
  const handleColor = () => {
    let newColor = randomColor(colorRef.current);
    colorRef.current = newColor;
    setColor(newColor);
    console.log(newColor);
  };

  return [color, handleColor];
};

export default useRandomColor;
