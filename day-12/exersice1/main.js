//Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
function calculateFactorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log(calculateFactorial(5));

//Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó


//Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

function translate(str) {
    let newstr = 'JB';
    switch (newstr) {
        case 'VN': {
            console.log('Xin chào');
            break;
        }
        case 'EN': {
            console.log('Hello');
            break;
        }
        case 'JB': {
            console.log('Konnichiwa');
            break;
        }
    }
}

translate();

//Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

//Bài 5: Viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
function printColor(number){
    for (i = 0; i <= 100; i++) {
        if (i % 2 == 0 ) {
            document.write(`<span style="color: blue; ${number}" /span>`);
        }else {
            document.write(`<span style="color: red; ${number}" /span>`);
        }
    }
}

console.log(printColor(1234567))