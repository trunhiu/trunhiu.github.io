const heading = document.getElementById('heading');

//Xem danh sách class của phần tử
console.log(heading.classList);

// Thêm class
heading.classList.add('text-big', 'text-center');

// Xoá class
heading.classList.remove('text-big', 'text-center');

//kiểm tra 1 class có tồn tại không? true/false.
console.log(heading.classList.contains('text-red'));
console.log(heading.classList.contains('text-big'));

// Toggle
// kiểm tra nếu có class thì xoá đi nếu k có class thì thêm vào
// setInterval: lặp đi lặp lại 1 công việc sau 1 khoảng thời gian nhất định
//parameter 1: function (cv)
//parameter 2: time (ms)
// setInterval(function(){
//     heading.classList.toggle('text-red');
// }, 1000);

// delay 1 khoảng thời gian sau đó mới thực hiện công việc.
// setTimeout(function() {
//     heading.classList.toggle('text-red');
// }, 3000)

// Thực hiện đếm ngược thời gian từ 10s -> 0s
// Kết thúc thì hiển thị ra 1 message;

let time = 10;
let interval = setInterval(function(){
   time--;
   document.querySelector('.time').innerText  = `${time}s`;

   if(time == 0) {
       //Dừng quá trình lặp lại
       clearInterval(interval);

       document.querySelector('.message').classList.remove('hide');
   }
}, 1000);