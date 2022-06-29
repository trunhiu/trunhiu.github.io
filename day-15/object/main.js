// Khai báo Object 
let emtyObject = {};

//khai báo Object có giá trị
//property: Đặc điểm tính chất của đối tượng
//method: Hành vi, hành động
let student = {
    id: 01,
    name: 'Nguyễn Văn A',
    email: 'a@gmail.com',
    status: false,
    address: {
        city: 'Hà Nội',
        district: 'Hoàng Mai',
    },
    // goToSchool() {
    //     console.log('Đi học');
    // }
    goToSchool: function() {
        console.log('Đi học');
    },
    showInfo : function() {
        console.log(`Name: ${this.name}, email: ${this.email}, point: ${this.point}`); //this tham chiếu tới đối tượng trong ngữ cảnh hiện tại.
    },
};

// Lấy ra thông tin đối tượng
console.log(student.email); // or console.log(student['email']);
console.log(student.name);
console.log(student.address.city);

// Thay đổi thông tin
student.email = 'nguyenvanA@gmail.com'
student.address.district = 'Đống Đa'

console.log(student);

// Thêm thuộc tính
student.point = 9;

console.log(student);

//Xoá thuộc tính
delete student.status;
console.log(student);

//Gọi phương thức
student.goToSchool();

student.showInfo();

//Phương thức
//1. Lấy danh sách keys
console.log(Object.keys(student));

//Duyệt keys để in ra values tương ứng.
// let keys = Object.keys(student);
// keys.forEach( key => {
//     console.log(student[key]);
// });

//Sử dụng for ... in
for (const key in student) {
    console.log(student[key]);
}

//2. Lấy danh sách values 
console.log(Object.values(student));

//3. Kiểm tra 1 key có tồn tại trong object hay không
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('age'));
