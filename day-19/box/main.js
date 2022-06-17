


// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu

const boxF = document.querySelector('.boxes')

colors.forEach(ele => {
    const box = document.createElement('div');
    box.classList.add('box')
    boxF.insertAdjacentElement('beforeend', box)
    box.style.backgroundColor = ele
    const span = document.querySelector('span');

    box.addEventListener('click', function () {
        
        const boxAll = document.querySelectorAll('.box')
        span.innerText = `${boxAll.length}`
        console.log(boxAll)
        if (box.style.display = 'block') {
            box.style.display = 'none';

        } else {
            box.style.display = 'block';
        }


    })

    const button = document.getElementById('btn');
    button.addEventListener('click', function () {
        const box2 = document.createElement('div');
        box2.classList.add('box');
        boxF.insertAdjacentElement('beforeend', box2);
        box2.style.backgroundColor = ele
        const span = document.querySelector('span');

    })
})

// Cập nhật số lượng total box trong thẻ <span> có class “points”


// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

const span = document.querySelector('span');
const boxAll = document.querySelectorAll('.box')
span.innerText = `${boxAll.length}`
console.log(boxAll)