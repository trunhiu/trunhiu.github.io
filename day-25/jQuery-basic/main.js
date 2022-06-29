$("#heading").html("xin chao cac ban");

// $("#heading").css("color", "red");
// $("#heading").css("background-color", "black");

$("#heading").css({
  color: "red",
  "background-color": "black",
});

// Lắng nghe sự kiện
$("#heading").click(function () {
  alert("Click vao the h1");
});

// Sử dụng vòng lặp
$("p").each(function (index, element) {
  $(element).html(`Thẻ para ${index + 1} đã được thay đổi nội dung`);
  $(element).css("color", "blue");
});

// Truy cập vào 1 thẻ thông qua chỉ số
$("p").eq(1).html("Thẻ para 2 này đã được thay đổi nội dung (update)");

$("p").first().css("color", "pink");
$("p").last().css("color", "green");

// Thêm
$("p").last().after("<button>Click me</button>");

// Thay thế
$("p").first().replaceWith(`<input type='text' placeholder="nhập nội dung">`);

// Xoá
$(".box ul").children().first().remove();

// Copy
$("#heading").clone().appendTo("body");

// Ẩn hiện
$("ul").last().css({
  "background-color": "black",
  color: "white",
});

$("button").click(function () {
  $("ul").last().slideToggle();
  $("ul").first().slideUp(2000).slideDown(2000);
});
