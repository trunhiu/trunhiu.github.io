// Yêu cầu
// 1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
const para = document.querySelector("p");

const resutl = para.innerText.split(' ').map(ele => 
    ele.length >= 8 ? `<span style="background-color:yellow">${ele}</span>` : ele
).join(' ');


para.innerHTML = resutl;


// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const link = document.createElement('a');
link.innerText = 'facebook';
link.href = 'http://facebook.com'
para.insertAdjacentElement('afterend', link)
// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const count = document.createElement('div')
para.insertAdjacentElement('afterend', count)
count.innerText = `Đoạn văn này có ${para.innerText.split(' ').length} từ`

// 4. Thay thế các ký hiệu ? => 🤔, ! => 😲

// let emoji = para.innerText.split('').map(e => 
//     (!e.indexOf('?') ? `🤔` : e)
// ).join('');

// para.innerHTML = emoji;

// let emoji2 = para.innerText.split('').map(e => 
//     (e.includes('!') ? `😲` : e)
// ).join('');

// para.innerHTML = emoji2;
para.innerHTML = para.innerHTML.replace(/\?/g, '🤔')
para.innerHTML = para.innerHTML.replace(/\!/g, '😲')

