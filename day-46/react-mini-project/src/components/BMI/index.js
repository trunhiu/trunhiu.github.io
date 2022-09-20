import React, { useEffect, useState } from "react";

export default function BmiEffect() {
  const [weightInput, setWeightInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [errMessW, setErrMessW] = useState("");
  const [errMessH, setErrMessH] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log("call");
    if (!errMessW && !errMessH) {
      let BMI = weightInput / (heightInput * heightInput);
      setResult(BMI);
    } else {
      setResult(0);
    }
  }, [errMessW, errMessH]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    // Check validate form
    validate();
  };

  const validate = () => {
    // Check weight
    if (!weightInput) {
      setErrMessW("Weight Khong duoc de trong");
    } else if (!isNumber(weightInput)) {
      setErrMessW("Weight Khong dung dinh dang");
    } else if (weightInput < 0) {
      setErrMessW("Weight Phai lon hon 0");
    } else {
      setErrMessW("");
    }

    // Check height
    if (!heightInput) {
      setErrMessH("Height Khong duoc de trong");
    } else if (!isNumber(heightInput)) {
      setErrMessH("Height Khong dung dinh dang");
    } else if (heightInput < 0) {
      setErrMessH("Height Phai lon hon 0");
    } else {
      setErrMessH("");
    }
  };

  const isNumber = (str) => {
    if (str.trim() === "") {
      return false;
    }
    return !isNaN(str);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="dien vao day"
          value={weightInput}
          onChange={(e) => setWeightInput(e.target.value)}
        />
        <br />

        {errMessW && <span>{errMessW}</span>}
        <br />

        <input
          type="text"
          placeholder="dien vao day"
          value={heightInput}
          onChange={(e) => setHeightInput(e.target.value)}
        />

        <br />
        {errMessH && <span>{errMessH}</span>}
        <br />

        <button type="submit">Tinh</button>
        <br />

        <p>
          BMI: <span>{result}</span>
        </p>
      </form>
    </React.Fragment>
  );
}
