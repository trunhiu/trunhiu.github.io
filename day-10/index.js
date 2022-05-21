// Khai báo kiểu boolean 
let a = true;
let b = false;

console.log (a);
console.log (b);
console.log (!a);
console.log (!b);

// Hàm boolean: giúp xác thực biểu thức đúng hay sai
console.log (Boolean(10));
console.log (Boolean(10 > 5));
console.log (Boolean(5 > 10));
console.log (Boolean(null));
console.log (Boolean(undefined));
console.log (Boolean(''));
console.log (Boolean(NaN));

// truthy & falsy values
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

// Một số toán tử: !, || , &&

// Toán tử &&
console.log('Toán tử điều kiện');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Toán tử || 
console.log('Toán tử điều kiện');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Câu lệnh If: Nếu ... Thì ...

console.log('Câu lệnh if');

let hour = 6;
if (hour < 10) {
    console.log('Good morning');
}

// Ví dụ 2
let troiDep = false;
let coTien = true;
if(troiDep && coTien) {
    console.log('Đi Chơi');
} 

// Ví dụ 3
let tienMat = false;
let chuyenKhoan = true;
if(tienMat || chuyenKhoan) {
    console.log('Mua được hàng');
}

// Câu lệnh if else: ngược lại if
// Ví dụ 1: Nếu trời đẹp thì đi chơi, ngược lại thì ở nhà 
if(troiDep == true) {
    console.log('Đi chơi');
} else {
    console.log('Ở nhà');
}

// Ví dụ 2: Nếu có 30 triệu trở lên thì mua Iphone 13 promax, ngược lại thì mua samsung s21
let money = 20;
if(money >= 30) {
    console.log('Mua Iphone 13 promax');
} else {
    console.log('Mua samsung s21');
}

// Câu lệnh if - else / else - else
// Ví dụ:
// Nếu có 30 triệu trở lên thì mua Iphone 13 promax
// Nếu có 20 -> 30 triệu thì mua samsung s21
// Nếu có 15 -> 20 triệu thì mua oppo
// Còn 15 triệu trở xuống thì mua xiaomi pro 9

money = 30;
if(money >= 30) {
    console.log('Mua iphone 13 promax');
} else if(money >= 20 && money < 30) {
    console.log('Mua samsung s21');
} else if(money >= 15 && money < 20) {
    console.log('Mua oppo');
} else {
    console.log('Mua xiaomi pro 9');
}

// if else lồng nhau
// Ví dụ: Kiểm tra 1 số là số nguyên dương, số nguyên âm hay là số 0 
// Nếu số đó là số nguyên dương thì kiểm tra tiếp là số chẵn hay số lẻ

let number = 11;
if(number > 0) {
    console.log('Số nguyên dương');

    if(number % 2 == 0) {
        console.log('Số chẵn');
    } else {
        console.log('Số lẻ');
    }
} else if(number == 0) {
    console.log('Số 0');
} else {
    console.log('Số nguyên âm');
}

// Toán tử 3 ngôi
// let hour = 6;
if (hour < 10) {
    console.log('Good morning');
} else {
    console.log('Good afternoon');
}

hour < 12
  ? console.log('Good morning')
  : console.log('Good afternoon');