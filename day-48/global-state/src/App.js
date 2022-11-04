import "./App.css";
import Todo from "./component/Todo";

// Component A -> component B -> component C
// Component A : lưu trữ State -> truyền props xuống component C để hiện thị thông tin.
// global state: context, reducer.

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
