//Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

//Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function checkStringExist(str1, str2) {
    str = str1.includes(str2);
    return str;
}

console.log(checkStringExist('Xin chào các bạn', 'bạn'));

//cach 2:
function checkStringExist1(str1, str2) {
    if(str1.indexOf(str2) !== -1) {
        return true;
    }
    return false;
}

console.log(checkStringExist1('Xin chào các bạn', 'bạn'));

//Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function shortenString(str) {
    let res = str;
    if (res.length > 8) {
        res = str.slice(0, 8) + '...';
    }
    return res;
}

console.log(shortenString('Xin chào cac bạn'));

//Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

function isSymmetricalString(n) {
    let start = 0;
    let end = n.length - 1;
    while (start < end) {
        while (n[start] === ' ') {
            start++;
        }
        while (n[end] === ' ') {
            end--;
        }
        if (n[start].toLowerCase() === n[end].toLowerCase()) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isSymmetricalString('Race car'));

//Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

//Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

function change(s) {
    s = s.toLowerCase();
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            res += '_';
        } else {
            res += s[i];
        }
    }
    return res;
}

console.log(change('HELLO world'))

