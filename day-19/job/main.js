// Yêu cầu
// Sử dụng Javascript để thực hiện các công việc sau

// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.

const job = document.querySelector('.jobs > .job-card')
const container = document.querySelector('.jobs')
const jobCoppy = job.cloneNode(true);
const jobCoppy2 = job.cloneNode(true);
const jobCoppy3 = job.cloneNode(true);
container.insertAdjacentElement('beforeend', jobCoppy)
container.insertAdjacentElement('beforeend', jobCoppy2)
container.insertAdjacentElement('beforeend', jobCoppy3)


// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
const job2 = document.querySelector('.job-card:nth-child(2) h3')
job2.innerText = 'JavaScript Developer'
const job3 = document.querySelector('.job-card:nth-child(3) h3')
job3.innerText = 'Java Developer'
const job4 = document.querySelector('.job-card:last-child h3')
job4.innerText = 'Python Developer'
// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobList = document.querySelector('#jobs-listed  span')
const jobbs = document.querySelectorAll('h3')
jobList.innerText = `${jobbs.length}`
// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const input = document.getElementById('search');
const jobCard = document.querySelectorAll('.job-card')
input.addEventListener('keyup', function(){
    let value = input.value;
    
    Array.from(jobCard).forEach(ele => {
    let jobTitle = ele.querySelector('h3').innerText;
    if (jobTitle.toLowerCase().includes(value.toLowerCase())) {
        ele.style.display = 'block';
    } else {
        ele.style.display = 'none';
    }
})

})
console.log(jobCard);

console.log(input)
// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const button = document.getElementById('show-all')

button.addEventListener('click', function() {
    input.value = '';
    Array.from(jobCard).forEach(ele => {
        ele.style.display = 'block';
    })
})