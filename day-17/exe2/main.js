// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const text = document.createElement('p');
console.log(text);
text.setAttribute('class', 'text');
text.style.color = '#777';
text.style.fontSize = '2rem';
text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
document.body.insertAdjacentElement('afterbegin', text);

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
let color = [{color: 'blue',},{color: 'blue',},{color: 'blue',}]
const ul = document.querySelector('ul')
color.forEach(ele => {
    const li = document.querySelector('ul li');
    li.style.color = ele.color
    ul.appendChild(li);
})

//Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau:
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ul2 = document.querySelector('body #list')
const li8 = document.createElement('li');
li8.innerText = 'Item 8'
ul2.insertAdjacentElement('beforeend', li8);
const li9 = document.createElement('li');
li9.innerText = 'Item 9'
ul2.insertAdjacentElement('beforeend', li9);
const li10 = document.createElement('li');
li10.innerText = 'Item 10'
ul2.insertAdjacentElement('beforeend', li10);
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector('#list li:nth-child(1)')
li1.style.color = 'red';
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector('#list li:nth-child(3)')
li3.style.backgroundColor = 'blue';
// Remove thẻ <li> 4
const li4 = document.querySelector('#list li:nth-child(4')
li4.parentElement.removeChild(li4);
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liNew = document.createElement('li');
liNew.innerText = 'Đây là thẻ <li>Item 4</li>';
li3.insertAdjacentElement('afterend', liNew)