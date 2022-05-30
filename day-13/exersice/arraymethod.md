# Array methods

## concat();

được sử dụng để gộp nhiều mảng với nhau và trả về mảng mới.

>> Cú pháp:
>> array1.concat(array2, array3, ... , arrayN);
>> Trong đó **array2**, **array3**, ... , **arrayN** là các mảng muốn gộp lại với mảng **array1**.

## copyWhithin();

được sử dụng khi muốn trích đoạn trong mảng và ghi đè vào đoạn khác trong chính mảng đó

>> Cú pháp:
>> array.copyWhithin(target, start, end);
>> trong đó :
>> target : Vị trí bắt đầu ghi đè.
>> start : **Không bắt buộc**, là vị trí bắt đầu của mảng muốn trích, **mặc định là 0**.
>> end : **Không bắt buộc**, là vị trí kết thúc của mảng muốn trích, **mặc định là độ dài của mảng**.

## fill();

Dùng để làm cho tất cả cách phần tử trong mảng giống nhau

>> Cú pháp:
>> array.fill(value, start, end);
>> trong đó : 
>> value : **Bắt buộc**, là giá trị mà bạn muốn điền vào mảng.
>> start : **Không bắt buộc**, là vị trí bắt đầu điền vào mảng, **mặc định là 0**.
>> end : **Không bắt buộc**, là vị trí kết thúc điền vào mảng, **mặc định là độ dài của mảng**.

## includes();

Dùng để kiểm tra một phần tử có xuất hiện trong mảng hay không. Phương thức trả về **true** nếu phần tử mảng có xuất hiện, trả về **false** nếu phần tử mảng không xuất hiện.

>> Cú pháp:
>> array.includes(element, start);
>> trong đó : 
>> element : **Bắt buộc** là giá trị của phần tử muốn kiểm tra.
>> start : **không bắt buộc** là vị trí bắt đầu tìm kiếm trong mảng, **bắt đầu từ 0**.

## indexOf();
Được sử dụng khi tìm vị trí **đầu tiên** của một phần tử trong mảng. Phương thức sẽ trả về **-1** nếu không tìm thấy.

>> Cú pháp:
>> array.indexOf(item, start);
>> trong đó :
>> item : **Bắt buộc**, giá trị của phần tử muốn tìm kiếm.
>> start : **Không bắt buộc**, là vị trí bắt đầu tìm kiếm, **mặc định là 0**.

## lastIndexOf();

Ngược lại với **indexOf();**

## isArray();

Dùng để kiểm tra đối tượng bạn muốn kiểm tra có phải array không.

>> Cú pháp:
>> Array.isArray(obj);
>> trong đó :
>> obj : là đối tượng bạn muốn kiểm tra.

## join();

được sử dụng khi muốn nối các phần tử của mảng thành một **String**.

>> Cú pháp :
>> array.join(separator);
>> trong đó :
>> separator : là giá trị sẽ nằm giữa các phần tử mảng sau khi được chuyển thành **String**. Mặc định định sẽ là dấu phẩy **','**.

## length();

Sẽ trả về số lượng phần tử trong mảng hoặc bạn có thể thay đổi số lượng phần tử trong mảng bằng cách gán giá trị mới cho thuộc tính này.

## pop();

Sẽ xoá **phần tử cuối** trong mảng đồng thời trả về phần tử vừa xoá.

>> Cú pháp:
>> array.pop();

## push();

Được dùng để thêm một phần tử vào cuối mảng đồng thời trả về độ dài của mảng.

>> Cú pháp:
>> array.push(item1, item2,..., itemN);
>> trong đó :
>> item1, item2,..., itemN : **bắt buộc** là các phần tử muốn thêm vào cuối mảng.

## reverse();

Được dùng khi muốn **đảo ngược** các phần tử trong mảng phần tử đầu sẽ là phần tử cuối.

>> Cú pháp:
>> array.reverse();

## shift();

Được dùng khi muốn xoá **phần tử đầu** của mảng đồng thời trả về phần tử đó.

>> Cú pháp:
>> array.shift();

## slice();

Được dùng khi muốn trích một mảng con từ vị trí **N** tới **M** trong mảng ban đầu. **Lưu ý: mảng trích này không bao gồm phần tử thứ M**.

>> Cú pháp:
>> array.slice(start, end);
>> trong đó :
>> start : **Không bắt buộc**, là vị trí **bắt đầu** bạn muốn trích, mặc định là 0. Bạn cũng có thể dùng số âm nếu vị trí **bắt đầu** là cuối mảng (-1 là vị trí của phần tử cuối mảng).
>> end : **Không bắt buộc**, là vị trí **kết thúc** của mảng con muốn trích. Bạn cũng có thể dùng số âm nếu vị trí **kết thúc** là cuối mảng (-1 là vị trí của phần tử cuối mảng).

## sort();

Được sử dụng khi muốn sắp xếp các phần tử trong mảng theo chiều tăng dần hoặc giảm dần. Mặc định phương thức **sort();** sẽ sắp xếp mảng theo thứ tự bảng chữ cái **tăng** dần. Trong trường hợp muốn tuỳ chỉnh thứ tự sắp xếp thì phương thức **sort();** chấp nhận một tham số dưới dạng **callback** giúp bạn làm điều này.

>> Cú pháp:
>> array.sort(function (a, b));
>> trong đó :
>> function (a, b) : **Không bắt buộc** là **callback** giúp bạn tuỳ chỉnh thứ tự sắp xếp các phần tử trong mảng. Tham số **a, b** là một cặp phần tử trong mảng. **Callback** trả về >= 0 thì **a, b** không đổi chỗ, trả về < 0 thì **a, b** đổi chỗ cho nhau.

Ví dụ:

```
// Sắp xếp mảng tăng dần
var numbers = [5, 3, 6, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3, 5, 6

// Sắp xếp mảng giảm dần
var numbers = [5, 3, 6, 1, 2];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers); // [6, 5, 3, 2, 1]
```
## splice();

Được sử dụng khi muốn thay thế một số phần tử trong mảng bằng một số phần tử khác.

>> Cú pháp:
>> array.splice(index, howmany, item1, item2,..., itemN);
>> trong đó :
>> index : **Bắt buộc** là vị trí bắt đầu thay thế, bạn có thể sử dụng số âm để tính vị trí từ cuối mảng lên (phần tử cuối cùng là -1).
>> howmany : **Không bắt buộc** có bao nhiêu phần tử sẽ được thay thế, mặc định là 0.
>> item1, item2,..., itemN : là các phần tử sẽ được thay thế vào mảng kể từ vị trí index.

Ví dụ: 

```
// Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"];
 
// Do các tham số item1,... itemX là không bắt buộc
// Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
// Xóa 2 phần tử mảng kể từ index 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);
console.log(fruits); // ["Banana", "Orange"]
```

## toString();

Trả về một String từ mảng ban đầu ngăn cách với nhau bằng dấu phẩy **','**.

>> Cú pháp :
>> array.toString();

## unshift();

Được sử dụng để thêm một hoặc nhiều phần tử vào đầu mảng. Phương thức sẽ trả về số lượng phần tử sau khi thêm.

>> Cú pháp:
>> array.unshift(item1, item2,..., itemN);
>> trong đó :
>> item1, item2,..., itemN : là các phần tử bạn muốn thêm vào đầu mảng.

## Nhóm thêm, xóa vào đầu, cuối mảng

- **pop();**: Xóa phần tử cuối mảng.
- **push();**: Thêm vào cuối mảng.
- **shift();**: Xoá phần tử đầu mảng.
- **unshift();**: thêm phần tử cuối mảng.