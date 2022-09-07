const menus = [
    { path: "/", label: "Trang chủ" },
    { path: "/shop", label: "Cửa hàng" },
    { path: "/about", label: "Về chúng tôi" },
    { path: "/contact", label: "Liên hệ" },
];

const ListMenu = ({menus}) => {
    return React.createElement(
        "div",
        {className: "menu-list"},
        menus.map((menu, index)=> {
            return React.createElement(
                Menu,
                {path: menu.path, label: menu.label, key: index},
                null,
            )
        })
    )
}

const Menu = ({path, label}) => {
    return React.createElement(
        "a",
        {href: path, className: "menu-item"},
        label
    );
}

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(React.createElement(ListMenu, {menus: menus}, null));
