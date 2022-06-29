// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
$("ul").before(`<button>Add</button>`)
const btnAdd = $("button");
$("ul").before(`<input type="text" placeholder="Nhập vào đây">`);
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
btnAdd.click(() => {
    let value = $("input").val();
    if (!$("input").val()) {
        alert("Khong duoc de trong");
    } else {
        $("li").last().after(`<li>${value}</li>`);
    }
})


// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
$("ul").before(`<button>Remove</button>`);
const btnRemove = $("button:nth-child(3)");

btnRemove.click(() => {
    let liL = $("li:last");
    if (liL) {
        liL.remove();
    }
})


// Thêm 1 nút Hide trên đầu của danh sách ul
$("ul").before(`<button>Hide</button>`);
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
const btnHide = $("button:last");
btnHide.click(() => {
    $("ul").toggle(1000);
    switch (btnHide.text()) {
        case "Show":
            btnHide.text("Hide");
            break;
        case "Hide":
            btnHide.text("Show");
    }
});

