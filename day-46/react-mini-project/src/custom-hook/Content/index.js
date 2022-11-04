import React, { useState } from "react";
import Shop from "./shop";
import useToggle from "./useToggle";
import ColorBox from "./ColorBox";

const Content = () => {
  //   const [isShow, setIsShow] = useState(true);

  //   const handleToggle = () => {
  //     setIsShow(!isShow);
  //   };

  const [isShow, handleToggle] = useToggle(true);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          incidunt reiciendis porro rerum soluta eligendi nihil id asperiores,
          vitae in, maxime neque facere itaque nobis? Facere eum tempore
          assumenda nostrum.
        </p>
      )}

      <Shop />

      <ColorBox />
    </div>
  );
};

export default Content;
