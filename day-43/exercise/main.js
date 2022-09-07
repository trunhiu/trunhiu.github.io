const FashionTrend = () => {
    return (React.createElement("div", {className: "intro-content"},
        React.createElement("h1", {className: "intro-title"}, "Fashion Trends"),
        React.createElement("p", {className: "intro-description"}, "There are some trends that are just too plain wacky to really affect your wardrobe,so for that reason we've left out a few ideas we know you'd rather sidestep."),
        React.createElement("a", {href: "#", className: "intro-btn"}, "Buy now"),
    )
);
}

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(React.createElement(FashionTrend, null, null));