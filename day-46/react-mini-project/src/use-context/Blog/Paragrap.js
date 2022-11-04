import React, { useContext } from "react";
import { ThemeContext } from ".";

const Paragrap = () => {
  const { theme, fontSize } = useContext(ThemeContext);
  console.log(theme, fontSize);
  return (
    <p className={theme} style={{ fontSize: fontSize }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ex,
      quibusdam aperiam explicabo quis sapiente nostrum, dolores illo voluptate
      enim quaerat maiores saepe distinctio repellat ipsam nisi assumenda in
      veritatis
    </p>
  );
};

export default Paragrap;
