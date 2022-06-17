// Yêu cầu
// Sử dụng Javascript để thực hiện các công việc sau

// Thêm class “table-bordered” cho <table>
const table = document.querySelector('.table');
table.classList.add('table-bordered');
// Thêm class “bg-dark” cho <tr> đầu tiên
const firstTr = document.querySelector('.table tr:nth-child(1)')
firstTr.classList.add('bg-dark');

// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
const trNew = document.createElement('tr');
table.insertAdjacentElement('beforeend', trNew);
const td1TrNew = document.createElement('td');
td1TrNew.innerHTML = '6';
trNew.insertAdjacentElement('afterbegin', td1TrNew);

const td1TrNew1 = document.createElement('td');
td1TrNew1.innerHTML = 'Sean';
trNew.insertAdjacentElement('beforeend', td1TrNew1);

const td1TrNew2 = document.createElement('td');
td1TrNew2.innerHTML = 'Reyes';
trNew.insertAdjacentElement('beforeend', td1TrNew2);

const td1TrNew3 = document.createElement('td');
td1TrNew3.innerHTML = '@sreyes';
trNew.insertAdjacentElement('beforeend', td1TrNew3);

console.log(trNew)
// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
const trAll = document.getElementsByTagName('tr')
// trAll[4].parentElement.removeChild(trAll[4])
// taleEle.removeChild(trAll[4])
trAll[0].insertAdjacentElement('afterend',trAll[4])

let newTdAll = document.querySelectorAll('.table tr td:nth-child(1)')
newTdAll.forEach((ele, i) => {
    ele.innerText = i+1
})

// Đổi chỗ 2 cột “First” và “Handle” cho nhau
let thEle = document.querySelectorAll('.table th')
// console.log(thEle)
let tr1 = document.querySelector('.table tr:first-child')
tr1.appendChild(thEle[1])
tr1.insertBefore(thEle[3],thEle[2])



let colFirst = document.querySelectorAll('table tr td:nth-child(2)')
let colHandle = document.querySelectorAll('table tr td:nth-child(4)')
let col3 = document.querySelectorAll('table tr td:nth-child(3)')
Array.from(col3).forEach((col,i) =>{
    let colFirstItem = colFirst[i]
    let colHandleItem = colHandle[i]
    col.insertAdjacentElement('afterend',colFirstItem)
    col.insertAdjacentElement('beforebegin',colHandleItem)
})
// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”