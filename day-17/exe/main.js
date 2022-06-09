// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const h1 = document.querySelector('body h1')
h1.style.color = 'red';
h1.style.textTransform = 'uppercase';

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.getElementsByClassName('para');
console.log(paras);
Array.from(paras).forEach(ele => {
    ele.style.color = 'blue';
    ele.style.fontSize = '20px';
})

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3 = document.querySelector('body p:nth-child(4)')
const link = document.createElement('a');
link.innerText = "Tramg Facebook";
link.href = "http://facebook.com"
document.body.insertBefore(link, para3)
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector('.content h2')
title.innerText = 'Đây là thẻ tiêu đề'
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const contentP = document.querySelector('.content>p')
console.log(contentP);
contentP.setAttribute('class', 'text-bold')
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement('button');
button.innerText = 'Click me';
document.body.replaceChild(button, para3)
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const h2Copy = title.cloneNode(true);
console.log(h2Copy)
title.insertAdjacentElement('afterend', h2Copy);
// Xóa thẻ có class=“para-1”
const para1 = document.querySelector('body p:nth-child(2)')
para1.parentElement.removeChild(para1)