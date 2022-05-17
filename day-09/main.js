console.log('Hello main.js')

// Khai báo biến
let name;
console.log(name);

name = 'Bùi Hiếu';
console.log(name);

// Vừa khai báo biến vừa khởi tạo giá trị cho biến
let email = 'buihieu3008@gmail.com';
let number = 10;
let isStatus = true;

/* kiểu dữ liệu nguyên thuỷ (primary type)
undefined, string, number, boolean, ...
*/

// khai báo hằng số
const PI = 3.14;
console.log(PI);

let firstName = 'Hiếu';
let lastName = 'Bùi';

// Kiểm tra kiểu dữ liệu của 1 biến

console.log(typeof number);
console.log(typeof name);
console.log(typeof isStatus);

// Chuỗi
let message = 'Xin chào các bạn, mình tên là \'Bùi Hiên\'. Mình sinh năm 1997';
console.log(message);

let message1 = "Xin chào các bạn, " +
"mình tên là \"Bùi Hiên\". " +
"Mình sinh năm 1997";
console.log(message1);

// Cộng chuỗi
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Template string
let address = 'Hải Dương';
let age = '25';

// Có sử dụng
console.log(`Xin chào các bạn, mình tên là ${fullName}. Mình sinh năm ${2022 - age}, quê quán ở ${address}.`);

// Không sử dụng
console.log('xin chào các bạn, mình tên là ' + fullName + '. Mình sinh năm ' + (2022 - age) + '. quê quán ở ' + address)

// Hiển thị text theo nhiều dòng
console.log (`
    Dòng 1
    Dòng 2
    Dòng 3
`);

// Math Object
console.log(Math.PI);

// Lấy số ngẫu nhiên trong khoảng từ min - max
Math.floor(Math.random() * (100 - 50 +1) + 50);

// Lấy số bé nhất
Math.min(1,2,3,4,5,6);
console.log(Math.min(1,2,3,4,5,6));
console.log(""+1+0)
console.log(""-1+0) 
console.log(true + false) 
console.log(6/"3") 
console.log("2" * "3") 
console.log("$"+4+5) 
console.log("4"-2) 
console.log("4px" - 2) 
 console.log(7/0) 
 console.log("-9"+5) 
 console.log("-9"-5) 
 console.log(null+1) 
 console.log(undefined + 1 )
 console.log(typeof(7) + 1 )
 console.log(typeof "9" + 5)

let a = 1;
let b = 22;
let name1 = 'John';

 console.log(b + a); 
 console.log(c) = 
 console.log(a + name); 
 console.log(a + name + b); 
 console.log(a + b + name); 
 console.log(name + a); 
 console.log(name + a + b); 
 console.log(name + (a + b));
 console.log(`Hello ${name}`);
 console.log(`${name} + 1`); 
 console.log(`${name + 1}`); 
 console.log(`${name + a}`); 
 console.log(`a + b = ${a + b}`);
 console.log(`a + b = ${1 + 2}`); 
 console.log(`1 + 2 = ${1 + 2}`);
 console.log(`1 + 2 = ${a + b}`); 