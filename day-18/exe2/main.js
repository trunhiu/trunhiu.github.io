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

// 1. Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
const button = document.createElement('button');
const input = document.createElement('input');

button.innerText = 'Add'
document.body.insertAdjacentElement('beforeend', button);
button.insertAdjacentElement('afterend', input);
button.addEventListener('click', function () {
    if (input.value == '') {
        alert('Nội dung không được để trống')
    } else {
        const liN = document.createElement('li');
        liN.innerText = input.value;
        ul2.insertAdjacentElement('beforeend', liN);
    }
    input.value = '';
})


// 2. Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const buttonRemove = document.createElement('button');
buttonRemove.innerText = 'Remove';
input.insertAdjacentElement('afterend', buttonRemove);
const ul = document.getElementById('list')

buttonRemove.addEventListener('click', function () {
       let liLast = document.querySelector('li:last-child');
       if (liLast) {
        ul.removeChild(liLast);    
       }   
})

// 3. Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

const buttonHide = document.createElement('button');
buttonHide.innerText = 'Hide';
ul.insertAdjacentElement('beforebegin', buttonHide);

buttonHide.addEventListener('click', function () {
    if (ul.style.display == 'block') {
        buttonHide.innerText = 'Show';
        ul.style.display = 'none';
    } else {
        buttonHide.innerText = 'Hide';
        ul.style.display = 'block';
    }
})