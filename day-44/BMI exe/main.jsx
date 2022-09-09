const BMIApp = () => {
  const [weightInput, setWeightInput] = React.useState("");
  const [heightInput, setHeightInput] = React.useState("");
  const [errWeightText, setErrWeightText] = React.useState("");
  const [errHeightText, setErrHeightText] = React.useState("");
  const [result, setResult] = React.useState(0);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!weightInput) {
      setErrWeightText("Weight cannot be blank");
    } else if (!isNumber(weightInput)) {
      setErrWeightText("Weight is not formatted correctly");
    } else if (weightInput < 0) {
      setErrWeightText("Weight must be than 0");
    } else if (weightInput) {
      setErrWeightText("");
      let BMI = weightInput / (heightInput * heightInput);
      setResult(BMI);
    }

    if (!heightInput) {
      setErrHeightText("Height cannot be blank");
    } else if (!isNumber(heightInput)) {
      setErrHeightText("Height is not formatted correctly");
    } else if (heightInput < 0) {
      setErrHeightText("Height must be than 0");
    } else if (heightInput) {
      setErrHeightText("");
    }
  };

  const inputWChange = (e) => {
    let value = e.target.value;
    setWeightInput(value);
  };
  const inputHChange = (e) => {
    let value = e.target.value;
    setHeightInput(value);
  };

  const isNumber = (str) => {
    if (str.trim() === "") {
      return false;
    }
    return !isNaN(str);
  };

  return (
    <React.Fragment>
      <form onSubmit={formSubmit}>
        <input type="text" input={weightInput} onChange={inputWChange} />
        <br />
        <span style={{ color: "red" }}>{errWeightText}</span>
        <br />
        <br />
        <input type="text" input={heightInput} onChange={inputHChange} />
        <br />
        <span style={{ color: "red" }}>{errHeightText}</span>
        <br />
        <br />
        <button type="submit">Calculate</button>
        <br />
        <br />
        <div>
          BMI: <span>{result || 0}</span>
        </div>
      </form>
    </React.Fragment>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<BMIApp />);
