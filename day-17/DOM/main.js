// Truy cập thông qua id
const heading = document.getElementById('heading');
console.log(heading);

// truy cập thông qua tag name
// HTMLcolection giống như mảng nhưng bản chất không phải là mảng
// HTMLcolection là tập hợp các Node ở dạng Element Node
// Node: Element Node, Text Node, Comment Node, Attribute Node,...
const paras = document.getElementsByTagName('p');
console.log(paras);

console.log(paras[0]); // Truy cập vào para1
console.log(paras.length);

//Duyệt HTMLcolection
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i]);
}

// chuyển đổi từ HTMLcolection --> Array.
Array.from(paras).forEach(element => {
    console.log(element);
});

// Truy cập thông qua clas name
const parasClassName = document.getElementsByClassName('para');
console.log(parasClassName);

// Truy cập thông qua CSS Selector
const h1 = document.querySelector('#heading');
console.log(h1);

const para1 = document.querySelector('body p:nth-child(2)');
console.log(para1);

const para2 = document.querySelector('body p:nth-child(3)');
console.log(para2);

const ul1 = document.querySelector('.box ul');
console.log(ul1);

const ul2 = document.querySelector('body>ul');
console.log(ul2);

const box = document.querySelector('.box');
console.log(box);

const para3 = document.querySelector('body p:nth-child(4)');
console.log(para3);

const h2 = document.querySelector('.para + .para');
console.log(h2);

const all = document.querySelectorAll('body > ul  li');
console.log(all); // Cách 1.


// Thay đổi thuộc tính CSS
const heading1 = heading.style.color = 'red'
console.log(heading1)

const heading2 = heading.style.backgroundColor = 'black ';
console.log(heading2);

for (let i = 0; i < paras.length; i++) {
    console.log(paras[i]);
    paras[i].style.color = 'blue';
}

// Lấy ra nội dung 

console.log(heading.innerHTML); // lấy cả class
console.log(heading.innerText); // không hiện thẻ class
console.log(heading.textContent); // giữ đúng định dạng
console.log(heading.innerHTML = 'Xin chào'); 
console.log(heading.innerHTML = '<span>Xin chào các bạn</span>'); // Hiểu thẻ <span>
// console.log(heading.innerText = '<span>Xin chào các bạn</span>'); // Không Hiểu thẻ <span>
// console.log(heading.textContent = '<span>Xin chào các bạn ...</span>'); // Không Hiểu thẻ <span>


console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

// Thêm phần tử
// console.log(document.body.prepend(para1)); // Thay đổi vị trí

console.log(document.body.insertBefore(para1, para3));

// Thêm phần tử DOM: Cách số 1.
// Ví dụ : tạo ra thẻ a (google)

const link = document.createElement('a');
link.innerText = 'Trang Google';
link.href = 'http://www.google.com';
console.log(link);
document.body.insertBefore(link,ul2);

// Tạo thẻ input, type='text', placeholder='Enter name'
// Vị trí: đằng trước para2

const inputs = document.createElement('input');
inputs.type = 'text';
inputs.placeholder = 'Enter name';
console.log(inputs);
document.body.insertBefore(inputs, para2);

// Thêm phần tử DOM: Cách số 2.
// insertElement:
document.body.insertAdjacentElement('afterbegin', link);


box.insertAdjacentHTML('afterend', '<button>Click me</button>');

// Sử dụng vòng lặp để tạo nội dung và insert
let links = [
    {
        link: 'https://www.facebook.com/',
        title: 'Trang Facebook'
    },
    {
        link: 'https://www.instagram.com//',
        title: 'Trang Instagram'
    },
    {
        link: 'https://twitter.com/home?lang=vi/',
        title: 'Trang Twitter'
    }  
]

// Truy cập 
const socialMedia = document.querySelector('.social-media');

//cách 1: Tạo thẻ và chèn
// links.forEach(ele => {
//     const link = document.createElement('a');
//     link.innerText = ele.title;
//     link.href = ele.link;

//     socialMedia.appendChild(link);
// })

//Cách 2: insert trực tiếp html --> insertAdjacentHTML
// links.forEach(ele => {
//     socialMedia.insertAdjacentHTML('beforeend', `<a href="${ele.link}">${ele.title}</a>`)
// })

//Cách 3: sử dụng innerHTML
// let html = '';
// links.forEach(ele => {
//     html += `<a href="${ele.link}">${ele.title}</a>`
// })

// socialMedia.innerHTML = html;

//Cách 4: sử dụng innerHTML
links.forEach(ele => {
    socialMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a>`
})

// Xoá: Thẻ cha và thẻ muốn xoá

// document.body.removeChild(heading); // Cách 1

heading.parentElement.removeChild(heading); // Cách 2

// Thay thế thẻ này bằng thẻ khác

const h3 = document.createElement('h3');
h3.innerText = 'Đây là thẻ H3';

document.body.replaceChild(h3, para3);

// sao chép (clone)

const boxCoppyTrue = box.cloneNode(true);
const boxCoppyFalse = box.cloneNode(false);

console.log(boxCoppyTrue);
console.log(boxCoppyFalse);

document.body.prepend(boxCoppyTrue);