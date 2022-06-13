// Yêu cầu 1:

// Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ

const btn1 = document.getElementById("btn-1");
const para = document.getElementById("text");
let contents = ["Xin chào các bạn", "Hello everybody", "Bonjour"];
const changeContent = () => {
    let i = Math.floor(Math.random() * contents.length);
    para.innerText = contents[i];
};

// Yêu cầu 2:

// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)

const btn2 = document.getElementById("btn-2");

function randomColor() {
    let a = "#";
    let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
        a += b[Math.floor(Math.random() * b.length)];
    }
    
    return a;
};

const changeColor = function () {
    para.style.color = randomColor();
}

btn2.onclick = changeColor;

// Yêu cầu 3:

// Khi nhấn vào button “Change background” thì thay đổi màu của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)

const btn3 = document.getElementById('btn-3');
function randomColor2() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let result = `rgb(${r},${g},${b})`;
    console.log(result);
    return result;

}
const changeColor2 = function () {
    para.style.backgroundColor = randomColor2();
}

btn3.onclick = changeColor2;