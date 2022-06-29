/*
**********************khái niệm API là gì?*************************
Application Programming interface (Giao diện lập trình ứng dụng)
Tập hợp quy tắc mà qua đó cho phép các thành phần trong cùng 1 trang web hoặc các ứng dụng tương tác như thé nào



********************ví dụ thực tế**********************
Đi ăn nhà hàng
Khách hàng :client (frontend)
Nhà bếp : sever (backend)
Khách hàng --> gọi món --> nhà bếp
Nhà bếp --> nấu món ăn --> khách hàng
Nhân viên (API) : Lấy thực đơn từ khách hàng --> gửi cho nhà bếp
Nhà bếp nấu ăn xong --> nhân viên bưng móng ăn lên cho khách hàng



****************Cấu trúc như nào?*********************
API = http method + URL 
http method (Động từ)
GET: lấy thông tin (Lấy thông tin từ menu)
POST: Tạo (Đặt món)
PUT: Cập nhật (Thay đổi món ăn)
DELETE: xoá (Huỷ món ăn)

URL (danh từ - resource) users
GET /users -> Lấy danh sách tất cả user
GET /users/1 -> Lấy thông tin của user có id là 1
GET /users/1/blogs -> Lấy danh sách tất cả blog của user có id là 1
GET /users/1/blogs/2 -> Lấy thông tin blog có id là 2 của user có id là 1

POST /users -> tạo user mới (/users/create --> hợp lệ nhưng không đúng chuẩn restful API)
{
    name:
    email:
}

POST /users/1/blogs -> Tạo blog mới cho user có id là 1
{
    name: 
    content:
    ...
}

PUT /users/1 -> Cập nhật thông tin cho user có id là 1
{
    name:
    email:
    ...
}

DELETE /users/1 -> xoá user có id là 1


***********Thực hiện gọi API như nào?***************
- axios (thư viện bên thứ 3, cần phẩi nối link vào để thực hiện) (Khuyên dùng)
- fetch API (có sẵn của javascript)
- AJAX (có trong jQuery, cũng cần phải nối link vào để sử dụng)


***************Test API như thế nào ******************
- Postman
- Extension VSCode : REST Client
- Test trực tiếp trên browser (chỉ sử dụng với API GET)

*/

// Gọi API sử dụng axios
const imageEle = document.getElementById("image");
const btnAxios = document.getElementById("btn-axios");

btnAxios.addEventListener("click", async () => {
  try {
    // Gọi API -> https://dog.ceo/api/breeds/image/random
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(res);
    console.log(res.data.message);

    imageEle.src = res.data.message;
  } catch (err) {
    console.log(err);
  }
});

// Gọi API sử dụng AJAX trong jQuery
$("#btn-jquery").click(function () {
  $.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
    success: function (response) {
      $("#image").attr("src", response.message);
    },
    error: function (error) {
      console.log(error);
    },
  });
});

// Gọi API sử dụng fetch API
const btnFetch = document.getElementById("btn-fetch");
btnFetch.addEventListener("click", async () => {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await res.json();
    imageEle.src = data.message;
  } catch (error) {
    console.log(error);
  }
});
