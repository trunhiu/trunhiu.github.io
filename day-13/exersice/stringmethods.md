# String methods

## length

Dùng để lấy độ dài của chuỗi.

>> Cú pháp:
>> string.length

## indexOf(); (Search cũng giống như indexOf)

Dùng để tìm từ **đầu tiên** cần tìm trong chuỗi, nếu chuỗi không có từ cần tìm trả về -1.

>> Cú pháp:
>> string.indexOf(keyword);
>> trong đó :
>> keyword : là từ khoá bạn cần tìm.

## lastIndexOf();

Giống như **indexOf();** nhưng ngược lại tìm từ **cuối cùng** trong chuỗi.

## slice(); (Được truyền số âm để cắt chuỗi)

Dùng để cắt một chuỗi con từ một chuỗi cha.

>> Cú pháp:
>> string.slice(begin, end);
>> trong đó :
>> begin : là vị trí **bắt đầu** cắt chuỗi, tính từ 0.
>> end : là vị trí **kết thúc** cắt chuỗi, nếu **không có** thì cắt đến hết chuỗi.

## substring(); (Giống hàm **slice** nhưng không được truyền số **âm**)

## substr();

Dùng để cắt chuỗi nhưng cắt từ vị trí mình muốn và độ dài của chuỗi mình muốn cắt.

>> Cú pháp:
>> string.substr(begin, length);
>> trong đó :
>> begin : Là vị trí **bắt đầu** cắt chuỗi, tính từ 0.
>> length : là độ dài của chuỗi muốn cắt **tính từ điểm bắt đầu cắt**.

## replace();

Phương thức này giúp chúng ta tìm và thay thế chuỗi.

>> Cú pháp:
>> string.replace(chuoicantim, chuoithaythe);
>> trong đó :
>> chuoicantim : là chuỗi cần tìm để thay thế.
>> chuoithaythe : là chuỗi thay thế.

## toUpperCase();

Dùng để chuyển đổi chuỗi thành chữ in hoa.

>> Cú pháp:
>> string.toUpperCase();

## toLowerCase();

Dùng để chuyển đổi từ chữ in hoa thành chữ thường

>> Cú pháp:
>> string.toLowerCase();