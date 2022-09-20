import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: "Bui Hieu",
        age: 25,
        email: "bui@gmail.com",
      },
    };
  }

  componentDidMount() {
    console.log("mounted");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handleApp = () => {
    console.log("clicked");
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  //Merging
  changeName = () => {
    this.setState({ user: { name: "Nguyen Van A" } });
  };

  render() {
    let { count } = this.state;
    let { color, bg } = this.props;

    return (
      <>
        <h1 style={{ color: color, backgroundColor: bg }}>Counter : {count}</h1>
        <button onClick={this.handleApp}>Click Here</button>
        <h2>Name: {this.state.user.name}</h2>
        <button onClick={this.changeName}>Change name</button>
        {console.log("render")}
        {/* <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default Counter;
