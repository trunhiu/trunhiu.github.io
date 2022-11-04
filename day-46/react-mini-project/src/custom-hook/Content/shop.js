import React, { useState } from "react";
import useToggle from "./useToggle";

const Shop = () => {
  //   const [isShow, setIsShow] = useState(true);

  //   const handleToggle = () => {
  //     setIsShow(!isShow);
  //   };

  const [isShow, handleToggle] = useToggle(true);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && (
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          incidunt reiciendis porro rerum soluta eligendi nihil id asperiores,
          vitae in, maxime neque facere itaque nobis? Facere eum tempore
          assumenda nostrum.
        </h1>
      )}
    </div>
  );
};

export default Shop;
