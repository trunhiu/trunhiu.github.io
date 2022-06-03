// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
function sortStudents(arr) {
    let studentsName = arr;
    for (let arr of studentsName) {
         studentsName.sort().reverse();
    }
    return studentsName;
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuan']));


// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
function shuffleArray(array) {
    let num = array;
    for (let i = 0; i < num.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return num;
}

console.log(shuffleArray([1,2,3,4,5]))

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function difference(a1, a2) {
    let res = [];
    for (let i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1 ) {
        res.push(a1[i]);
      }
    }
    for (let i = 0; i < a2.length; i++) {
        if (a1.indexOf(a2[i]) === -1 ) {
          res.push(a2[i]);
        }
      }
    return res;
  }
console.log(difference([1, 2, 3, 5], [1, 2, 4]))

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
