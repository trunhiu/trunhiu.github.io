import React, { createContext, useState } from "react";
import Section from "./section";

// props : theme : light, dark
// Blog => Section => Paragraph

//Contect : createContext()
//Provider : Cung cấp value cho context
//Consumer : Lấy giá trị từ context

export const ThemeContext = createContext();

const Blog = () => {
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(16);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const toggleFontSize = () => {
    setFontSize(fontSize === 16 ? 48 : 16);
  };

  const value = {
    theme,
    fontSize,
  };
  return (
    <ThemeContext.Provider value={value}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={toggleFontSize}>Toggle fontSize</button>
      <Section />
    </ThemeContext.Provider>
  );
};

export default Blog;
