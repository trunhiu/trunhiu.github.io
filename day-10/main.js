// Định nghĩa function
function sayHello() {
    console.log('Xin chào');
}

sayHello();

// function có 1 tham số
function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`);
}

sayHelloWithName('Nguyễn Văn A');
sayHelloWithName('Trần C ');
sayHelloWithName('Ngô B');

// function có 2 tham số
function showInfo (name, year) {
    console.log(`Xin chào tôi tên là ${name}, năm nay tôi ${2022 - year} tuổi.`)
}

showInfo('Bùi Hiếu', 1997);
showInfo('Bùi Hiền', 1997);

// function có trả về kết quả
// Ví dụ tính tổng 2 số a, b
function sum(a, b) {
    let result = a + b;
    console.log(a); // Những câu lệnh đằng trước mới thực thi, còn sau return thì k được.
    console.log(b);
    return result;
}

let data = sum(3, 4);
console.log(data);    // Sử dụng lâu dài thì đặt thêm tên biến.

console.log(sum(10, 20)); // Sử dụng để kiểm tra ngay thì k cần đặt tên biến.
console.log(sum(data, 10));

// Default Parameters
function sum1(a = 10, b = 20) {
    let result = a + b;
    return result;
}

console.log(sum1(3)); // 23
console.log(sum1()); // 30
console.log(sum1(5, 6)); // 11

function sayHello1() {
    console.log('Xin chào các bạn');
}


sayHello1 ();

function sayHelloWithName1(name1) {
    console.log(`Xin chào ${name1}`);
}

sayHelloWithName1 ('X');
sayHelloWithName1 ('"X"');

function sum2 (a, b) {
    let result = a + b;
    return result;
}

console.log(sum2(5, 6));

function sum3(a, b) {
    let result = (a * a + b * b);
    return result;
}

console.log(sum3(2, 3));

// Biến global: Định nghĩa bên ngoài function
let name = 'Bùi Trung Hiếu';