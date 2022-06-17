// Yêu cầu
// Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
const form = document.getElementById('registrationForm')
const input = document.getElementById('username')
const labelUsername = document.createElement('label')
labelUsername.innerText = 'Username'
labelUsername.style.fontSize = '20px'
input.insertAdjacentElement('beforebegin', labelUsername)
console.log(input)

const input2 = document.getElementById('password')
const labelPassword = document.createElement('label')
labelPassword.innerText = 'Password'
labelPassword.style.fontSize = '20px'
input2.insertAdjacentElement('beforebegin', labelPassword)

const input3 = document.getElementById('confirmPassword')
const lableConfirmPassword = document.createElement('label')
lableConfirmPassword.style.fontSize = '20px'
lableConfirmPassword.innerText = 'Confirm Password'
input3.insertAdjacentElement('beforebegin', lableConfirmPassword)

console.log(input3)
// Kiểm tra xem password và confirm pass có trùng nhau hay không
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const registration = document.getElementById('btn')
function checkMathPassword(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        alert('Mat khau khong trung nhau')
        return true;
    } else {
        alert('Dang ky thanh cong')
    }
    return false;
}

registration.addEventListener('click', function() {  
    checkMathPassword(password, confirmPassword)
})


// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào. 
// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công
function enable() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    if (username.length > 0 && password.length > 0 && confirmPassword.length > 0) {
        registration.disabled = false;
    } else {
        registration.disabled = true;
    }
    return (username.length > 0 && password.length > 0 && confirmPassword.length > 0)
}
