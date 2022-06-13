// Yêu cầu
// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red
const buttonMinus = document.querySelector('.prevBtn');
const buttonPlus = document.querySelector('.nextBtn');


let counter = 0;
buttonPlus.addEventListener('click', function() {   
    counter++;
    document.getElementById('counter').innerText = `${counter}`;
    if(counter == 0) {
        document.getElementById('counter').style.color = '#333333';
    } else if (counter > 0) {
        document.getElementById('counter').style.color = 'green';
    } else {
        document.getElementById('counter').style.color = 'red';
    }
});

buttonMinus.addEventListener('click', function() {
    counter--;
    document.getElementById('counter').innerText = `${counter}`;
    if(counter == 0) {
        document.getElementById('counter').style.color = '#333333';
    } else if (counter > 0) {
        document.getElementById('counter').style.color = 'green';
    } else {
        document.getElementById('counter').style.color = 'red';
    }
})
