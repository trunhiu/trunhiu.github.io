const BoxColor = () => {
  const defaulListColor = [
    "#3498db",
    "#9b59b6",
    "#e74c3c",
    "#2c3e50",
    "#d35400",
  ];

  const [listColor, setListColor] = React.useState([
    "#3498db",
    "#9b59b6",
    "#e74c3c",
    "#2c3e50",
    "#d35400",
  ]);

  const addMoreBox = () => {
    let newListBox = [...listColor];
    newListBox.push(...defaulListColor);
    setListColor(newListBox);
  };

  const deleteBox = (index) => {
    let newListBox = [...listColor];
    newListBox.splice(index, 1);
    setListColor(newListBox);
  };

  return (
    <div className="wrap">
      <h1> JS DOM</h1>
      <button id="btn" onClick={addMoreBox}>
        More boxes
      </button>
      <h4 id="score">
        {" "}
        Total box:<span className="points">{listColor.length}</span>
      </h4>
      {listColor.map((b, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: b }}
          onClick={() => deleteBox(index)}
        ></div>
      ))}
      <div className="boxes"></div>
    </div>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<BoxColor />);
