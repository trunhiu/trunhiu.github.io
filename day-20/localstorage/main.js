// Kiểm tra xem có hỗ trợ không
// if(typeof(Storage) !== "undefined") {
//     console.log('Có hỗ trợ');
// } else {
//     console.log('Không hỗ trợ');
// }

// Lưu item
localStorage.setItem('name', 'Ngô B');
localStorage.setItem('number', '1');
localStorage.setItem('isStatus', 'false');


let numbers = [1, 2, 3, 4, 5, 6];
let todos = [
    {
        id: 1,
        title: 'Đi chơi',
        status: true
    },
    {
        id: 2,
        title: 'Đi shopping',
        status: false
    },
    {
        id: 3,
        title: 'Đi ăn trưa',
        status: true
    },
    {
        id: 4,
        title: 'Đi ăn tối',
        status: false
    },
];

localStorage.setItem('numbers', numbers);
localStorage.setItem('todos', todos);


// Chuỗi JSON
// Object -> JSON : JSON.stringify();
// JSON -> Object -> JSON.parse();
localStorage.setItem('numbers', JSON.stringify(numbers));
localStorage.setItem('todos', JSON.stringify(todos));

// Lấy dữ liệu ra
console.log(numbers);
console.log(todos);
console.log(JSON.parse(localStorage.getItem('todos')));
console.log(JSON.parse(localStorage.getItem('numbers')));