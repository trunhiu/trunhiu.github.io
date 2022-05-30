//Khai báo mảng rỗng
let arrEmty = [];

// Khai báo mảng sau đó chèn dữ liệu cho mảng
let names = [];
names[0] = 'An';
names[1] = 'Hoà';
names[2] = 'Tuấn';

console.log(names);

// Vừa khai báo, vừa khởi tạo giá trị
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

//Lấy ra giá trị của mảng thông qua chỉ số
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[numbers.length - 1]);

// sét lại giá trị
numbers[0] = 10;
console.log(numbers)

//tạo biến mới rồi gán giá trị
let numbersOther = numbers;
console.log(numbersOther)

// Ví dụ
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];
let arr2 = arr1; // [1,2,3]
let arr3 = arr1.sort().reverse(); // [3,2,1]
let text = '1,2,3';

console.log(arr == arr1); // false
console.log(arr == arr2); // false
console.log(arr2 == arr3); // true
console.log(arr == text); // true
console.log(arr3 == text); // false

// Duyệt mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// tính tổng
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(total);

//tính tổng số lẻ
let totalOdd = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        totalOdd += numbers[i];
    }
}

console.log(totalOdd);

// Lấy ra mảng số chẵn
let newArr = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        newArr.push(numbers[i]);
    }
}

console.log(newArr);

// bài 1: Kiểm tra mảng có phải là mảng tăng dần hay không
function checkArrAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        } 
    }
    return true;
}

console.log(checkArrAsc([1,3,5,6,7]));

// bài 2: Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không
function checkEvenArrAsc(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 == 1) {
            return false;
        }
    }
    return checkArrAsc(arr);
}

console.log(checkEvenArrAsc([1,3,4,5,6,7]));
console.log(checkEvenArrAsc([1,2,4,5,2,6]));



