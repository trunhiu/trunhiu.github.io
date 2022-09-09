const BMIApp = () => {
  const [weightInput, setWeightInput] = React.useState("");
  const [heightInput, setHeightInput] = React.useState("");
  const [errWeightText, setErrWeightText] = React.useState("");
  const [errHeightText, setErrHeightText] = React.useState("");

  const checkPositives = () => {
    weightInput < 0
      ? setErrWeightText("Weight lon hon 0")
      : setErrWeightText("");
    heightInput < 0
      ? setErrHeightText("Height lon hon 0")
      : setErrHeightText("");
  };

  const checkBlank = () => {
    !weightInput
      ? setErrWeightText("Weight cannot be blank")
      : setErrWeightText("");
    !heightInput
      ? setErrHeightText("Height cannot be blank")
      : setErrHeightText("");
  };

  const checkNumber = () => {
    isNumber(weightInput)
      ? setErrWeightText("")
      : setErrWeightText("Weight is not a number");
    isNumber(heightInput)
      ? setErrHeightText("")
      : setErrHeightText("Height is not a number");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    checkBlank();

    console.log(weightInput, heightInput);
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
          BMI: <span>0</span>
        </div>
      </form>
    </React.Fragment>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<BMIApp />);
