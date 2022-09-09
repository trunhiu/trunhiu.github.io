const ChangeThemes = () => {
  const themes = [
    {
      colorHeading: "#2C3639", // light theme
      colorText: "#3F4E4F",
      bg: "#F9F5EB",
    },
    {
      colorHeading: "#EAE3D2", // dark theme
      colorText: "#F9F5EB",
      bg: "#100720",
    },
  ];

  const [colorDefault, setColorDefault] = React.useState(themes[0]);

  const changeColor = (e) => {
    let value = e.target.value;
    setColorDefault(themes[value]);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: colorDefault.bg }}>
        <select onChange={(e) => changeColor(e)}>
          <option value={0}>Light Theme</option>
          <option value={1}>Dark Theme</option>
        </select>

        <h2 style={{ color: colorDefault.colorHeading }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>
        <p style={{ color: colorDefault.colorText }}>
          Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis placeat necessitatibus, vitae laboriosam in quos, nesciunt
          modi error sit porro, reprehenderit voluptatem dolore libero incidunt.
          Illo mollitia fugit quam inventore?
        </p>
      </div>
    </React.Fragment>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<ChangeThemes />);
