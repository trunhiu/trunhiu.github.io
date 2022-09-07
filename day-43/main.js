// const HelloWorld = () => {
//     return React.createElement("h1", {className: "heading", type: "1"}, "Hello World");
// }


//component, props, state
const HelloName = (props) => {
    const { name } = props;
    return React.createElement("h1", {className: "heading"}, `Hello ${name}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(HelloName, {name: "Bui Hieu"}, null));

