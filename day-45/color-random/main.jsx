const RandomColor = () => {
  const [colorDefault, setColorDefault] = React.useState(
    localStorage.getItem("color") || "black"
  );

  const changeColor = () => {
    const colorRandom =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    setColorDefault(colorRandom);
    localStorage.setItem("color", colorRandom);
  };

  return (
    <div
      className="box"
      onClick={changeColor}
      style={{ backgroundColor: colorDefault }}
    ></div>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<RandomColor />);
