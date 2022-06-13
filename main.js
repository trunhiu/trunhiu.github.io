//Sử dụng += để nối chuỗi xuất ra trong lệnh innerHTML
function Checkdangnhap(event, minKt, maxKt)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var username = document.getElementById('tendn').value;



    if (username == '')

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập ko được để trống ';

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự ';

    } else mess.innerHTML = 'Tên đăng nhập của bạn là :' + username + '';

}


function Checkpass(event)

{

    event.preventDefault();

    var pass = document.getElementById('mk').value;

    var mess = document.getElementById('errorText');

    if (pass == '')

    {

        document.getElementById('mk').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Mật khẩu ko được để trống ';

    } else mess.innerHTML += 'Mật khẩu của bạn là ' + Array(pass.length + 1).join("*") + '';

}



btndangnhap.click(function Validate() {

    //Mặc định các lỗi này sẽ ẩn

    var mess = $('errorText');

    mess.html('');

    //Gọi các hàm đã viết

    Checkdangnhap(event, 3, 10);

    Checkpass(event);


});