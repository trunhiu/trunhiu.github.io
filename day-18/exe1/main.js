// Yêu cầu
// Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:
// Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
// Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không?
// Nếu có thông báo “Đăng nhập thành công”
// Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”

const users = [
    {
        username: "trunhiu",
        password: "conmeogaugau",
    },
    {
        username: "thuthuy",
        password: "conmeogaugau1",
    },
    {
        username: "michaelhudon",
        password: "conmeogaugau2",
    },
    {
        username: "jiminguyen",
        password: "conmeogaugau3",
    },
];

const btnLoginEle = document.getElementById("btn-login");

btnLoginEle.addEventListener("click", function () {
    const usernameEle = document.getElementById("username").value;
    const passwordEle = document.getElementById("password").value;
    if (usernameEle == "" && passwordEle == "") {
        alert("Vui lòng điền tài khoản và mật khẩu vào");
        return false;
    } else if (usernameEle == "") {
        alert("Vui lòng điển tài khoản vào");
        return false;
    } else if (passwordEle == "") {
        alert("Vui lòng điền mật khẩu vào");
        return false;
    } else if (usernameEle !== "" && passwordEle !== "") {
        let usernames = users.map(e => e.username)
        let passwords = users.map((e) => e.password)
        if (usernames == usernameEle && passwords == passwordEle) {
            alert("Dang nhap thanh cong");
        }
    } else {
        alert("Tai khoan hoac mat khau khong chinh xac")
    }


});

