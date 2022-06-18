// 1. function expression
// // function có thể gán cho biến
// // regular function
// function sum(a,b) {
//     return a + b;
// }

// // Anonymous function : Functions không có tên (vô danh, ẩn danh)
// const sum1 = function(a,b) {
//     return a + b;
// }

// console.log(sum1(3,4));

// // 2. higher order Functions (HOF) : function bậc cao
// Cách1: Truyền vào làm tham số cho function khác.
// const fillterNumber = function(arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(func(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// let data1 = fillterNumber([1,2,3,4,5,6], function(ele) {
//     return ele % 2 == 1;
// })
// console.log(data1);

// let data2 = fillterNumber([1,2,3,4,5,6], function(ele) {
//     return ele % 2 == 0;
// })
// console.log(data2);

// let data3 = fillterNumber([1,2,3,4,5,6], function(ele) {
//     return ele > 3;
// })
// console.log(data3);



// //Cách 2: có thể được trả về từ function khác.

// const sum2 = function(a, b) {
//     return function(c) {
//         return a + b + c;
//     }
// }

// let func = sum2(10, 20);
// console.log(func);

// let data = func(30);
// console.log(data);

// let data = sum2(10, 20)(30);
// console.log(data);

// //Cách 3: Arrow function
// // function sum(a,b) {
// //     return a + b;
// // }

// const sum3 = (a, b) => {
//     return a + b;
// }
//  console.log(sum3(5,6));

// // ForEach
// // Khai báo mảng các số
// let numbers = [1, 2, 3, 4, 5, 6]


// //In ra các phần tử trong mảng
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// //Value : number[i]
// //index : i
// numbers.forEach(function(value, index){
//     console.log(value);
// })

// numbers.forEach((value, index) => {
//     console.log(`index: ${index} - value: ${value}`);
// })


// // Tinh tong
// let total = 0;
// numbers.forEach((value) => {
//     total += value;
// })

// console.log(total);

// //In ra các giá trị số lẻ
// numbers.forEach(value => {
//     if(value % 2 == 0) {
//         return
//     }
//     console.log(value);
// })

// // For ... of 
// for (const value of numbers) {
//     console.log(value);
// }


// Spread operator
// let numbers = [1, 4, 11, 6, 2, 4, 7, 0]

// console.log(Math.max(...numbers))

// // Nối mảng
// let a1 = [1, 2];
// let a2 = [3, 4];
// let a3 = [...a1, ...a2]
// console.log(a3)

// let a4 = [5, 6, ... a1, 7, 8, ... a2, 9, 10]
// console.log(a4);

// //copy trong array
// let numbersCopy = numbers.slice();
// let numbersCopy1 = [...numbers];

// numbersCopy.push(numbers);
// console.log(numbersCopy);
// console.log(numbersCopy1);