// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
function checkElementExist(s) {
    let number = [];
    for (let i = 0; i < s.length; i++) {
        number = s.includes(n);
    }
    return number;
}

console.log(checkElementExist([1,2,3,4,5], 5))

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
function getElementGreater(s) {
    let number = [];
    for (let i = 0; i < s.length; i) {
      if (s > number[i]) {

      }
    }
}

console.log(getElementGreater(3))

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938
function randomHexCode() {
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, a, b, c, d, e, f];
    let hexCode = '#';
    for (let i = 0; i < 6 ; i++) {
        
    }
}


// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
function randomRgbCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
}


