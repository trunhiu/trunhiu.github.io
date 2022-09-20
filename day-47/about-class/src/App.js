import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Bui Hieu",
    age: 25,
    email: "bui@gmail.com",
  });

  const [isShow, setIsShow] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  //Replacing
  const changeName = () => {
    setUser({ ...user, name: "Nguyen Van A" });
  };

  return (
    <div className="App">
      {isShow && <Counter color={"red"} bg={"violet"} />}
      <button onClick={handleToggle}>Toggle</button>
      <h2>Name: {user.name}</h2>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
