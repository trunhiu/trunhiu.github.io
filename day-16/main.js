// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

const findSecondNum = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    result.sort((a, b) => {
        return a - b;
    });
    return result[result.length - 2];
}
console.log(findSecondNum([2, 1, 4, 3, 5, 5]))
//Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function findMaxlength(arr) {
    let maxLength = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxLength) {
            maxLength.push(arr[i]);
        }
    }
    return maxLength;
}

console.log(findMaxlength(['aba', 'aa', 'ad', 'c', 'vcd']))

//Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

const randomEle = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomEle([3, 7, 9, 11]))
//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

function similarity(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(similarity([1, 2, 3], [1, 2, 4]))

//Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

//Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
const findAgeUser = arr => {
    return arr.filter(ele => ele.age > 25);     
}

console.log(findAgeUser(users))

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
const findUpAge = arr => {
    return arr.sort((a, b) => a.age - b.age)
}

console.log(findUpAge(users))

//Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

const getCountElement = arr => {
    let result = {};
}

