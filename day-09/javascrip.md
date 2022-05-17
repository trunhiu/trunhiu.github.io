# Khái niệm cơ bản về Javascript

## Javascript căn bản 

### Khái niệm Javascript:

- Javascript (JS) là một ngôn ngữ kịch bản phía client
- Javascript được sử dụng rộng rãi trong việc kết hợp với HTML/CSS để thiết kế web
động.

### Công dụng của Javascript:
- Sửa đổi nội dung của một trang web.
- Thay đổi style và vị trí của các thành phần trên trang web.
- Phản hồi với các sự kiện từ người dùng.
- Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.
- Thông báo cho người dùng.
- Thao tác với dữ liệu đầu vào và hiển thị kết quả sau khi xử lý.
- Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.

## Có 2 cách để viết Javascript:

### Cách 1: Viết trực tiếp mã Javascript trong HTML 

> Chú ý: nên đặt dưới cùng của phần body

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- Viết mã Javascript trong cặp thẻ script -->
    <script>
        console.log("Hello world");
    </script>
</body>
</html>
```

Mở file trên trình duyệt, sau đó **Bấm f12** hoặc **chuột phải + inspect** và vào tab **console** để xem kết quả.

### Cách 2: Tạo một file riêng đặt tên là main.js (ngang cấp với index.html)

> Nên sử dụng cách này
- Đầu tiên tạo file **index.html**
- Tiếp theo tạo file **main.js**
- Rồi nhúng file **main.js** vào file **index.html** qua thuộc tính **src** trong thẻ **script**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- Link sang 1 file javascript -->
    <script src="./main.js"></script>
</body>
</html>
```

- Để hiện thị ở tab console cần viết code sau:

```
// file main.js
console.log("Hello world");
```

## Biến trong Javascript

### Khái niệm về biến:

Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.
Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.
Ví dụ:
- Biến số thì có các phép cộng, trừ, nhân, chia,...
- Biến chữ thì có độ dài của chuỗi, phép nối chuỗi,...
Để khai báo biến sử dụng từ khoá **let** hoặc **const**

> Tuy nhiên **let** mình có thể thay đổi giá trị được còn **const** thì cố định giá trị không được thay đổi.

Có 2 cách để khai báo biến:
- Khai báo và không gán giá trị cho biến: **let age;**
- Khai báo và gán giá trị cho biến: **let age = 25;**

Lưu ý quy tắc đặt tên biến:

> - Chứa các ký tự chữ, số, _ và $
> - Ký tự đầu tiên không được là số (nên là chữ)
> - Có phân biệt hoa thường
> - Không trùng với các từ khóa của Javascript như: **for**, **while**, **this**, … (tham khảo thêm keyword javascript)
> - Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc.

### Kiểm tra kiểu dữ liệu của biến

Để kiểm tra kiểu dữ liệu của biến, chúng ta sử dụng toán tử typeof

```
let number = 10;
console.log(typeof number); // "number"

let name = "Bùi Hiên";
console.log(typeof name); // "string"
```

## Kiểu dữ liệu String

### Khái niệm

- String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.
- Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ".

Ví dụ:

```
let name = “Nguyễn Văn A”;
let email = “abc@gmail.com”;
```

Lưu ý:
Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.

```
let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
```

Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để nối chuỗi.

```
let message = "Xin chào các bạn, " +
"mình tên là \"Bùi Hiên\". " +
"Mình sinh năm 1997";
```

### Nối chuỗi trong Javascript

Để nối chuỗi chúng ta sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.

```
let firstName = "Nguyễn";
let lastName = "Thu Hằng";
let fullName = firstName + " " + lastName;
```

## Template strings – ES6

### Khái Niệm 

Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự nháy đơn hoặc nháy kép.
Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.
Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:

```
`string_text ${expression} string_text`
```

Ví dụ:

```

let name = "Bùi Hiếu"
let year = 1997

console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);
```

## Kiểu dữ liệu Number

### Khái niệm:

Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.

```
let age = 25;
let num = 5.1;
```

## Math object trong Javascript

### Khái niệm:

Đối tượng **Math** trong Javascript sẽ giúp bạn thực hiện các biểu thức đặc biệt trong toán học.
Một số phương thức hay được sử dụng:
> - **Math.PI** : Lấy ra giá trị của số PI
> - **Math.round(number)** : Làm tròn số bình thường
> - **Math.ceil(number)** : Làm tròn số lên
> - **Math.floor(number)** : Làm tròn số xuống
> - **Math.random()** : Random 1 số ngẫu nhiên trong khoảng 0 -> 1
> - **Math.min(number1, number 2, … number n)** : Lấy ra giá trị nhỏ nhất trong danh sách số
> - **Math.max(number1, number 2, … number n)** : Lấy ra giá trị lớn nhất trong danh sách số
> - **Math.pow(a, b)** : Số mũ (a^b)
> - **Math.sqrt(number)** : Căn bậc 2

Ví dụ:

```
// Một số ví dụ về Math Object

// 1. Math.PI
console.log(Math.PI); // 3.141592653589793

// 2. Math.ceil : Làm tròn lên
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(1.7)); // 2

// 3. Math.floor : Làm tròn xuống
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.6)); // 2

// 4. Math.round : Làm tròn bình thường
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.6)); // 3

// 5. Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
console.log(Math.min(2, 4, 1, 6, 7)); // 1

// 6. Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
console.log(Math.max(2, 4, 1, 6, 7)); // 7

// 7. Math.pow(a, b) : Số mũ (a^b)
console.log(Math.pow(2, 3)); // 8

// 8. Math.sqrt(number) : Căn bậc 2
console.log(Math.sqrt(9)); // 3

// ...
```

Ngoài ra còn rất nhiều phương thức khác của đối tượng Math. Các bạn có thể tham khảo tại đây:
https://www.w3schools.com/js/js_math.asp


