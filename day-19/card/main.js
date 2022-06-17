// Yêu cầu
// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const ulEl1 = document.querySelector('.card-body ul');
console.log(ulEl1)
const liPro = document.createElement('li');
liPro.innerText = '24/7 Phone support';
ulEl1.insertAdjacentElement('beforeend', liPro);
// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

const pro = document.querySelector('.col-md-4')
const basic = document.querySelector('.justify-content-center .col-md-4:nth-child(2)')
pro.insertAdjacentElement('beforebegin', basic)
// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

const button1 = document.querySelector('.card-body button')
button1.style.backgroundColor = '#0984e3'
button1.style.color = '#fff'

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

const li1 = document.querySelector('#pro-plan ul > li:nth-child(2)');
const li2 = document.querySelector('#basic-plan ul > li:nth-child(2)');
li1.innerText = '25 GB of storage'
li2.innerText = '3 GB of storage'