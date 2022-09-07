const ListJob = () => {
  const [listJob, setlistJob] = React.useState(["Item1", "Item2", "Item3"]);
  const [newJob, setNewJob] = React.useState("");
  const [ulstyle, setulStyle] = React.useState("block");
  const [btnText, setbtnText] = React.useState("Hide");
  const btnAdd = () => {
    if (!newJob) {
      alert("Không được để trống");
    } else {
      let jobCopy = [...listJob];
      jobCopy.push(newJob);
      setlistJob(jobCopy);
      setNewJob("");
    }
  };

  const onChangeNewJob = (e) => {
    setNewJob(e.currentTarget.value);
  };

  const btnRemove = () => {
    let newListJob = [...listJob];
    newListJob.pop(newListJob);
    setlistJob(newListJob);
  };

  const btnChange = () => {
    if (ulstyle == "block") {
      setulStyle("none");
      setbtnText("Show");
    } else {
      setulStyle("block");
      setbtnText("Hide");
    }
  };

  return (
    <React.Fragment>
      <button onClick={btnChange}>{btnText}</button>
      <button onClick={btnAdd}>Add</button>
      <input
        type="text"
        placeholder="Thêm nội dung vào đây"
        onChange={onChangeNewJob}
        value={newJob}
      />
      <button onClick={btnRemove}>Remove</button>
      <ul id="list" style={{ display: ulstyle }}>
        {listJob.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<ListJob />);
