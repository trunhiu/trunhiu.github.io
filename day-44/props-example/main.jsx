const App = () => {
  const hobbyList = [
    { id: 1, name: "Choi game" },
    { id: 2, name: "Da bong" },
    { id: 3, name: "Nghe nhac" },
  ];

  const showInfo = (name) => {
    alert(name);
  };

  const user = {
    name: "Bui Hieu",
    email: "buihieu3008@gmail.com",
    age: 25,
    address: "Hai Duong",
    status: true,
  };

  return (
    <React.Fragment>
      <Hobby hobbyList={hobbyList} showInfo={showInfo} />
      <User user={user} {...user} />
    </React.Fragment>
  );
  // {...user} = name={user.name} email={user.email} age={user.age} address={user.address} status={user.status}
};

// Hiển thị thông tin user
const User = (props) => {
  console.log(props);
  const { name, email } = props.user;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email:{email}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.string,
    status: PropTypes.boolen,
  }),
};

// Hiển thị danh sách sở thích

const Hobby = (props) => {
  const { hobbyList, showInfo } = props;
  console.log(hobbyList);

  return (
    <ul>
      {hobbyList.length > 0 &&
        hobbyList.map((hobby) => (
          <li key={hobby.id} onClick={() => showInfo(hobby.name)}>
            {hobby.name}
          </li>
        ))}
      {hobbyList.length == 0 && <li>Khong co so thich</li>}
    </ul>
  );
};

// Propstype checking
Hobby.propTypes = {
  hobbyList: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired,
};

// Default props
Hobby.defaultProps = {
  hobbyList: [],
  showInfo: () => {
    alert("clicked");
  },
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<App />);
