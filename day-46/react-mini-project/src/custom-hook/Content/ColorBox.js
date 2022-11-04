import React from "react";
import useRandomColor from "./useRandomColor";

const ColorBox = () => {
  const [color, handleColor] = useRandomColor();

  return (
    <div
      style={{ width: 200, height: 200, backgroundColor: color }}
      onClick={handleColor}
    ></div>
  );
};

export default ColorBox;
