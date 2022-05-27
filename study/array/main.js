//1. toString: chyển từ array sang string
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.toString());

//2. join: giống toString nhưng thay đổi dấu và khoảng cách giữa các phần tử
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.join('-'));
//3. Pop: xoá phần tử cuối
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.pop()); // xoá element cuối mảng và trả về phần tử đã xoá
// console.log(languages);

//4. push: Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.push('Dart', 'Java'));
// console.log(languages);
//5 shift: xoá đi phần tử đầu mảng 
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.shift()); // xoá element đầu mảng và trả về phần tử đã xoá
// console.log(languages);
//6. unshift: Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// console.log(languages.unshift('Dart', 'java')); 
// console.log(languages);

//7. splice: 
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// languages.splice(1, 1); // đặt vào vị trí 1 và xoá 1 element
// languages.splice(1, 2); // đặt vào vị trí 1 và xoá 2 element
// languages.splice(1, 0, 'Dart'); // thêm element vào trước vị trí element 1
// tham số 1: vị trí muốn chèn
// tham số 2: muốn xoá bao nhiêu element (hoặc không xoá)
// tham số 3: thêm element vào trước vị trí muốn chèn
// languages.splice(1, 1, 'Dart'); // Xoá 'PHP' và thêm 'Dart' vào
// languages.splice(1, 1, 'Dart', 'Java'); 
// console.log(languages);

//8. concat: nối array
// let languages = [
//     'javascript', // 0
//     'PHP', // 1
//     'Ruby', // 2
// ];

// let languages2 = [
//     'Dart',
//     'Java'
// ];

// console.log(languages.concat(languages2));

//9. slice: Dùng để cắt 1 vài element của mảng (hoặc cắt hết)
let languages = [
    'javascript', // 0
    'PHP', // 1
    'Ruby', // 2
];

console.log(languages.slice(1));