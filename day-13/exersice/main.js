//Bài 1: Tìm số lớn nhất trong mảng
function findMaxArr(arr) {
    let max = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxArr([2, 6, 4, 8, 3, 5, 1, 7, 9]));

//Bài 2: Tìm số nhỏ nhất trong mảng
function findMinArr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMinArr([2, 6, 4, 8, 3, 5, 1, 7, 9,]));

//Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function findBalances(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newarr[i] = 0;
        } else {
            newarr[i] = 1;
        }
    }
    return newarr;
}

console.log(findBalances([2, 5, 6, 3, 7, 8, 9]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
// function repeatString(s) {
//     return s.repeat(10);
// }

// console.log(repeatString('a'));

function repeatString(str, num) {
    let result = [];
    for(let i = 0; i < num; i++) {
        result.push(str);
    }
    return result.join('');
}

console.log(repeatString('a', 10));


// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

function repeatString1(s) {
    return (s + '-').repeat(9) + s;
}

console.log(repeatString1('a'));


